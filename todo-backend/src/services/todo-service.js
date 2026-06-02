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

exports.updateStatus = async (id, status) => {
    try {

        const todo = await Todo.findByIdAndUpdate(
            id,
            { status: status },
            { new: true }
        );

        return todo;

    } catch (error) {
        throw error;
    }
};

exports.searchTodo = async (searchTerm) => {

    try {

        const todo = await Todo.find({
            $or: [
                {
                    title: {
                        $regex: searchTerm,
                        $options: "i"
                    }
                },
                {
                    description: {
                        $regex: searchTerm,
                        $options: "i"
                    }
                }
            ]
        });

        return todo;

    } catch (error) {

        throw error;

    }

};