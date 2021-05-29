const passport      = require('./auth/auth')
const session       = require('./config/session')
const authMethods   = require('./auth/methods')

module.exports = {
    passport,
    session,
    authMethods,
}