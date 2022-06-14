const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded({extended: true}))

app.listen(8000, () => {
    console.log('Server is running.')
})

let trips = []
let count = 1

app.get('/trips', (req, res) => {
    res.render('trip-list', {tripList: trips})
})

app.get('/add-trip', (req, res) => {
    res.render('add-trip')
})

app.post('/add-trip', (req, res) => {
    const title = req.body.title
    const photoURL = req.body.photo
    const departDate = req.body.departDate
    const returnDate = req.body.returnDate
    const id = count
    const trip = {
        title: title,
        photo: photoURL,
        departDate: departDate,
        returnDate: returnDate,
        id: id
    }
    count += 1
    trips.push(trip)

    res.redirect('/trips')
})

app.post('/delete-trip', (req, res) => {

    trips = trips.filter(trip => trip.tripID == req.body.tripID)

    res.redirect('/trips')
})