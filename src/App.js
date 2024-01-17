import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todolist from './components/Todolist';

function App() {

  const [todo, setTodo] = useState('');
  const [todolist, setTodolist] = useState([]);
  const [editMode, setEditMode] = useState();
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const modifiedChat = { id: `${editId}`, name: todo };
      setTodolist([modifiedChat, ...todolist.filter(item => item.id !== modifiedChat.id)]);
      setTodo('');
    }
    if (!editId && todo !== '') {
      setTodolist([{ id: `${todo}-${Date.now()}`, name: todo }, ...todolist]);
      setTodo('');
    }
  }
  const handleDelete = (id) => {
    setTodolist(todolist.filter((item) => item.id !== id));
  }
  const handleEdit = (item) => {
    setTodo(item.name);
    setEditMode(true);
    setEditId(item.id);
  }
  return (
    <div className="App-block">
      <h2>Todo List App</h2>
      <AddTodo handleSubmit={handleSubmit} editMode={editMode} todo={todo} setTodo={setTodo} />
      <Todolist todolist={todolist} editMode={editMode} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
