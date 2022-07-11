const express = require('express')
const app = express()

// initializing pg promise 
const pgp = require('pg-promise')() 

// importing bcryptjs 
var bcrypt = require('bcryptjs');

var session = require('express-session')

const mustacheExpress = require('mustache-express')
// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
    // the pages are located in views directory
app.set('views', './views')
    // extension will be .mustache
app.set('view engine', 'mustache')

app.use(express.urlencoded())
// initialize a session 
app.use(session({
    secret: 'secretKey88',
    resave: false,
    saveUninitialized: true
  }))

// connectionString represents the database you are trying to connect 
const connectionString = 'postgres://hmnapnij:G_rg81-yECF0Q4w6EERvLuV5y0oIlChP@isilo.db.elephantsql.com/hmnapnij'

const db = pgp(connectionString)

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/encrypt', (req, res) => {
    let secret = req.body.secret

    bcrypt.genSalt(10).then(salt => {
        bcrypt.hash(secret, salt).then(hash => {
            console.log({
                key: secret,
                value: hash
            })
        })
    })

    
})











app.listen(3000, () => {
    console.log('Server is running...')
})