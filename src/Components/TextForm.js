import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpc = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handlelwc = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleClear = () => {
        let newText = '';
        setText(newText)
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const removeExtraSpaces = () => {
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "));
    }

    const [text, setText] = useState('Enter text here');

    return (
        <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode ==='dark'?'gray':'white', color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpc}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelwc}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleSpeak}>Speak</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
    </div>

    <div className="container my-4">
        <h4>Your text summary</h4>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{(0.008 * text.split(" ").length).toFixed()} Minutes read</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  )
}