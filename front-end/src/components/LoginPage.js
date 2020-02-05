import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import {
  LoginBox,
  AppTitle,
} from "../styled/StyledComponents_LoginForm";

const LoginPage = props => {
  return (
    <LoginBox>
      <AppTitle>Water My Plants</AppTitle>
      <LoginForm {...props} />
      <Link className="sign_up_link" to="/register">
        Create an account
      </Link>
    </LoginBox>
  );
};

export default LoginPage;
