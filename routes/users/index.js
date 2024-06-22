const express = require('express');
const router = express.Router();



const UserService = require("../../services/user.service");

module.exports = (config) => {

    const userService = new UserService(config.postgres.client);

    router.post('/create', async (req, res, next) => {
        try {
            const user = await userService.createUser(req.body);
            res.send(user);
        } catch (error) {
            return next(error);
        }
    });
    router.get('/findone', async (req, res, next) => {
        try{
            const user = await userService.findOneUser();
            res.send(user);
        } catch(error) {
            return next(error);
        }
    });

    router.get('/findbypk', async (req, res, next) => {
        try{
            const user = await userService.findOneByPk();
            res.send(user);
        } catch(error) {
            return next(error);
        }
    });

    router.get('/all', async (req, res, next) => {
        try{
            const userList = await userService.getAllUsers();
            res.send(userList);
        } catch(error) {
            return next(error);
        }
    })

    router.get('/all/attributes', async (req, res, next) => {
        try{
            const userList = await userService.getAllUsersAttributes();
            res.send(userList);
        } catch(error) {
            return next(error);
        }
    })


    router.get('/all/where', async (req, res) => {
        try{
            const userList = await userService.getAllUsersWhere();
            res.send(userList);
        } catch(err) {
            return next(err);
        }
    });

    router.post('/update', async (req, res, next) => {
        try{
            const user = await userService.updateUser();
            res.send(user);
        } catch(error) {
            return next(error);
        }
    });

    router.post('/delete', async (req, res, next) => {
        try{
            const user = await userService.deleteUser();
            res.send(user);
        } catch(error) {
            return next(error);
        }
    });

    return router;
}