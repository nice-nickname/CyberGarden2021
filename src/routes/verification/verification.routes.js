const UserService = require('../../services/Users/UserService')

const Router = require('express').Router()

Router

//========================
// url/verification/:email
//========================

.get('/:email', async (req, res) => {
    let email = req.params.email
    console.log(email)
    await UserService.markAsVerified(email)
    req.user.verified = 1
    res.redirect('/start')
})


module.exports = Router