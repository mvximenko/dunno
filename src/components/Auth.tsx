import React, { useState } from 'react';
import { signInWithGoogle } from '../firebase/firebaseUtils';
import { Container, Form, Heading, Input, Button, Span } from './AuthStyles';

const Auth: React.FC = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log('Submit');
  };

  const handleChange = (event: any) => {
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
          onChange={(e) => handleChange(e)}
          value={email}
          placeholder='Email'
          required
        />
        <Input
          name='password'
          type='password'
          value={password}
          onChange={(e) => handleChange(e)}
          placeholder='Password'
          required
        />
        <Button type='submit'>Sign In</Button>
        <Button type='button' google={true} onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
        <Span>{"Don't have an account? Sign up"}</Span>
      </Form>
    </Container>
  );
};

export default Auth;
