import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}

      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Try TextUtils - Word Counter, Character Counter, Remove Extra spaces:"
          mode={Mode}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
