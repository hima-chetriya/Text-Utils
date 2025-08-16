import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'; // Optional: unused when routes are off
// import { BrowserRouter } from "react-router-dom";


import React, { useState } from "react";


// Commented Router imports for now
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#070f40';
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const toggleGreenMode = () => {
    if (mode !== 'green') {
      setMode('green');
      document.body.style.backgroundColor = '#198754';
      showAlert("Green mode is enabled", "success");
      document.title = "TextUtils - Green Mode";
    }
  };

  const toggleRedMode = () => {
    if (mode !== 'red') {
      setMode('red');
      document.body.style.backgroundColor = 'red';
      showAlert("Red mode is enabled", "success");
      document.title = "TextUtils - Red Mode";
    }
  };

  return (
    <>
      <BrowserRouter basename="/TextUtils-React">
    <Navbar
      title="TextUtils"
      aboutText="About"
      mode={mode}
      toggleMode={toggleMode}
      showAlert={showAlert}
      toggleGreenMode={toggleGreenMode}
      toggleRedMode={toggleRedMode}
    />

    <Alert alert={alert} />

    <Routes>
      <Route
        path="/"
        element={
          <TextForm
            heading="Try TextUtils - Word counter, character counter"
            mode={mode}
            showAlert={showAlert}
          />
        }
      />
      <Route
        path="/about"
        element={<About mode={mode} />}
      />
    </Routes>
  </BrowserRouter>

    </>
  );
}

export default App;
