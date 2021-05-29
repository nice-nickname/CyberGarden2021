const Router = require('express').Router()

const UserService = require('../../services/services').UserService


// =========
// url/rules
// =========

Router

// Перевод текущего пользователя на следующий уровень, если он существует
.get('/nextStage', async (req, res) => {
    if (req.user) {
        await UserService.jumpOnNextStage(req.user.email)
        res.sendStatus(200)
    }
    res.sendStatus(403)
})


module.exports = Router