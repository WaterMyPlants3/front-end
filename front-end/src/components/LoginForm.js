import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { InputDiv, InputLabel, ErrorMessage, LoginButton } from './StyledComponents_LoginForm';

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
});

const LoginForm = () => {
  const { register, handleSubmit, errors, reset } = useForm({ validationSchema: ValidationSchema });
  const onSubmit = (data, event) => { event.target.reset() };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
        <InputLabel htmlFor="username">Username</InputLabel>
        <input id="username" name="username" type="text" ref={register} />
        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
      </InputDiv>

      <InputDiv>
        <InputLabel htmlFor="password">Password</InputLabel>
        <input id="password" name="password" type="password" ref={register} />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      </InputDiv>

      <LoginButton type="submit">Login</LoginButton>
    </form>
  )
};

export default LoginForm;