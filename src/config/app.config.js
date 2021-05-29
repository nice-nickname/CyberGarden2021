const express   = require('express')
const hbs       = require('express-handlebars')
const path      = require('path')
const cookieP   = require('cookie-parser')

const passport  = require('../auth/auth')

const bodyParser = require('body-parser')
const session    = require('./session')

const app = express()

// ================== Настройки ==================

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieP())
app.use(session)

app.use(passport.initialize())
app.use(passport.session())

app.engine('.hbs', hbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '..', '..', 'public'))

module.exports = app