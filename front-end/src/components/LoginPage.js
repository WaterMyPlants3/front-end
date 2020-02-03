import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const LoginBox = styled.div`
  width: 40%;
  margin: 2% auto;
  padding: 1%;
  border: 1px solid black;
  border-radius: 25px;
  box-shadow: 5px 5px 5px black;
`;

const AppTitle = styled.h1`
  color: green;
  margin: 1%;
`;

const AppLogin = styled.h3`
  color: green;
  margin: 1%;
  font-size: 1.6rem;
`;

const LoginPage = () => {
  return (
    <LoginBox>
      <AppTitle>Water My Plants</AppTitle>
      <AppLogin>Login to Your Account</AppLogin>
      <LoginForm />
      <Link className="sign_up_link" to="/">Create an account</Link>
    </LoginBox>
  );
};

export default LoginPage;