const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const authenticationMW = require('./middlewares/authentication')

const app = express()

// /client/app.js
app.use('/client', express.static('client'))
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'secretkey',
    saveUninitialized: true,
    resave: true
}))

const moviesRouter = require('./routes/movies')
app.use('/movies', authenticationMW, moviesRouter)

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.listen(7777, () => {
    console.log('Server is running.')
})

let users = [
    {username: 'dcxan', password: '123', id: 1},
    {username: 'guest', password: '123', id: 2}
]

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const activeUser = users.find(user => {
        return user.username == username && user.password == password
    })

    if (activeUser) {
        if (req.session) {
            req.session.user = activeUser
        }
        console.log(req.session.user)
        console.log(activeUser)
        res.redirect('/movies')

    } else {
        res.render('login', {errorMessage: 'Incorrect username and/or password.'})
    }
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const newUser = {username: username, password: password}
    users.push(newUser)

    res.redirect('/login')
})

app.post('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy()
    }
    res.render('login', {logoutMessage: 'You have been logged out.'})
})