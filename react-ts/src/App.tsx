import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import TodosContextProvider from "./store/todos_context";

function App() {
  
  return (
    <TodosContextProvider>
      <NewTodo/>
      <Todos/>
    </TodosContextProvider>

  );
}

export default App;
