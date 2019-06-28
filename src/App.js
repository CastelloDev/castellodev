import React from 'react';
import styles from './App.module.scss';
import NavBar from './components/navBar/NavBar';
import Routes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <NavBar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
