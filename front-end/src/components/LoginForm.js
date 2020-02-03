import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import styled from 'styled-components';

const InputDiv = styled.div`
  width: 30%;
  margin: 1% auto;
  display: flex;
  flex-direction: column;
`;

const LoginButton = styled.button`
  margin: 1%;
  border-radius: 15px;
  width: 10%;
  background: white;
  color: green;
  &:hover {
    background: green;
    color: white;
  }
`;

const InputLabel = styled.label`
  text-align: start;
  font-size: 1.2rem;
  color: green;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: .8rem;
  margin-top: 1%;
`;

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
});

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm({ validationSchema: ValidationSchema });
  const onSubmit = data => { alert(JSON.stringify(data)); };

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