function authenticationMW(req, res, next) {
    if (req.session) {
        if (req.session.user) {
            next()
        } else {
            res.redirect('/login')
        }
    } else {
        res.redirect('/login')
    }
}

module.exports = authenticationMW