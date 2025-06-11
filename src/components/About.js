import React, { useState } from 'react';

export default function About() {
  // State for style
  const [MyStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  });

  // State for button text
  const [btntext, setBtntext] = useState("Enable Light Mode");

  // Toggle function
  const togglestyle = () => {
    if (MyStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      });
      setBtntext("Enable Light Mode");
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtntext("Enable Dark Mode");
    }
  };

  return (
    <div className='container' style={MyStyle}>
      <h1 className='my-3'>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={MyStyle}>
              <strong>This is the first item’s accordion body.</strong> It is shown by default...
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={MyStyle}>
              <strong>This is the second item’s accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={MyStyle}>
              <strong>This is the third item’s accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>
      </div>


      

      <div className='container my-3'>
        <button type="button" onClick={togglestyle} className="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}
