"use client";

import { useAppContext } from "../context/appContext";
import TodoRow from "./TodoRow";

export default function Tasks() {
  const { myTodos, handleDelete, toggleCompleted } = useAppContext();

  if (myTodos && !(myTodos.length > 0)) {
    return (
      <h1 className="text-3xl font-semibold text-center text-white">
        You&apos;ve not added any tasks yet
      </h1>
    );
  }

  let completed = 0;
  myTodos.forEach((todo) => {
    if (todo.status === "completed") completed++;
  });

  return (
    <div className="flex flex-col gap-2 items-center justify-between w-full">
      <p className="self-end text-white font-semibold text-lg">
        Total task: {myTodos.length} Completed: {completed}
      </p>
      <div className="bg-white w-full p-3 shadow-lg justify-between items-center flex-wrap font-medium text-center hidden md:flex">
        <p className="basis-2/5">Task</p>
        <p className="basis-[12%]">Priority</p>
        <p className="basis-[12%]">Status</p>
        <p className="basis-[12%]">Mark as completed</p>
        <p className="basis-[12%]">Edit</p>
        <p className="basis-[12%]">Delete</p>
      </div>
      {myTodos.map((todo) => (
        <TodoRow
          key={todo.id}
          handleDelete={handleDelete}
          todo={todo}
          toggleCompleted={toggleCompleted}
        ></TodoRow>
      ))}
    </div>
  );
}
