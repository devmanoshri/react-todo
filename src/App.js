import React from 'react';
import './App.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [showEditId, setShowEditId] = useState(0);

  const handelSubmit = (e) => {
    e.preventDefault();

    if (showEditId) {
      const updatedTodoList = todoList.map((item) =>
        item.id === showEditId
          ? { id: showEditId, name: todo }
          : { id: item.id, name: item.name }
      );
      setTodoList(updatedTodoList);
      setShowEditId(0);
      setTodo('');
      return;
    }

    if (todo !== '') {
      setTodoList([{ id: Math.random(), name: todo }, ...todoList]);
      setTodo('');
    }
  };

  const handelDelete = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList([...newTodoList]);
    console.log('inside delete');
  };

  const handelEdit = (id) => {
    const editTodo = todoList.find((item) => item.id === id);
    setTodo(editTodo.name);
    setShowEditId(editTodo.id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm
          handelSubmit={handelSubmit}
          todo={todo}
          setTodo={setTodo}
          showEditId={showEditId}
        />
        <TodoList
          todoList={todoList}
          handelEdit={handelEdit}
          handelDelete={handelDelete}
        />
      </div>
    </div>
  );
}

export default App;
