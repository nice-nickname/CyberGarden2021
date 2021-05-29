const { login } = require("../auth/methods");

const LoginRoutes = require('./login/login.routes')
const RulesRoutes = require('./rules/rules.router')
const StartRouter = require('./start/start.route')

const Router = require('express').Router()

Router

.use('/auth', LoginRoutes)
.use('/rules', RulesRoutes)
.use('/start', StartRouter)


module.exports = Router