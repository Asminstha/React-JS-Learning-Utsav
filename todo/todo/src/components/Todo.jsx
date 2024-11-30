import React from 'react';

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="todo">
      <span>{todo}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Todo;
