const express = require('express');
const router = express.Router();

const TodoService = require("../../services/todo.service")
module.exports = (config) => {
    const todoService = new TodoService();
    router.get('/', async (req, res) => {
    try{
      const todo = await todoService.getTodo();
      res.send(todo);
    }catch(err){
      return next(err);
    }
  });

  return router;
};