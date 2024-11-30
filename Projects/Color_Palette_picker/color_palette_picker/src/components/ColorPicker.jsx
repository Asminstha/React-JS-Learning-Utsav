import React, { useState } from "react";
function ColorPicker({ onAddColor }) {
  const [color, setColor] = useState("#000000");

  const handleAddColor = () => {
    onAddColor(color);
    setColor("#000000");
  };
  return (
    <div className="color-picker">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleAddColor}>Add Color</button>
    </div>
  );
}
export default ColorPicker;
