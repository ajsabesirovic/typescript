import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('Learn react'),
    new Todo('Learn ts')
  ]
  const addTodo = (text : string) => {
    todos.push(new Todo(text))
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodo}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
