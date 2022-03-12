import { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo:React.FC<{onAddTodo : ( text : string) => void}> = (props) => {

    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoInputRef.current!.value
        if(enteredText?.trim().length === 0){
            //throw an error
            return
        }
    props.onAddTodo(enteredText);    
    todoInputRef.current!.value = ''
    }

  return <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input id="text" type="text" ref={todoInputRef} />
      <button>Add todo</button>
  </form>
}
 
export default NewTodo;