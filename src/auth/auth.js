const passport = require('passport')
const Strategy = require('passport-local').Strategy

const userService = require('../services/services').UserService

passport.serializeUser((user, done) => {
    userService.findOrCreateUser(user)
    .then(ur => {
        done(null, ur)
        console.log(ur)
        console.log('serialized');
    })
    .catch(error => {
        console.log(error)
    })
})

passport.deserializeUser((id, done) => {
    done(null, id)
})

passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, (username, password, done) => {
    done(null, username)
}))

module.exports = passport