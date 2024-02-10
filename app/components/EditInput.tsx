import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { useAppContext } from "../context/appContext";

type Props = {
  id: string;
  setEditing: Dispatch<SetStateAction<boolean>>;
  oldTodo: string;
};

export const EditInput = ({ id, setEditing, oldTodo }: Props) => {
  const { editTodos } = useAppContext();
  const [todo, setTodo] = useState(oldTodo || "");
  const [priority, setPriority] = useState<"high" | "moderate" | "low">("high");
  const [error, setError] = useState(false);

  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    if (todo.length < 10) {
      setError(true);
      return;
    }
    editTodos(id, todo, priority);

    setTodo("");
    setPriority("high");
    setError(false);
    setEditing((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div className="bg-white w-full p-3 rounded-lg flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center flex-wrap text-center">
        <input
          type="text"
          defaultValue={oldTodo}
          className="basis-1/2 border border-slate-500 focus:outline focus:outline-violet-600 rounded-md p-2"
          placeholder="Edit your task..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
        />
        <select
          className="focus:shadow-lg rounded-md border border-slate-500 px-4 py-2"
          defaultValue="high"
          value={priority}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setPriority(e.target.value as "high" | "moderate" | "low")
          }
        >
          <option value="high">High</option>
          <option value="moderate">Moderate</option>
          <option value="low">Low</option>
        </select>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-indigo-600 hover:big-indigo-500 text-white"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="px-2 py-1 bg-rose-600 hover:big-rose-500 text-white"
            onClick={(prev) => setEditing(!prev)}
          >
            Cancel
          </button>
        </div>
      </div>
      {error && (
        <p className="text-sm text-rose-600 bg-white w-fit p-2 mx-auto rounded-lg">
          add at least 10 characters
        </p>
      )}
    </div>
  );
};
