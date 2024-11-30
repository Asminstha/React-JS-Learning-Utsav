import React, { useState } from "react";
import validator from 'validator';
import './App.css';

const App = () => {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [inputColor, setInputColor] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validate = (value) => {
    setPassword(value); 
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Strong Password');
      setInputColor('green');
    } else {
      setErrorMessage('Weak Password');
      setInputColor('red');
    }
  };

  return (
    <div className="container">
      <h2>Checking Password Strength in ReactJS</h2>
      <div className="input-container">
        <label>Enter Password: </label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => validate(e.target.value)}
          className={`input-field ${inputColor}`}
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="toggle-button"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {errorMessage && (
        <span className={`error-message ${inputColor}`}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default App;
