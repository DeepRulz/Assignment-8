import {useEffect, useState} from "react";

export default function TodoForm({onSubmit, editingTodo}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if(editingTodo) {
            setTitle(editingTodo.title);
            setDescription(editingTodo.description);
        }
    },[editingTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({title, description});

        if (!editingTodo) {
            setTitle("")
            setDescription("");        }
    };

    return (
        <> <div className="mb-8 rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 text-2xl font-bold">
                {editingTodo ? "Edit Todo" : "Add Todo"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Title
                    </label>

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter task title"
                        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Description
                    </label>

                    <textarea
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter task description"
                        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <button
                    type="submit"
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                >
                    {editingTodo ? "Update Todo" : "Add Todo"}
                </button>

            </form>
        </div></>
    )
}
