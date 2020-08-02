import React, { useState, FormEvent } from 'react';
import { Redirect } from 'react-router-dom';
import { auth, signInWithGoogle } from '../firebase/firebaseUtils';
import { Container, Form, Heading, Input, Button, Link } from './SignInStyles';

interface Props {
  isAuthenticated: boolean;
}

interface Event {
  target: {
    name: string;
    value: string;
  };
}

const SignIn: React.FC<Props> = ({ isAuthenticated }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { email, password } = userCredentials;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: Event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

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
          autoComplete='email'
          required
        />
        <Input
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          placeholder='Password'
          autoComplete='current-password'
          required
        />
        <Button type='submit'>Sign In</Button>
        <Button type='button' google={true} onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
        <Link to='/signup'>{'New to Dunno? Sign up'}</Link>
      </Form>
    </Container>
  );
};

export default SignIn;
