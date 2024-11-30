import React from "react";
import "./App.css";
import Project_Counter from "./Components/Project_Counter";

function App() {
    return (
        <div className="App">
            <h1 id="top">
            Count Your Words Live!!
            </h1>
            <h1>
            Words and Letters
            Counter
            </h1>
            <Project_Counter />
        </div>
    );
}

export default App;