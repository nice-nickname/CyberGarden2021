const app = require('./src/config/app.config')
const express = require('express')

require('dotenv').config()

const routes = require('./src/routes/routes')

// ================== Настройки ==================

app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public/layouts/static'))
app.use(express.static(__dirname + '/public/layouts'))
app.use(express.static(__dirname + '/public/js'))

app.use('/', routes)

app.listen(3000, () => {
    console.log('Server started...');
})