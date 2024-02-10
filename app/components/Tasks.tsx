"use client";

import { useAppContext } from "../context/appContext";

export default function Tasks() {
  const { myTodos } = useAppContext();

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
      <div className="bg-white w-full p-3 shadow-lg flex justify-between items-center flex-wrap font-medium text-center hidden md:flex">
        <p className="basis-2/5">Task</p>
        <p className="basis-[12%]">Priority</p>
        <p className="basis-[12%]">Status</p>
        <p className="basis-[12%]">Mark as completed</p>
        <p className="basis-[12%]">Edit</p>
        <p className="basis-[12%]">Delete</p>
      </div>
      {myTodos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white w-full p-3 rounded-lg flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center flex-wrap text-center"
        >
          <p className="basis-2/5">{todo.todo}</p>
          <p className="basis-[12%]">{todo.priority}</p>
          <p className="basis-[12%]">{todo.status}</p>

          <input type="checkbox" className="basis-[12%] w-6 h-6" />

          <button className="basis-[12%] w-full">
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

          <button className="basis-[12%] w-full">
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
      ))}
    </div>
  );
}
