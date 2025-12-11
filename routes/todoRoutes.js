const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');

// GET
router.get('/', todoController.home);
router.get('/addTodo', todoController.addTodoPage);
router.get('/viewTodo', todoController.viewTodos);
router.get('/service', todoController.service);

// EDIT
router.get('/edit/:id', todoController.editTodoPage);
router.post('/update/:id', todoController.updateTodo);

// POST
router.post('/addtodo', todoController.addTodo);

// DELETE
router.get('/delete/:id', todoController.deleteTodo);

module.exports = router;