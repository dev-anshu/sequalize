const Models = require('../models/sequelize')


class UserService {
    constructor(sequelize) {
        Models(sequelize);
        this.client = sequelize;
        this.models = sequelize.models;
    }

    async createUser({firstName, lastName, email, password}) {
        try {
            const user = await this.models.User.create({
                firstName,
                lastName,
                email,
                password
            });

            return user;
        } catch(error) {
            return error;
        }
    }

    async getAllUsersAttributes() {
        try {
            const users = await this.models.User.findAll({
                // attributes: ['firstName', 'lastName', 'email']
                attributes: {exclude: ['password']}
            });
            return users;
        } catch (error) {
            return error;
        }
    }

    async findOneUser() {
        try {
            const user = await this.models.User.findOne({where: {firstName: 'tek'}});
            return user;
        } catch (error){
            return error;
        }
    }

    async getAllUsers() {
        try {
            const users = await this.models.User.findAll();
            return users;
        } catch(error) {
            return error;
        }
    }

    async getAllUsersWhere() {
        try {
            const users = await this.models.User.findAll({where: {firstName: 'wd'}});
            return users;
        } catch(error) {
            return error;
        }
    }

    async updateUser() {
        try {
            await this.models.User.update({lastName: "lastName Changed"}, {where: {firstName: "tek"}});
            return "Updated user";
        } catch(error) {
            return error;
        }
    }

    async deleteUser() {
        try {
            const user = await this.models.User.destroy({where: {firstName: "tek"}});
            return "User Deleted"
        } catch(error) {
            return error;
        }
    }
}

module.exports = UserService;