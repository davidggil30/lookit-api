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