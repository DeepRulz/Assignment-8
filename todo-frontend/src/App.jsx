import { useEffect, useState } from "react";


import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

import {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
} from "./services/todoApi";

function App() {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingTodo, setEditingTodo] = useState(null);

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
                    />
                )}

            </div>

        </div>
    );
}

export default App;