import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
      <Link className="sign_up_link" to="/">Create an account</Link>
    </div>
  );
};

export default LoginPage;