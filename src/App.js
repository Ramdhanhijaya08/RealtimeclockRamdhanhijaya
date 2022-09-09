import React, { Component, style } from "react";
import "./App.css";
import TimeFunction from "./components/TimeFunction";
import TimeClass from "./components/TimeClass";

function App() {
  return (
    <div className="App">
      <TimeClass /> 
      <TimeFunction />
      </div>
  );
}

export default App;
