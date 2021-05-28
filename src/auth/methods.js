const passport = require('./auth')

let login = () => passport.authenticate('local', {successRedirect: '/', failureRedirect: '/failed'})
let logout = (req, res, next) => {
    req.session.destroy()
    res.redirect('/')
}

module.exports = {
    login,
    logout
}