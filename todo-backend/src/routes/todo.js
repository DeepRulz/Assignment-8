const express = require("express");

const router = express.Router();

const {
    createTodo, getAllTodos, updateTodo, deleteTodo
} = require("../controllers/todo-controller");

router.post("/", createTodo);
router.get('/',getAllTodos)
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;