const todoModel = require('../models/todoModel');

// home page
const home = (req, res) => {
    res.render('index');
};

// add todo page
const addTodoPage = (req, res) => {
    res.render('./pages/addTodo');
};

// view todos page
const viewTodos = (req, res) => {
    const todos = todoModel.getAllTodos();
    res.render('./pages/viewTodo', { todos });
};

// add todo process
const addTodo = (req, res) => {
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
const editTodoPage = (req, res) => {
    const id = req.params.id;
    const todo = todoModel.getTodoById(id);
    res.render('./pages/editTodo', { todo, id });
};

// update todo process
const updateTodo = (req, res) => {
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
const deleteTodo = (req, res) => {
    const id = req.params.id;
    todoModel.deleteTodo(id);
    res.redirect('/viewTodo');
};

// service page
const service = (req, res) => {
    res.render('./pages/service');
};

module.exports = {home, addTodoPage, viewTodos, addTodo, editTodoPage, updateTodo, deleteTodo, service}
