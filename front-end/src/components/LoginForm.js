import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
});

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm({ validationSchema: ValidationSchema });
  const onSubmit = data => { console.log(data) };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" ref={register} />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" ref={register} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Login</button>
    </form>
  )
};

export default LoginForm;