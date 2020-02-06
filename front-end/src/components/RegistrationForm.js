import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import {
  InputDiv,
  InputLabel,
  ErrorMessage,
  LoginButton,
  LoginBox,
  AppTitle
} from "../styled/StyledComponents_LoginForm";


///////////////VALIDATION
const ValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("Name is required")
    .min(2, "Must be 2 characters or longer"),

  username: Yup.string()
    .required("Username is required")
    .min(2, "Must be 2 characters or longer"),

  email: Yup.string()
    .email("Must be valid email address")
    .required("Email address is required"),

  password: Yup.string()
    .required("Password is required")
    .min(5, "Must be 5 characters or longer")
});



//////////////COMPONENT
const RegistrationForm = () => {

  const { handleSubmit, register, errors } = useForm({
    validationSchema: ValidationSchema
  });

  const [user, setUser] = useState({
    first_name: "",
    username: "",
    email: "",
    password: ""
  });

  
  
  const onSubmit = event => {
    event.preventDefault();
    axios.post("api/auth/login", user)
         .then(response => console.log(response))
         .catch(error => console.log('axios didn\'t work', error))
  };

  ///////////////FORM RETURN
  return (

    <LoginBox>

      <AppTitle>Water My Plants</AppTitle>
      <form onSubmit={handleSubmit(onSubmit)}>


        <InputDiv>
          <InputLabel htmlFor="first_name">Name</InputLabel>
          <input 
          id="first_name" 
          name="first_name" 
          type="text"
          value={user.first_name}
          ref={register} 
          />
          {errors.first_name && (
            <ErrorMessage>{errors.first_name.message}</ErrorMessage>
          )}
        </InputDiv>

        <InputDiv>
          <InputLabel htmlFor="username">Create a Username</InputLabel>
          <input 
          id="username" 
          name="username" 
          type="text" 
          value={user.username}
          ref={register} 
          />
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}
        </InputDiv>

        <InputDiv>
          <InputLabel htmlFor="email">Email</InputLabel>
          <input 
          id="email" 
          name="email" 
          type="text"
          value={user.email} 
          ref={register} 
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputDiv>

        <InputDiv>
          <InputLabel htmlFor="password">Password</InputLabel>
          <input 
          id="password" 
          name="password" 
          type="password" 
          value={user.password}
          ref={register} 
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputDiv>

        <LoginButton type="submit">Create Account</LoginButton>

      </form>

      <Link className="sign_up_link" to="/login">
        Already have an account? Login
      </Link>

    </LoginBox>
  );
};

export default RegistrationForm;
