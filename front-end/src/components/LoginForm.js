import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import {
  InputDiv,
  InputLabel,
  ErrorMessage,
  LoginButton
} from "../styled/StyledComponents_LoginForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required")
});

const LoginForm = props => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: ValidationSchema
  });

  const onSubmit = event => {
    axiosWithAuth()
      .post(
        "api/auth/login",
        `grant_type=password&username=${event.username}&password=${event.password}`
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/plants");
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
        <InputLabel htmlFor="username">Username</InputLabel>
        <input id="username" name="username" type="text" ref={register} />
        {errors.username && (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}
      </InputDiv>

      <InputDiv>
        <InputLabel htmlFor="password">Password</InputLabel>
        <input id="password" name="password" type="password" ref={register} />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </InputDiv>

      <LoginButton type="submit">Login</LoginButton>
    </form>
  );
};

export default LoginForm;
