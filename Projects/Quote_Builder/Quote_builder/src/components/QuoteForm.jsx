import React, { useState } from "react";

function QuoteForm({ onQuoteChange }) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [bgColor, setBgColor] = useState("#f0f0f0");
  const handleSubmit = (e) => {
    e.preventDefault();
    onQuoteChange(quote, author, bgColor);
  };
  return (
    <form onSubmit={handleSubmit} className="quote-form">
      <input
        type="text"
        placeholder="Enter your quote"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label style={{ display: "block", marginTop: "10px" }}>
        Choose Color:{" "}
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </label>

      <button type="submit">Generate Quote</button>
    </form>
  );
}

export default QuoteForm;
