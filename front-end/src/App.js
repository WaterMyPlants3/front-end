import React from 'react';
import { Route } from 'react-router-dom';
import RegistrationPage from './components/RegistrationForm';
import './App.css';
// import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className='App'>
      <Route path='/register' components={RegistrationPage} />
    </div>
  );
}

export App;

/*
const RegistrationPage = () => {
  return(
    <div>
      <RegistrationForm />
      <Link className='sign-in_Link' to='/login'>Sign In</Link>
    </div>
  )
}

export */
