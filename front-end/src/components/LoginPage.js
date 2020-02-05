import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import {
  LoginBox,
  AppTitle,
  AppLogin
} from "../styled/StyledComponents_LoginForm";

const LoginPage = props => {
  return (
    <LoginBox>
      <AppTitle>Water My Plants</AppTitle>
      <AppLogin>Login to Your Account</AppLogin>
      <LoginForm {...props} />
      <Link className="sign_up_link" to="/">
        Create an account
      </Link>
    </LoginBox>
  );
};

export default LoginPage;
