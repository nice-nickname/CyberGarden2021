const app = require('./src/config/app.config')

const routes = require('./src/routes/routes')

// ================== Настройки ==================

app.get('/test', (req, res) => {
    res.render('test', {layout: false})
})

// ==
const UserService = require('./src/services/services').UserService
// ==

app.get('/', async (req, res) => {
    if (req.user) {
        let stage = await UserService.getStageByEmail(req.user.email)
        console.log(stage)
        res.send('' + stage)
    }
    else {
        res.redirect('/test')
    }
})

app.use('/', routes)

app.listen(3000, () => {
    console.log('Server started...');
})