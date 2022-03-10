const NewTodo = () => {
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }

  return <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input id="text" type="text" />
      <button>Add todo</button>
  </form>
}
 
export default NewTodo;