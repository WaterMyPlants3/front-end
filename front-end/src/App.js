import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
