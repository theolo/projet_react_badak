import React from 'react';
import { Router } from "react-router-dom";
import history from './history';

import './App.css';

import Routes from './Routes';

function App() {
  return (
      <Router history={history}>
          <div className="app">
            <Routes />
          </div>
      </Router>
  );
}

export default App;