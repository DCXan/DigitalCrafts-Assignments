const express = require('express')
const router = express.Router() 

let count = 1
let movies = []

router.get('/', (req, res) => {
    res.render('movies-list', {allMovies: movies})
})

router.get('/create', (req, res) => {
    res.render('add-movie')
})

router.post('/create', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const genre = req.body.genre
    const image = req.body.imageURL
    const id = count
    const movie = {
        title: title,
        description: description,
        genre: genre,
        image: image,
        id: id
    }
    console.log(req.body)
    count += 1
    movies.push(movie)

    res.redirect('/movies')
})

module.exports = router