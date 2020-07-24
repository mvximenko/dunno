import React, { useState, FormEvent } from 'react';
import { signInWithGoogle } from '../firebase/firebaseUtils';
import { Container, Form, Heading, Input, Button, Link } from './SignInStyles';

interface Event {
  target: {
    name: string;
    value: string;
  };
}

const SignIn: React.FC = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Submit');
  };

  const handleChange = (event: Event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Heading>Sign In</Heading>
        <Input
          name='email'
          type='email'
          onChange={handleChange}
          value={email}
          placeholder='Email'
          required
        />
        <Input
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          placeholder='Password'
          required
        />
        <Button type='submit'>Sign In</Button>
        <Button type='button' google={true} onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
        <Link to='/dunno/signup'>{'New to Dunno? Sign up'}</Link>
      </Form>
    </Container>
  );
};

export default SignIn;
