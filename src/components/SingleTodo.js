import React from 'react';

function SingleTodo({ todoItem, handelEdit, handelDelete }) {
  return (
    <li className="singleTodo" key={todoItem.id}>
      <span className="todoText">{todoItem.name}</span>

      <button onClick={() => handelEdit(todoItem.id)}>Edit</button>
      <button onClick={() => handelDelete(todoItem.id)}>Delete</button>
    </li>
  );
}

export default SingleTodo;
