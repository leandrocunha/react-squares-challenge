import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Square } from "./Square";

function App() {
  const squaresSize = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="App">
      {squaresSize.map((square, index) => (
        <Square key={index} />
      ))}
    </div>
  );
}

export default App;
