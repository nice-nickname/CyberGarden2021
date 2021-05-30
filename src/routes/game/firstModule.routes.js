const UserService = require('../../services/Users/UserService')

const Router = require('express').Router()

// ===============
// url/firstModule
// ===============

Router

.get('/1', (req, res) => {
    res.render('quiz1st', {
        user: req.user,
        layout: null
    })
})
.get('/1/answer', (req, res) => {
    res.render('answer1st', {
        user: req.user,
        layout: null
    })
})

.get('/2', (req, res) => {
    res.render('quiz2nd', {
        user: req.user,
        layout: null
    })
})
.get('/2/answer', (req, res) => {

})

.get('/3', (req, res) => {

})
.get('/3/answer', (req, res) => {

})

.get('/11808', async (req, res) => {
    let stage = await UserService.getStageByEmail(req.user.email)
    if (stage == 1) {
        UserService.jumpOnNextStage(req.user.email)
    }
    res.redirect('1/answer')
})

.get('/itssosecretroute', async (req, res) => {
    let stage = await UserService.getStageByEmail(req.user.email)
    if (stage == 2) {
        UserService.jumpOnNextStage(req.user.email)
    }
    res.redirect('2/answer')
})

module.exports = Router