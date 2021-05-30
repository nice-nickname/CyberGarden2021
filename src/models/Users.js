const Sequelize = require('sequelize')
const sequelize = require('../db/db')

class Users extends Sequelize.Model {}

Users.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING
    },
    stage: {
        type: Sequelize.INTEGER
    },
    verified: {
        type: Sequelize.SMALLINT
    }
}, {
    sequelize,
    timestamps: false,
    tableName: 'Users'
})

module.exports = Users