const Todo = require("../models/todo-model");

exports.createTodo = async (todoData) => {
    const todo = await Todo.create(todoData);
    return todo;
};

exports.getAllTodos = async () => {
    const allTodo = await Todo.find();
    return allTodo;
}

exports.updateTodo = async (id,updatedData) => {
    const updated = await Todo.findByIdAndUpdate(
        id,updatedData,{new:true}
    )
    return updated;
}

exports.deleteTodo = async (id) => {
    return await Todo.findByIdAndDelete(id)
}