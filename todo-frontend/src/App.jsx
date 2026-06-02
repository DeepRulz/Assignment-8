import { useEffect, useState } from "react";


import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

import {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    searchTodo,
    updateStatus
} from "./services/todoApi";

function App() {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingTodo, setEditingTodo] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [error, setError] = useState("");

    const fetchTodos = async () => {
        try {
            const response = await getTodos();

            setTodos(response.data.data);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);
    const handleSearch = async () => {

        try {

            if (searchText.trim() === "") {

                fetchTodos();
                return;

            }

            const response =
                await searchTodo(searchText);

            setTodos(response.data.data);

        } catch (error) {

            setError("Search failed");

        }

    };
    const handleStatusChange = async (
        id,
        status
    ) => {

        try {

            await updateStatus(
                id,
                status
            );

            fetchTodos();

        } catch (error) {

            setError(
                "Could not update status"
            );

        }

    };
    const handleSubmit = async (todoData) => {

        try {

            if (editingTodo) {

                await updateTodo(
                    editingTodo._id,
                    todoData
                );

                setEditingTodo(null);
            }
            else {

                await createTodo(todoData);
            }

            fetchTodos();

        }
        catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (todo) => {
        setEditingTodo(todo);
    };

    const handleDelete = async (id) => {

        try {

            await deleteTodo(id);

            fetchTodos();

        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">

            <div className="mx-auto max-w-4xl p-6">

                <h1 className="mb-8 text-center text-4xl font-bold">
                    Todo Manager
                </h1>
                {
                    error &&
                    <div className="mb-4 rounded bg-red-100 p-3 text-red-700">
                        {error}
                    </div>
                }
                <div className="mb-6 flex gap-2">

                    <input
                        type="text"
                        placeholder="Search todos..."
                        value={searchText}
                        onChange={(e) =>
                            setSearchText(e.target.value)
                        }
                        className="flex-1 rounded border p-2"
                    />

                    <button
                        onClick={handleSearch}
                        className="rounded bg-blue-500 px-4 py-2 text-white"
                    >
                        Search
                    </button>

                </div>
                <TodoForm
                    onSubmit={handleSubmit}
                    editingTodo={editingTodo}
                />

                {loading ? (
                    <p className="text-center">
                        Loading...
                    </p>
                ) : (
                    <TodoList
                        todos={todos}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onStatusChange={handleStatusChange}
                    />
                )}

            </div>

        </div>
    );
}

export default App;