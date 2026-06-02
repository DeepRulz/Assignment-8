function TodoList({ todos, onEdit, onDelete }) {

    if (todos.length === 0) {
        return (
            <div className="rounded-xl bg-white p-6 text-center shadow">
                <p className="text-gray-500">
                    No Todos Found
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4">

            {todos.map((todo) => (
                <div
                    key={todo._id}
                    className="rounded-xl bg-white p-6 shadow"
                >
                    <h3 className="text-xl font-semibold">
                        {todo.title}
                    </h3>

                    <p className="mt-2 text-gray-600">
                        {todo.description}
                    </p>

                    <div className="mt-4 flex gap-3">

                        <button
                            onClick={() => onEdit(todo)}
                            className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => onDelete(todo._id)}
                            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                        >
                            Delete
                        </button>

                    </div>
                </div>
            ))}

        </div>
    );
}

export default TodoList;