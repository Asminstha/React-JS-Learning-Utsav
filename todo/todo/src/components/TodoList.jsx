import React from "react";

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <h3>{todo.subject}</h3>
          <p>Day: {todo.day}</p>
          <p>Task: {todo.task}</p>
          <p>Created At: {todo.createdAt}</p>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
