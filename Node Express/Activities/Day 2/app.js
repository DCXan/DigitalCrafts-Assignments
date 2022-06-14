const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())

app.listen(8000, () => {
    console.log('Server is running on PORT 8000')
})

app.get('/add-customer', (req, res) => {
    res.render('add-customer')
})

app.post('/add-customer', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    res.render('confirmation', {name: name, age: age})
    
})
