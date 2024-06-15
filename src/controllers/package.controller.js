const Package = require('../models/package')
const PackageSelected = require('../models/packageSelected')

export async function getAllPackage(req, res){
    try {
        const packages = await Package.find();
        return res.json({packages: packages})
    } catch (error) {
        console.log(error)
    }
}

export async function getPackageById(req, res){
    try {
        const packages = await Package.findById(req.body.id);
        return res.json({package: packages})
    } catch (error) {
        console.log(error)
    }
}

export async function getPackageByUserId(req, res){
    try {
        const myPackage = await PackageSelected.findOne({"userId": req.body.id});
        console.log(">>" + req.body.id)
        if (myPackage == null || new Date(myPackage.ends_at) < new Date(Date.now()))
            return res.json({ref: await Package.findOne({"name": "Free"})})
        if (new Date(myPackage.ends_at) < new Date(Date.now()))
            return res.json({"Default": await Package.findOne({"name": "Free"})})
        const packages = await Package.findById(myPackage.packageId)
        return res.json({MyPackage: myPackage, ref: packages})
    } catch (error) {
        console.log(error)
    }
}

export default function plusMonthNow(numberOfMonths){
    let d = new Date()
    d.setMonth(d.getMonth() + parseInt(numberOfMonths) + 1)
    let result = ""
    if (d.getDate() < 10)
        result = d.getFullYear() + "-" + d.getMonth() + "-0" + d.getDate()
    else if (d.getMonth() < 10)
        result = d.getFullYear() + "-0" + d.getMonth() + "-" + d.getDate()
    else if (d.getDate() < 10 && d.getMonth() < 10)
        result = d.getFullYear() + "-0" + d.getMonth() + "-0" + d.getDate()
    else
        result = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()
    return result
}

export async function setPackage(req, res)
{
    const {userId, packageId} = req.body
    console.log("sionout >> " + packageId)
    try{
        const packages = await Package.findOne({_id: packageId})
        console.log(packages)
        await PackageSelected.findOneAndDelete({userId: userId})
        const newPackageSelected = new PackageSelected(   
            {
                packageId: packages._id,
                userId: userId,
                created_at: Date.now(),
                ends_at: Date.parse(plusMonthNow(1)),
                freeTicketsCounter: packages.freeTickets,
                giftTaked: false
            }
        );
        await newPackageSelected.save()
        return res.json({success: "Paquete registrado correctamente"})
    }catch(error){
        console.log(">> " + error)
        return res.status(500).json({error: "Error al guardar en la base de datos"})
    }
}