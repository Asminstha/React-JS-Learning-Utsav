import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

function QuoteCard({ quote, author, bgColor }) {
  const cardRef = useRef();
  const handleDownload = () => {
    if (cardRef.current) {
      toPng(cardRef.current)
        .then((dataUrl) => {
          saveAs(dataUrl, 'quote.png');
        })
        .catch((err) => {
          console.error('Oops, something went wrong!', err);
        });
    }
  };
  return (
    <div className="quote-card-wrapper">
      <div className="quote-card" ref={cardRef} style={{ backgroundColor: bgColor }}>
        <p className="quote-text">"{quote}"</p>
        <p className="quote-author">- {author}</p>
      </div>
      <button onClick={handleDownload}>Download Quote as Image</button>
    </div>
  );
}

export default QuoteCard;
