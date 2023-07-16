const express = require("express");
const todoController = require("../controller/task");
const productRouter = require('../controller/task');

const router = express.Router();

router
  .post('/', todoController.createTodo)
  .get('/', todoController.getAllTodos)
  .get('/:id', todoController.getTodo)
  .patch('/:id', todoController.updateTodo)
  .delete('/:id', todoController.deleteTodo);

exports.router = router; 