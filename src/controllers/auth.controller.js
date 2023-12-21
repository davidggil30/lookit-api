export async function login(req, res){
    const {user, password} = req.body
    if (user === 'adrian' && password === '12345678') {
        return res.json({success: 'El es adri'})
    }
    return res.status(500).json({error: "Usuario y contraseña no coinciden"})
}