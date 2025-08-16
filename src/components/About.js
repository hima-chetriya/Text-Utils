import React, { useState } from 'react';

export default function About(props) {
  // State for style
  // const [MyStyle, setMyStyle] = useState({
  //   color: 'white',
  //   backgroundColor: 'black'
  // });
let MyStyle = {
color: props.mode === 'dark'?'white' : '#625d5d',
backgroundColor: props.mode ==='dark'?'#625d5d':'white',
border:'2px solid',
borderColor:'dark'?'white' : '#625d5d'
}

  return (
    <div className='container' style={MyStyle}>
      <h1 className='my-3'>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <strong> Analyze Your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={MyStyle}>
              Textutils gives you a way to analyze your text quickly and efficiently .
              Be it word count, character count.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={MyStyle}>
              TextUtils is  a free character counter tool that provides  instant character count & word count statistics
              for a given text, TextUtils reports the number of words and characters.Thus ti is suitable for writing
              text with word/Character limit
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>

            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={MyStyle}>
              This  word counter software works in any web browsers such as Chrome, Firefox, Internet Explore, Safari,
              Opera.It suits to count characters in facebook, blog, books, excel document, pdf document, essay, etc.
            </div>
          </div>
        </div>
      </div>

      {/* <div className='container my-3'>
        <button type="button" onClick={togglestyle} className="btn btn-primary">
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
