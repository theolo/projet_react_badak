import React from 'react';
import { Router } from "react-router-dom";
import history from './history';

// import './App.css';

import Routes from './Routes';

import DataProvider from './store/DataProvider'
import ContentProvider from './store/ContentProvider';


function App() {
  return (
    <DataProvider>
      <ContentProvider>
        <Router history={history}>
          <div style={styles.container}>
            <Routes />
          </div>
        </Router>
      </ContentProvider>
    </DataProvider>
  );
}

export default App;

const styles = {
  container: {
    width: '100%',
  }
}