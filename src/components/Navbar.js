import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
          <form className='d-flex'>
            <input type="text" className='form-control me-2' typeof='search'
            placeholder='Search' aria-label='search' />
            <button className='btn btn-outline-primary' type='submit'>Search</button>

          </form>
        </div>
      </div>
    </nav>
  );
}

// ✅ Correct PropTypes and DefaultProps
Navbar.propTypes = {
  title: PropTypes.string.isRequired,

  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Stranger',
  aboutText: 'About Text123'
};
