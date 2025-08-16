import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }

    const handleOnChaneg = (event) => {
        setText(event.target.value);
    }

    // LowerCase
    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }

    // Clear
    const handleTxtclick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Successfully Cleared Text", "success");
    }

    // Copy text
    const handleCopyclick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Successfully Copied Text", "success");
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{
                backgroundColor: props.mode === 'dark' ? '#070f40' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black'
            }}>
                <h1>{props.heading}</h1>
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChaneg}
                    style={{
                        backgroundColor: props.mode === 'dark' ? '#3d4d68' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }}
                    id="myBox"
                    rows="8">
                </textarea>

                <button disabled={text.length === 0} className="btn btn-primary mx-2" style={{ marginTop: '10px' }} onClick={handleUpclick}>
                    Convert To UpperCase
                </button>

                <button disabled={text.length === 0} className="btn btn-primary mx-2" style={{ marginTop: '10px' }} onClick={handleLoclick}>
                    Convert To LowerCase
                </button>

                <button disabled={text.length === 0} className="btn btn-primary mx-2" style={{ marginTop: '10px' }} onClick={handleCopyclick}>
                    Copy To Clipboard
                </button>

                <button disabled={text.length === 0} className="btn btn-primary mx-2" style={{ marginTop: '10px' }} onClick={handleTxtclick}>
                    Clear Text
                </button>
            </div>

            <div className='container my-3' style={{
                backgroundColor: props.mode === 'dark' ? '#070f40' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black'
            }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter(word => word.trim() !== '').length} Words, and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter(word => word.trim() !== '').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
