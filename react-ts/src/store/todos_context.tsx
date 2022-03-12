import React, { useState } from "react";
import Todo from "../models/todo";

type TodosCtxObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosCtxObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
  };

  const removeTodo = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodosCtxObj = {
    items: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
