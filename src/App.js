import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is just a test
        </p>
        <p className="primary">
          {`123456789`}
          </p>
        <a href="patrickbright.dev">learn react</a>
      </header>
    </div>
  );
}

export default App;
