const express = require('express')
const router = express.Router() 

let count = 1
let movies = []


// Create root /movies route to display all movies

router.get('/', (req, res) => {
    res.render('movies-list', {allMovies: movies})
})


// Display a view to add a movie to movie list

router.get('/create', (req, res) => {
    res.render('add-movie')
})

// Create route to add a movie to list

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
    count += 1
    movies.push(movie)

    res.redirect('/movies')
})

// Create a route to delete a movie from list

router.post('/delete', (req, res) => {
    const movieID = req.body.id
    movies = movies.filter(movie => movie.id != movieID)

    res.redirect('/movies')
})

// Create a route on movie list to filter movies


router.post('/movies', (req, res) => {
    const genre = req.params.genre
    console.log(genre)
    if (genre == 'all') {
        res.redirect('/movies')
    } else {
        console.log(genre)
        res.redirect('/movies/genre/:genre')
    }
    
})

router.get('/genres/:genre', (req, res) => {
    const genre = req.params.genre
    let filteredMovies = movies.filter(movie => movie.genre == genre)
    movies = filteredMovies
    res.redirect('/movies')
})

module.exports = router