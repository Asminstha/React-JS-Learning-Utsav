import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [temp, setTemp] = useState('');
  const [result, setResult] = useState(null);

  const convertToFahrenheit = () => {
    setResult((temp * 9) / 5 + 32);
  };

  const convertToCelsius = () => {
    setResult(((temp - 32) * 5) / 9);
  };

  return (
    <div className="temp-app">
      <h1>Temperature Converter</h1>
      <input
        type="number"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        placeholder="Enter Temperature"
      />
      <div className="buttons">
        <button onClick={convertToFahrenheit}>To Fahrenheit</button>
        <button onClick={convertToCelsius}>To Celsius</button>
      </div>
      {result !== null && <h3>Result: {result.toFixed(2)}</h3>}
    </div>
  );
};

export default App;
