let todos = [];

module.exports = {
    getAllTodos(){
        return todos;
    },

    addTodo(todo){
        todos.push(todo);
    },

    getTodoById(id){
        return todos[id];
    },

    updateTodo(id, updatedTodo){
        todos[id] = updatedTodo;
    },

    deleteTodo(id){
        todos.splice(id, 1);
    }
}