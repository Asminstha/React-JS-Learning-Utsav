import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (word) {
      setLoading(true);
      const timer = setTimeout(() => {
        setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
        setLoading(false);
      }, 1000); 

      return () => clearTimeout(timer);
    }
  }, [word, size, bgColor]);

  function handleClick() {
    if (temp.trim() === "") {
      alert("Please enter text to generate a QR code.");
    } else {
      setWord(temp);
    }
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input-box">
        <div className="gen">
          <input 
            type="text" 
            onChange={(e) => setTemp(e.target.value)} 
            placeholder="Enter text to encode" 
          />
          <button className="button" onClick={handleClick}>
            Generate
          </button>
        </div>
        <div className="extra">
          <h5>Background Color:</h5>
          <input 
            type="color" 
            onChange={(e) => setBgColor(e.target.value.substring(1))} 
          />
          <h5>Dimension:</h5>
          <input 
            type="range" 
            min="200" 
            max="600" 
            value={size} 
            onChange={(e) => setSize(e.target.value)} 
          />
        </div>
      </div>
      <div className="output-box">
        {loading ? (
          <p>Generating QR Code...</p>
        ) : (
          <>
            <img src={qrCode} alt="QR Code" /> <br />
            <a href={qrCode} download="QRCode">
              <button type="button">Download</button>
            </a>
          </>
        )}
      </div>
    </div>
  );
}
export default App;
