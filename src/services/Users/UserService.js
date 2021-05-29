const Users = require('../../models/Users')
const fetch = require('node-fetch')

class UserService {

    async findOrCreateUser(email) {
        let user = await Users.findOrCreate({
            where: {
                email: email
            },
            defaults: {
                email: email,
                stage: 1
            }
        })

        return user[0].toJSON()
    }

    async findUserById(id) {
        let usr = await Users.findOne({
            where: {
                id: id
            }
        })

        return usr.toJSON()
    }

    async getStageByEmail(email) {
        let user = await Users.findOne({
            where: {
                email: email
            },
        })

        return user.get('stage')
    }

    async jumpOnNextStage(email) {
        let user = await Users.findOne({
            where: {
                email: email
            }
        })

        if (user) {
            let stage = +user.get('stage')
            stage++
            let affected = await Users.update({
                stage: stage
            }, {
                where: {
                    email: email
                }
            })
        }
    }
}

module.exports = new UserService()