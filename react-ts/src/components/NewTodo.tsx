import { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos_context";

const NewTodo: React.FC = () => {
  const ctx = useContext(TodosContext);

  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;
    if (enteredText?.trim().length === 0) {
      return;
    }
    ctx.addTodo(enteredText);
    todoInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input id="text" type="text" ref={todoInputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
