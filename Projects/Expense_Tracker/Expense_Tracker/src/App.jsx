import React, { useState } from 'react';
import './App.css';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    if (name && amount) {
      setExpenses([...expenses, { name, amount: parseFloat(amount) }]);
      setName('');
      setAmount('');
    } else {
      alert('Please enter both name and amount.');
    }
  };

  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <div className="input-group">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Expense Name"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
      </div>
      <button onClick={addExpense} className="add-btn">
        Add Expense
      </button>
      <h2>Total: Rs:{total.toFixed(2)}</h2>
      <ul className="expense-list">
        {expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            {expense.name}: Rs:{expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
