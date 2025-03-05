import React from 'react';
import logo from './logo.svg';
import './App.css';


import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './Pages/Dashboards';
import Layout from './components/MainHeader';

const App: React.FC = () => {

  return (
    <>
      <GlobalStyles />
      <Layout />
    </>
  );
}

export default App;
