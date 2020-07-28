import React, { useState, FormEvent } from 'react';
import { auth, createUserProfileDocument } from '../firebase/firebaseUtils';
import { Container, Form, Heading, Input, Button, Link } from './SignInStyles';

interface Event {
  target: {
    name: string;
    value: string;
  };
}

const SignUp: React.FC = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: Event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container signUp={true}>
      <Form onSubmit={handleSubmit}>
        <Heading>Sign Up</Heading>
        <Input
          type='text'
          name='displayName'
          value={displayName}
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
