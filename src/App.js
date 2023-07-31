import React from 'react';
import './App.css';
import { useState } from 'react';

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
        <form className="todoForm" onSubmit={handelSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">{showEditId ? 'Edit' : 'Add'}</button>
        </form>
        <ul className="allTodo">
          {todoList.map((todoItem) => {
            return (
              <li className="singleTodo" key={todoItem.id}>
                <span className="todoText">{todoItem.name}</span>

                <button onClick={() => handelEdit(todoItem.id)}>Edit</button>
                <button onClick={() => handelDelete(todoItem.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
