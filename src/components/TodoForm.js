import React from 'react';

const TodoForm = ({ handelSubmit, todo, setTodo, showEditId }) => {
  return (
    <form className="todoForm" onSubmit={handelSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">{showEditId ? 'Edit' : 'Add'}</button>
    </form>
  );
};

export default TodoForm;
