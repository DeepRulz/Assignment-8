import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/todos"
});

export const getTodos = () => API.get("/");

export const createTodo = (todoData) =>
    API.post("/", todoData);

export const updateTodo = (id, todoData) =>
    API.patch(`/${id}`, todoData);

export const deleteTodo = (id) =>
    API.delete(`/${id}`);