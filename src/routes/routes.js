const { login } = require("../auth/methods");

const LoginRoutes = require('./login/login.routes')
const RulesRoutes = require('./rules/rules.router')

const Router = require('express').Router()

Router

.use('/auth', LoginRoutes)
.use('/rules', RulesRoutes)


module.exports = Router