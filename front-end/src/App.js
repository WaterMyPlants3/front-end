import React from 'react';
import { Route } from 'react-router-dom';
import RegistrationPage from './components/RegistrationForm';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Route path='/register' components={RegistrationPage} />
    </div>
  );
}

export default App;
