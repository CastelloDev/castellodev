import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Routes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
