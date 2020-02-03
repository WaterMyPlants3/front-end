import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const LoginForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input id="username" type="text" name="username" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input id="password" type="password" name="password" />
      </FormGroup>
      <Button>Login</Button>
    </Form>
  )
};

export default LoginForm;