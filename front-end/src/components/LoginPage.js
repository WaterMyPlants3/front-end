import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
      <Link to="/">Create an account</Link>
    </div>
  );
};

export default LoginPage;