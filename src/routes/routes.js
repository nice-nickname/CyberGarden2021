const { login } = require("../auth/methods");

const LoginRoutes = require('./login/login.routes')
const RulesRoutes = require('./rules/rules.routes')
const StartRouter = require('./start/start.routes')
const VerificationRouter = require('./verification/verification.routes')

const Router = require('express').Router()

Router

.use('/auth', LoginRoutes)
.use('/rules', RulesRoutes)
.use('/start', StartRouter)
.use('/verification', VerificationRouter)


module.exports = Router