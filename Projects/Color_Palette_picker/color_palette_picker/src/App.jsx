import React, { useState, useRef } from "react";
import ColorPicker from "./components/ColorPicker";
import Palette from "./components/Palette";
import html2canvas from "html2canvas";
import "./index.css";
function App() {
  const [palette, setPalette] = useState([]);
  const paletteRef = useRef();
  const addColor = (color) => {
    setPalette((prev) => [...prev, color]);
  };
// delete logic 
  const deleteColor = (index) => {
    setPalette((prev) => prev.filter((_, i) => i !== index));
  };
  const exportPaletteJSON = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(palette));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "palette.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  const exportPaletteImage = () => {
    html2canvas(paletteRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "palette.png";
      link.click();
    });
  };
  return (
    <div className="App">
      <h1>Color Palette Picker 🎨</h1>
      <p>Create our Own Color Palette and Share with your Friends!!!</p> <br />
      <ColorPicker onAddColor={addColor} />
      <div ref={paletteRef}>
        <Palette palette={palette} onDeleteColor={deleteColor} />
      </div>
      <div className="btn">
        <button onClick={exportPaletteJSON} className="export-btn">
          Export as JSON
        </button>
        <button onClick={exportPaletteImage} className="export-btn">
          Export as Image
        </button>
      </div>
    </div>
  );
}
export default App;
