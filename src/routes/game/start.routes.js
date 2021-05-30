const Router = require('express').Router()

// =========
// url/start
// =========

Router

.get('/', (req, res) => {
    res.render('main', {
        user: req.user,
        layout: null
    })
})


.get('/reg', (req, res) => {
    res.render('auth', {
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