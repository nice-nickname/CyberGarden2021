const { login } = require("../auth/methods");

const LoginRoutes = require('./login/login.routes')
const RulesRoutes = require('./rules/rules.routes')
const StartRouter = require('./game/start.routes')
const VerificationRouter = require('./verification/verification.routes')
const FirstModuleRouter = require('./game/firstModule.routes')

const Router = require('express').Router()

Router

.use('/auth', LoginRoutes)
.use('/rules', RulesRoutes)
.use('/start', StartRouter)
.use('/verification', VerificationRouter)
.use('/firstModule', FirstModuleRouter)


module.exports = Router