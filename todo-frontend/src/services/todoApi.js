import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_URL
})

export const getTodos = () => API.get("/");

export const createTodo = (todoData) =>
    API.post("/", todoData);

export const updateTodo = (id, todoData) =>
    API.patch(`/${id}`, todoData);

export const deleteTodo = (id) =>
    API.delete(`/${id}`);

export const searchTodo = (query) =>
    API.get(`/search?q=${query}`);

export const updateStatus = (
    id,
    status
) =>
    API.patch(
        `/${id}/status`,
        {
            status
        }
    );