const express = require('express')
const router = express.Router() 


let movies = []
let movieID = 1


// Create root /movies route to display all movies

router.get('/', (req, res) => {
    let userMovies = movies.filter(movie => movie.userID == req.session.user.id)
    res.render('movies-list', {allMovies: userMovies})
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
    const movie = {
        title: title,
        description: description,
        genre: genre,
        image: image,
        userID: req.session.user.id,
        movieID: movieID
    }
    movieID += 1
    console.log(movie)
    movies.push(movie)
    console.log(movies)

    res.redirect('/movies')
})

// Create a route to delete a movie from list

router.post('/delete', (req, res) => {
    const movieID = req.body.id
    movies = movies.filter(movie => movie.movieID != movieID)

    res.redirect('/movies')
})

// Create a route on movie list to filter movies

router.get('/genre/:genre', (req, res) => {
    const genre = req.params.genre
    if (genre == 'all') {
        res.redirect('/movies')
    } else {
    let filteredMovies = movies.filter(movie => movie.genre == genre)

    let userFilteredMovies = filteredMovies.filter(movie => movie.userID == req.session.user.id)

        if (userFilteredMovies.length === 0) {
            res.render('movies-list', {message: `No ${genre} movies to display.`})
        } else {
        res.render('movies-list', {allMovies: userFilteredMovies})
        }
    }
})

module.exports = router