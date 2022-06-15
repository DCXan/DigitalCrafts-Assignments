const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')

// const tripsRouter = require('/routes/trips')

// app.use('/trips', tripsRouter)

app.listen('3000', () => {
    console.log("Server is running...")
})

// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
// the pages are located in views directory
app.set('views', './views')
// extension will be .mustache
app.set('view engine', 'mustache')

app.use(express.static('static'))

app.get('/', (req, res) => {
    res.render('index')
})