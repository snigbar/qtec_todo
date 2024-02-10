"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Todos, useAppContext } from "../context/appContext";
import TodoRow from "./TodoRow";

export default function Tasks() {
  const { myTodos, handleDelete, toggleCompleted } = useAppContext();
  const [todos, setTodos] = useState<Todos[]>(myTodos);

  useEffect(() => {
    setTodos(myTodos);
  }, [myTodos]);

  //   handle sorting
  const handleSort = (order: "high" | "low" | "") => {
    if (!order) return;

    let sorted: Todos[] = [];

    if (order === "high") {
      sorted = todos.slice().sort((a, b) => {
        if (a.priority === "high" && b.priority !== "high") return -1;
        else if (a.priority !== "high" && b.priority === "high") return 1;
        else return 0;
      });
    } else if (order === "low") {
      sorted = todos.slice().sort((a, b) => {
        if (a.priority === "low" && b.priority !== "low") return -1;
        else if (a.priority !== "low" && b.priority === "low") return 1;
        else return 0;
      });
    }
    setTodos(sorted);
  };

  //   return if no data
  if (myTodos && !(myTodos.length > 0)) {
    return (
      <h1 className="text-3xl font-semibold text-center text-white">
        You&apos;ve not added any tasks yet
      </h1>
    );
  }

  //   count completed
  let completed = 0;
  todos.forEach((todo) => {
    if (todo.status === "completed") completed++;
  });

  return (
    <div className="flex flex-col gap-2 items-center justify-between w-full">
      <div className="w-full flex justify-between items-center gap-2">
        <select
          className="focus:shadow-lg rounded-md border border-slate-500 px-4 py-2"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            handleSort(e.target.value as "high" | "low" | "")
          }
        >
          <option value="">Filter</option>
          <option value="high">High</option>
          <option value="low">Low</option>
        </select>
        <p className=" text-white font-semibold text-sm md:text-lg">
          Total task: {myTodos.length} Completed: {completed}
        </p>
      </div>
      <div className="bg-white w-full p-3 shadow-lg justify-between items-center flex-wrap font-medium text-center hidden md:flex">
        <p className="basis-2/5">Task</p>
        <p className="basis-[12%]">Priority</p>
        <p className="basis-[12%]">Status</p>
        <p className="basis-[12%]">Mark as completed</p>
        <p className="basis-[12%]">Edit</p>
        <p className="basis-[12%]">Delete</p>
      </div>
      {todos.map((todo) => (
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
