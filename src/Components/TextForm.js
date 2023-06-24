import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handleLoClick=()=>{
      let newtext = text.toLowerCase()
      setText(newtext)
  }
  const handleCopy=()=>{
    let text = document.getElementById('mybox')
    text.select()
    navigator.clipboard.writeText(text.value)
}
const handleClear=()=>{
  setText('')
}
const handleRemoveExtraSpace=()=>{
  let newtext = text.split(/[ ]+/)
  setText(newtext.join(" "))
}
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpace}>Remove extra spaces</button>



    </div>
    <div className="container my-3">
      <h2 style={{color:props.mode==='light'?'black':'white'}}>Your text summary</h2>
      <p style={{color:props.mode==='light'?'black':'white'}}> {text.split(" ").length} words and {text.length} characters</p>
      <h2 style={{color:props.mode==='light'?'black':'white'}}>Preview</h2>
      <p style={{color:props.mode==='light'?'black':'white'}}>{text}</p>
    </div>
    </>
    
  );
}

