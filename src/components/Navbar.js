import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // ❌ Not needed for now

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
      <div className="container-fluid">
        {/* Replace Link with <a> for now */}
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>


          {/* <div className='d-flex'>
            <div className='bg-primary rounded mx-2'  style={{ height: '30px', width: '30px', cursor: 'pointer',}} onClick={() => { props.toggleMode('primary') }}>  </div>
            <div className='bg-danger rounded mx-2'  style={{ height: '30px', width: '30px', cursor: 'pointer',}} onClick={() => { props.toggleMode('danger') }}>  </div>
            <div className='bg-success rounded mx-2'  style={{ height: '30px', width: '30px', cursor: 'pointer',}} onClick={() => { props.toggleMode('success') }}>  </div>
            <div className='bg-warning rounded mx-2'  style={{ height: '30px', width: '30px', cursor: 'pointer',}} onClick={() => { props.toggleMode('warning') }}>  </div>
          </div>  */}


{/* by hima */}
          <div className="d-flex align-items-center">
            <div
              onClick={props.toggleGreenMode}
              style={{
                height: '25px',
                width: '25px',
                backgroundColor: '#198754',
                border: '2px solid black',
                cursor: 'pointer',
                borderRadius: '11px',
                marginLeft: '-40px'
              }}
              title="Enable Green Mode"
            ></div>

            <div
              onClick={props.toggleRedMode}
              style={{
                height: '25px',
                width: '25px',
                backgroundColor: 'red',
                border: '2px solid black',
                cursor: 'pointer',
                borderRadius: '11px',
                marginLeft: '-57px'
              }}
              title="Enable Red Mode"
            ></div>
          </div>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
            <label className="form-check-label" htmlFor="switchCheckDefault">Toggele Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Stranger',
  aboutText: 'About Text123'
};
