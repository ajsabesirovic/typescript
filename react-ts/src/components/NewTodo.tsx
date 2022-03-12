import { useRef } from "react";
const NewTodo = () => {

    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoInputRef.current?.value
        if(enteredText?.trim().length === 0){
            return 
        }
    }

  return <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input id="text" type="text" ref={todoInputRef} />
      <button>Add todo</button>
  </form>
}
 
export default NewTodo;