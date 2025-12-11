const todoModel = require('../models/todoModel');

// home page
exports.home = (req, res) => {
    res.render('index');
};

// add todo page
exports.addTodoPage = (req, res) => {
    res.render('./pages/addTodo');
};

// view todos page
exports.viewTodos = (req, res) => {
    const todos = todoModel.getAllTodos();
    res.render('./pages/viewTodo', { todos });
};

// add todo process
exports.addTodo = (req, res) => {
    const todo = {
        name: req.body.todos,
        description: 'pending',
        task: 'incomplete',
        priority: 'high'
    };
    todoModel.addTodo(todo);
    res.redirect('/viewTodo');
};

// edit todo page
exports.editTodoPage = (req, res) => {
    const id = req.params.id;
    const todo = todoModel.getTodoById(id);
    res.render('./pages/editTodo', { todo, id });
};

// update todo process
exports.updateTodo = (req, res) => {
    const id = req.params.id;
    const updatedTodo = {
        name: req.body.todos,
        description: req.body.description,
        task: req.body.task,
        priority: req.body.priority
    };
    todoModel.updateTodo(id, updatedTodo);
    res.redirect('/viewTodo');
};

// delete todo
exports.deleteTodo = (req, res) => {
    const id = req.params.id;
    todoModel.deleteTodo(id);
    res.redirect('/viewTodo');
};

// service page
exports.service = (req, res) => {
    res.render('./pages/service');
};