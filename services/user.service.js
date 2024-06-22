const Models = require('../models/sequelize')


class UserService {
    constructor(sequelize) {
        Models(sequelize);
        this.client = sequelize;
        this.models = sequelize.models;
    }

    async getUser() {
        return "User Service getting a user from db"
    }
}

module.exports = UserService;