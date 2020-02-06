import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
// import { Form, Button } from 'reactstrap';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import {
  InputDiv,
  InputLabel,
  ErrorMessage,
  LoginButton
} from "../styled/StyledComponents_LoginForm";

const ValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("Name is required")
    .min(2, "Must be 2 characters or longer"),

  username: Yup.string()
    .required("Username is required")
    .min(2, "Must be 2 characters or longer"),

  phonenumber: Yup.string().required("Phone number required"),

  email: Yup.string()
    .email("Must be valid email address")
    .required("Email address is required"),

  password: Yup.string()
    .required("Password is required")
    .min(5, "Must be 5 characters or longer")
});

const RegistrationForm = props => {
  const { handleSubmit, register, errors } = useForm({
    validationSchema: ValidationSchema
  });
  const onSubmit = event => {
    console.log(event);
    axiosWithAuth
      .post(
        "https://water-my-plant-9000.herokuapp.com/api/auth/register",
        event
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
      {/* <InputDiv>
        <InputLabel htmlFor="first_name">Name</InputLabel>
        <input id="first_name" name="first_name" type="text" ref={register} />
        {errors.first_name && (
          <ErrorMessage>{errors.first_name.message}</ErrorMessage>
        )}
      </InputDiv> */}

      <InputDiv>
        <InputLabel htmlFor="username">Create a Username</InputLabel>
        <input id="username" name="username" type="text" ref={register} />
        {errors.username && (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}
      </InputDiv>

      {/* <InputDiv>
        <InputLabel htmlFor="phonenumber">Mobile Number</InputLabel>
        <input id="phonenumber" name="phonenumber" type="text" ref={register} />
        {errors.phonenumber && (
          <ErrorMessage>{errors.phonenumber.message}</ErrorMessage>
        )}
      </InputDiv> */}

      <InputDiv>
        <InputLabel htmlFor="password">Password</InputLabel>
        <input id="password" name="password" type="password" ref={register} />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </InputDiv>

      <LoginButton type="submit">Create Account</LoginButton>
    </form>
  );
};

export default RegistrationForm;
