const Router = require('express').Router()

Router


//
.get('/', (req, res) => {
    res.render('start', {
        user: req.user,
        layout: null
    })
})


.get('/reg', (req, res) => {
    res.render('register', {
        user: req.user,
        layout: null
    })
})

.get('/modules', (req, res) => {
    res.render('module', {
        user: req.user,
        layout: null
    })
})

module.exports = Router