import { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";
import "react-dropdown/style.css";
import "./App.css";

function App() {
  const [info, setInfo] = useState({});
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("NPR");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    Axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then((res) => {
        setInfo(res.data.rates);
      })
      .catch((error) => console.error("API Error:", error));
  }, [from]);

  useEffect(() => {
    if (info) {
      setOptions(Object.keys(info));
    }
  }, [info]);

  function convert() {
    const rate = info[to];
    if (!rate) {
      alert("Conversion rate not available!");
      return;
    }
    setOutput(input * rate);
  }

  function flip() {
    setFrom(to);
    setTo(from);
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>Currency Converter</h1>
      </div>
      <div className="container">
        <div className="left">
          <h3>Amount</h3>
          <input
            type="number"
            placeholder="Enter the amount"
            onChange={(e) => setInput(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="middle">
          <h3>From</h3>
          <Dropdown
            options={options}
            onChange={(e) => setFrom(e.value)}
            value={from}
            placeholder="From"
          />
        </div>
        <div className="switch">
          <HiSwitchHorizontal size="30px" onClick={flip} />
        </div>
        <div className="right">
          <h3>To</h3>
          <Dropdown
            options={options}
            onChange={(e) => setTo(e.value)}
            value={to}
            placeholder="To"
          />
        </div>
      </div>
      <div className="result">
        <button onClick={convert}>Convert</button>
        <h2>Converted Amount:</h2>
        <p>{`${input} ${from} = ${output.toFixed(2)} ${to}`}</p>
      </div>
    </div>
  );
}

export default App;