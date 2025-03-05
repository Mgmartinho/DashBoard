import React from 'react';
import logo from './logo.svg';
import './App.css';


import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Conheça sua Carteira agora
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wallet
        </a>
      </header>
    </div>
  );
}

export default App;
