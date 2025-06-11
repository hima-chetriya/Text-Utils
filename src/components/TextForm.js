// import React from 'react'
import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpclick = () => {
        console.log("Uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChaneg = (event) => {
        console.log("On Change");
        setText(event.target.value);

    }

    // LowerCase
    const handleLoclick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    //celar
        const handleTxtclick = () =>{
            let newText = '';
            setText(newText);
    }
    //Copy text
    const handleCopyclick = () => {
        navigator.clipboard.writeText(text)
    }

    const [text, setText] = useState("");
    // setText("hello hima");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChaneg} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary mx-2" style={{ marginTop: '10px' }} onClick={handleUpclick} type="submit">
                    Convert To UpperCase
                </button>
                <button className="btn btn-primary mx-2" style={{ marginTop: '10px' }} onClick={handleLoclick} type="submit">
                    Convert To LowerCase
                </button>
                <button className="btn btn-primary mx-2" style={{ marginTop: '10px' }} onClick={handleCopyclick} type="submit">
                    Copy To Dashboard
                </button>
                <button className="btn btn-primary mx-2" style={{ marginTop: '10px' }} onClick={handleTxtclick} type="submit">
                    Text Clear
                </button>
            </div>

            <div className='container my-3'>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words,and {text.length}</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
