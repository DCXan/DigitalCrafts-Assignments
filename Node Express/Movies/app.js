const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded({extended: true}))

const moviesRouter = require('./routes/movies')
app.use('/movies', moviesRouter)

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.listen(7777, () => {
    console.log('Server is running.')
})

