import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { Component } from "react";

function App() {
  const [Mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  
  const toggleMode = () =>{
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter The Text to Analyze Below:" mode={Mode} />
      </div>
    </>
  );
}

export default App;
