import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos,setTodos] = useState<Todo[]>([])
  // const todos = [
  //   new Todo('Learn react'),
  //   new Todo('Learn ts')
  // ]
  const addTodo = (todoText : string) => {
    const newTodo = new Todo(todoText);
    setTodos( (prevState) => {
      return prevState.concat(newTodo)
    })
    // todos.push(new Todo(text))
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodo}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
