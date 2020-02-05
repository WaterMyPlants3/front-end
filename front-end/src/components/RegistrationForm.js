import React from 'react';
import * as Yup from 'yup';

//////////////////////////////////////////////////////Validation Using Yup/////////////////////////////////
const ValidationSchema = Yup.object().shape({

  first_name: Yup.string()
                  .required('Name is required')
                  .min(2, 'Must be 2 characters or longer'),

  username: Yup.string()
                .required('Username is required')
                .min(2, 'Must be 2 characters or longer'),

  phonenumber: Yup.string()
                .required('Phone number required'),

  email: Yup.string()
                .email()('Must be valid email address')
                .required('Email address is required'),

  password: Yup.string()
                .required('Password is required')
                .min(5, 'Must be 5 characters or longer')

});

//////////////////////////////////////////////////Create Registration Form/////////////////////////////////////
const RegistrationForm = () => {
  const { handleSubmit, register, errors } = useForm({ validationSchema: ValidationSchema });
  const onSubmit = values => { console.log(values) };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>  {/*Input (x5) in one form; needs validation, set States, data to backend*/}
        <InputLabel htmlFor="first_name">Name</InputLabel>s
        <input id="first_name" name="first_name" type="text" ref={register} />
        {errors.first_name && <ErrorMessage>{errors.first_name.message}</ErrorMessage>}
      </InputDiv>

      <InputDiv>
        <InputLabel htmlFor="username">Create a Username</InputLabel>
        <input id="username" name="username" type="text" ref={register} />
        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
      </InputDiv>
      
      <InputDiv>
        <InputLabel htmlFor="phonenumber">Mobile Number</InputLabel>
        <input id="phonenumber" name="phonenumber" type="text" ref={register} />
        {errors.phonenumber && <ErrorMessage>{errors.phonenumber.message}</ErrorMessage>}
      </InputDiv>

      <InputDiv>
        <InputLabel htmlFor="email">Mobile Number</InputLabel>
        <input id="email" name="email" type="text" ref={register} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </InputDiv>

      <InputDiv>
        <InputLabel htmlFor="password">Password</InputLabel>
        <input id="password" name="password" type="password" ref={register} />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      </InputDiv>

      <Button type="submit">Create Account</Button>
    </Form>
  )
};

export default RegistrationForm;