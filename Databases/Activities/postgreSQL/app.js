const express = require('express')
const app = express()

// initializing pg promise 
const pgp = require('pg-promise')() 

const mustacheExpress = require('mustache-express')
// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
    // the pages are located in views directory
app.set('views', './views')
    // extension will be .mustache
app.set('view engine', 'mustache')

app.use(express.urlencoded())

// connectionString represents the database you are trying to connect 
const connectionString = 'postgres://hmnapnij:G_rg81-yECF0Q4w6EERvLuV5y0oIlChP@isilo.db.elephantsql.com/hmnapnij'

const db = pgp(connectionString)

app.get('/', (req, res) => {
    db.any('SELECT friend_name, favorite_movie FROM friends')
    .then(friends => {
        res.render('index', {friends: friends})
    }).catch(error => {
        res.render('index', {message: 'Unable to get data.'})
    })
})








app.listen(3000, () => {
    console.log('Server is running...')
})