const Router = require('express').Router()

const methods = require('../../index').authMethods

// ========
// url/auth
// ========

Router
// Авторизация
.post('/login', methods.login())

// Выход
.get('/logout', methods.logout)

// Просмотр данных из сессии
.get('/user', (req, res) => {
    res.send(req.user)
})

module.exports = Router