import React from 'react';
import SingleTodo from './SingleTodo';

function TodoList({ todoList, handelEdit, handelDelete }) {
  return (
    <ul className="allTodo">
      {todoList.map((todoItem) => {
        return (
          <SingleTodo todoItem={todoItem} handelEdit={handelEdit} handelDelete={handelDelete}/>
        );
      })}
    </ul>
  );
}

export default TodoList;
