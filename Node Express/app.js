const express = require('express')
const app = express()

app.use(express.json())

app.listen(8000, () => {
    console.log('Server is running.')
})

const names = []

app.get('/name', function(req, res) {
    res.json(names)
})

app.get('/digital-crafts/cohort/:year', (req, res) => {
    const year = req.params.year
    res.send(`I study at DigitalCrafts ${year} cohort`)
})

app.post('/name', (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const fullname = `${firstname}, ${lastname}`

    names.push({firstname: firstname,
    lastname: lastname})

    res.json({
        fullname
        })
})