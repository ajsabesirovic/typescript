import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => {
      // return prevState.concat(newTodo);
      return [
        ...prevState,
        newTodo
      ]
    });
  };

  const removeTodo = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todos} rmvTodo={removeTodo} />
    </div>
  );
}

export default App;
