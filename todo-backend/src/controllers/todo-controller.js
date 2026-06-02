const todoService = require("../services/todo-service");

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || title.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Title is required"
            });
        }

        const todo = await todoService.createTodo({
            title,
            description
        });

        res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: todo
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getAllTodos = async (req, res) => {
    try {
        const todo = await todoService.getAllTodos();

        res.status(200).json({
            success: true,
            message: "All Todos Retrieved",
            data: todo
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const {title,description } = req.body;

        if (!title || title.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Title is required"
            });
        }

        const todo = await todoService.updateTodo(id,{
            "title": title,
            "description": description
        });

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo Updated successfully",
            data: todo
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;

        const todo = await todoService.deleteTodo(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo Deleted successfully",
            data: todo
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
