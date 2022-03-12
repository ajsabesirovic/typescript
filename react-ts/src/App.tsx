import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('Learn react'),
    new Todo('Learn ts')
  ]
  return (
    <div>
      <NewTodo/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
