import React, { useState } from "react";
import "./Project_Counter.css";

function Project_Counter() {
  const [text, setText] = useState("");
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const letterCount = text.length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        placeholder="Type your text here..."
        onChange={handleTextChange}
        value={text}
        rows={5}
        cols={50}
      />
      <p>
        Word Count:
        {wordCount}
      </p>
      <p>Letter Count: {letterCount}</p>
    </div>
  );
}

export default Project_Counter;
