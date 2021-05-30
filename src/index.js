const passport      = require('./auth/auth')
const session       = require('./config/session')
const authMethods   = require('./auth/methods')
const mailService   = require('./config/mail.config')

module.exports = {
    passport,
    session,
    authMethods,
    mailService,
}