const express   = require('express')
const hbs       = require('express-handlebars')
const path      = require('path')
const cookieP   = require('cookie-parser')

const passport = require('./src/index').passport

const bodyParser    = require('body-parser')
const session       = require('./src/index').session

const methods = require('./src/index').authMethods

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
app.set('views', path.join(__dirname, 'public'))


// ================== Настройки ==================


app.post('/login', methods.login())
app.get('/logout', methods.logout)
app.get('/test', (req, res) => {
    res.render('test', {layout: false})
})

app.get('/user', (req, res) => {
    res.send(req.user)
})

app.listen(3000, () => {
    console.log('Server started...');
})