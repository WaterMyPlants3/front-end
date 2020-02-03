import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={LoginForm} />
    </div>
  );
}

export default App;
