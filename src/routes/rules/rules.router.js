const Router = require('express').Router()

const UserService = require('../../services/services').UserService

Router

.get('/nextStage', async (req, res) => {
    if (req.user) {
        console.log('id' + ' ' + req.user.id)
        console.log('email' + ' ' + req.user.email)
        await UserService.jumpOnNextStage(req.user.email)
        res.sendStatus(200)
    }
    res.sendStatus(403)
})


module.exports = Router