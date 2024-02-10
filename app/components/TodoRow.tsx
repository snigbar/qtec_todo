import { useState } from "react";
import { Todos } from "../context/appContext";
import { EditInput } from "./EditInput";

export default function TodoRow({
  todo,
  handleDelete,
  toggleCompleted,
}: {
  todo: Todos;
  handleDelete: (id: string) => void;
  toggleCompleted: (id: string) => void;
}) {
  const [editing, setEditing] = useState<boolean>(false);

  return editing ? (
    <EditInput
      id={todo.id}
      setEditing={setEditing}
      oldTodo={todo.todo}
    ></EditInput>
  ) : (
    <div
      className={`${
        todo.status === "completed"
          ? "bg-red-400 shadow-lg text-white"
          : "bg-white"
      } w-full p-3 rounded-lg flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center text-center`}
    >
      <p className="basis-2/5">
        <span className="md:hidden mr-2 font-semibold block">Task:</span>
        {todo.todo}
      </p>
      <p
        className={`basis-[12%] ${
          todo.priority === "high"
            ? "bg-fuchsia-600"
            : todo.priority === "moderate"
            ? "bg-indigo-600"
            : "bg-lime-500"
        } text-white p-1`}
      >
        <span className={`md:hidden mr-2 font-semibold block `}>Priority:</span>
        {todo.priority}
      </p>
      <p className="basis-[12%]">
        <span className="md:hidden mr-2 font-semibold block">Status:</span>
        {todo.status}
      </p>

      <label className="md:hidden mr-2 font-semibold inline-block">
        Mark as Completed:{" "}
      </label>
      <input
        type="checkbox"
        className="basis-[12%] w-6 h-6"
        onChange={() => toggleCompleted(todo.id)}
        checked={todo.status === "completed"}
      />

      <button className="basis-[12%] w-full" onClick={() => setEditing(true)}>
        <span className="md:hidden mr-2 font-semibold">Edit:</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>

      {/* delete button */}
      <button
        className="basis-[12%] w-full"
        onClick={() => handleDelete(todo.id)}
      >
        <span className="md:hidden mr-2 font-semibold">Delete:</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 basis-[12%] mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
}
