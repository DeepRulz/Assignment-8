const express = require("express");

const router = express.Router();

const {
    createTodo, getAllTodos, updateTodo, deleteTodo,searchTodo,updateStatus
} = require("../controllers/todo-controller");

router.post("/", createTodo);
router.get('/',getAllTodos)
router.get(
    "/search",
    searchTodo
);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id/status",
    updateStatus
);

module.exports = router;