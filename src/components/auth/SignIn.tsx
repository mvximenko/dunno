import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from '../../redux/store';
import { auth, signInWithGoogle } from '../../api/firebase';
import { Container, Form, Heading, Input, Button, Link } from './SignInStyles';

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const userId = useSelector((state) => state.user.userId);
  const { email, password } = userCredentials;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  if (userId) return <Redirect to='/' />;

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
