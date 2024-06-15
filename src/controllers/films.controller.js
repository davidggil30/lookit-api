const Film = require('../models/Film')

export async function getAllFims(req, res){
    try {
        const films = await Film.find();
        return res.json({allFilms: films, newFilms: films, topFilms: films}) // {top: topFilms, new: newFilms, all: allFilms}
    } catch (error) {
        console.log(error)
    }
}


export async function getFilmById(req, res){
    try {
        console.log(req.query.film)
        const films = await Film.findById(req.query.film);
        return res.json(films)
    } catch (error) {
        console.log(error)
    }
}

export async function save(req, res){
    const {description, duration, image, name, actors, directors, release_date, category, pegi, final_date} = req.body
    try{
        const merch = new Film({
            description: description,
            duration: duration,
            image: image,
            name: name,
            actors: actors,
            directors: directors,
            release_date: release_date,
            category: category,
            pegi: pegi,
            final_date: final_date
        });

        await merch.save();
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export async function update(req, res){
    const {id, description, duration, image, name, actors, directors, release_date, category, pegi, final_date} = req.body
    try{
        await Film.updateOne(
            {"_id": id},
            {$set: {
                description: description,
                duration: duration,
                image: image,
                name: name,
                actors: actors,
                directors: directors,
                release_date: release_date,
                category: category,
                pegi: pegi,
                final_date: final_date
            }}
        );
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export async function deleteFilm(req, res){
    const {id} = req.body
    try{
        await Film.deleteOne({"_id": id});
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}