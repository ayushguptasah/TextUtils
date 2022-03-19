import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)
  };
  const handleLoClick = () => {
    //console.log("Lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText)
  };
  const handleClearText = () => {
    //console.log("Lowercase was clicked: " + text);
    let newText = '';
    setText(newText)
  };

  const handleOnChanged = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text} onChange={handleOnChanged}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-danger mx-2 my-1" onClick={handleClearText}>
        Clear Text
      </button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
