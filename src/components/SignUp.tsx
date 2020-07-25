import React, { useState, FormEvent } from 'react';
import { Container, Form, Heading, Input, Button, Link } from './SignInStyles';

interface Event {
  target: {
    name: string;
    value: string;
  };
}

const SignUp: React.FC = () => {
  const [userCredentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = userCredentials;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log('Submit');
  };

  const handleChange = (event: Event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container signUp={true}>
      <Form onSubmit={handleSubmit}>
        <Heading>Sign Up</Heading>
        <Input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          placeholder='Name'
          required
        />
        <Input
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          placeholder='Email'
          required
        />
        <Input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          placeholder='Password'
          required
        />
        <Input
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          placeholder='Confirm Password'
          required
        />
        <Button type='submit'>Sign Up</Button>
        <Link to='/signin'>{'Already have an account? Sign in'}</Link>
      </Form>
    </Container>
  );
};

export default SignUp;
