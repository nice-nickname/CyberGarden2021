require('dotenv').config()

const Sequelize = require('sequelize').Sequelize

const sequelize = new Sequelize({
    database: process.env.DB_NAME, 
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
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