import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./style.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [subject, setSubject] = useState("");
  const [day, setDay] = useState("");
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!subject || !day || !task) {
      alert("Please fill in all the fields.");
      return;
    }

    const newTodo = {
      subject,
      day,
      task,
      createdAt: new Date().toLocaleString(),
    };
    setTodos([...todos, newTodo]);
    setSubject("");
    setDay("");
    setTask("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Task Reminder App</h1>
      <div className="input-group">
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter Subject"
        />
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="">Select Day</option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add Task"
        />
      </div>
      <br />
      <button onClick={addTodo}>Add Task</button>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
