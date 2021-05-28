const Sequelize = require('sequelize').Sequelize

const sequelize = new Sequelize({
    database: 'cybergarden',
    username: 'semen',
    password: '123',
    host: '/var/run/postgresql',
    dialect: 'postgres',
    quoteIdentifiers: false
})

sequelize.sync({logging: false})
.then(() => {
    console.log('Database synchornized...')
})
.catch((err) => {
    console.log(err)
})

module.exports = sequelize