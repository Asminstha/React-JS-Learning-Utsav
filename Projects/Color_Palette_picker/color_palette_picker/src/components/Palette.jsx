import React from "react";
function Palette({ palette, onDeleteColor }) {
  return (
    <div className="palette">
      {palette.map((color, index) => (
        <div key={index} className="color-item">
          <div
            className="color-box"
            style={{ backgroundColor: color }}
          ></div>
          <button
            className="delete-btn"
            onClick={() => onDeleteColor(index)}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default Palette;
