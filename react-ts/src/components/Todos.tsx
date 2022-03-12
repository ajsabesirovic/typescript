import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text}/>
      ))}
      <h1>Ajsa glupa si</h1>
    </ul>
  );
};

export default Todos;
