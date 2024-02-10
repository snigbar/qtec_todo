"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type Todos = {
  id: string;
  todo: string;
  status: "pending" | "completed";
  priority: "high" | "moderate" | "low";
};

type TContext = {
  myTodos: Todos[];
  addTodos: (todo: Todos) => void;
  toggleCompleted: (id: string) => void;
  editTodos: (
    id: string,
    newTodo: string,
    newPriority: "high" | "moderate" | "low"
  ) => void;
  handleDelete: (id: string) => void;
};

const appContext = createContext<TContext | null>(null);

export default function AppContext({ children }: { children: ReactNode }) {
  // get and set todos
  const [myTodos, setMyTodos] = useState<Todos[]>([]);

  useEffect(() => {
    setMyTodos(() => {
      const stored = localStorage.getItem("todos");
      if (stored) return JSON.parse(stored);
      else return [];
    });
  }, []);

  const addTodos = (newTodo: Todos) => {
    setMyTodos((prev) => {
      const updatedTodos = [...prev, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const toggleCompleted = (id: string) => {
    setMyTodos((prev) => {
      const updatedTodos = prev.map((val) => {
        if (val.id === id) {
          return { ...val, status: "completed" as const };
        }
        return val;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const editTodos = (
    id: string,
    newTodo: string,
    newPriority: "high" | "moderate" | "low"
  ) => {
    setMyTodos((prev) => {
      const updatedTodos = prev.map((val) => {
        if (val.id === id) {
          return { ...val, todo: newTodo, priority: newPriority };
        }
        return val;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const handleDelete = (id: string) => {
    setMyTodos((prev) => {
      const updatedTodos = prev.filter((val) => val.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  return (
    <appContext.Provider
      value={{ myTodos, addTodos, editTodos, handleDelete, toggleCompleted }}
    >
      {children}
    </appContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(appContext);
  return context as TContext;
};
