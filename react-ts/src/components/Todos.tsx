import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos_context";

const Todos: React.FC = () => {
  const ctx = useContext(TodosContext)
  return (
    <ul className={classes.todos}>
      {ctx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={ctx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
