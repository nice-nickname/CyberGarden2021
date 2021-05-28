const Users = require('../models/Users')

class UserService {

    async findOrCreateUser(email) {
        console.log(email)
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


    async jumpOnNextStage(email) {
        
    }
}

module.exports = new UserService()