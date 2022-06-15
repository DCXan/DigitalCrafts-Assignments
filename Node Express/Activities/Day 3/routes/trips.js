const express = require('express')
const router = express.Router()

router.get('/:trip', (req, res) => {
    const trip = req.params.
    res.render('trip-page')
})

module.exports = router