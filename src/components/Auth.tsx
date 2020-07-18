import React from 'react';
import { signInWithGoogle } from '../firebase/firebaseUtils';

const Auth: React.FC = () => {
  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  );
};

export default Auth;
