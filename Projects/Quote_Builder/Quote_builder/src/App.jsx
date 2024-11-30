import React, { useState } from "react";
import QuoteForm from "./components/QuoteForm.jsx";
import QuoteCard from "./components/QuoteCard.jsx";
import "./index.css";
function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [bgColor, setBgColor] = useState("#f0f0f0");
  const handleQuoteChange = (newQuote, newAuthor, newBgColor) => {
    setQuote(newQuote);
    setAuthor(newAuthor);
    setBgColor(newBgColor);
  };
  return (
    <div className="App">
      <div className="div_con">
        <h1>Build Your Own Quote And Share with your Friends!!!</h1>
        <QuoteForm onQuoteChange={handleQuoteChange} />
        <QuoteCard quote={quote} author={author} bgColor={bgColor} />
      </div>
    </div>
  );
}

export default App;
