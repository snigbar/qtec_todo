"use client";
import { v4 as uuidv4 } from "uuid";

import { ChangeEvent, FormEvent, useState } from "react";
import { useAppContext } from "../context/appContext";

export default function Input() {
  const { addTodos } = useAppContext();
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState<"high" | "moderate" | "low">("high");

  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (todo.length < 10) {
      setError(true);
      return;
    }
    addTodos({
      id: uuidv4().toString().slice(0, 8),
      todo,
      priority,
      status: "pending",
    });
    e;

    setTodo("");
    setPriority("high");
    setError(false);
  };
  return (
    <div className="w-full space-y-2">
      <form
        className="w-full flex flex-col md:flex-row gap-2 justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-1 flex-col sm:flex-row w-full md:w-4/5">
          <input
            type="text"
            className="p-4 focus:shadow-lg rounded-md border border-slate-500 focus:outline focus:outline-violet-600 w-full"
            placeholder="Write down your task..."
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTodo(e.target.value)
            }
            value={todo}
          />

          <select
            className="p-4 focus:shadow-lg rounded-md"
            defaultValue="high"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setPriority(e.target.value as "high" | "moderate" | "low")
            }
            value={priority}
          >
            <option value="high">High</option>
            <option value="moderate">Moderate</option>
            <option value="low">Low</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-6 py-4 rounded-md text-center text-slate-800 font-semibold bg-slate-100 hover:bg-white"
        >
          Add Task
        </button>
      </form>
      {error && (
        <p className="text-sm text-rose-600 bg-white w-fit p-2 mx-auto rounded-lg">
          add at least 10 characters
        </p>
      )}
    </div>
  );
}
