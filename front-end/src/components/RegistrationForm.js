import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({

  first_name: Yup.string()
  .required('Name is required')
  .min(2, 'Must be 2 characters or longer'),

  username: Yup.string()
               .required('Username is required')
               .min(2, 'Must be 2 characters or longer'),

  phonenumber: Yup.string()
  .required('Phone number required'),

  email: Yup.email()
  .required('Email address is required'),

  password: Yup.string()
  .required('Password is required')

});

const RegistrationForm = () => {
  const { handleSubmit, register, errors } = useForm({ validationSchema: ValidationSchema });
  const onSubmit = values => { console.log(values) };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="first_name">Name</label>
        <input id="first_name" name="first_name" type="text" ref={register} />
        {errors.first_name && <span>{errors.first_name.message}</span>}
      </div>

      <div>
        <label htmlFor="username">Create a Username</label>
        <input id="username" name="username" type="text" ref={register} />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      
      <div>
        <label htmlFor="phonenumber">Mobile Number</label>
        <input id="phonenumber" name="phonenumber" type="text" ref={register} />
        {errors.phonenumber && <span>{errors.phonenumber.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Mobile Number</label>
        <input id="email" name="email" type="text" ref={register} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" ref={register} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Create Account</button>
    </form>
  )
};

export default RegistrationForm;