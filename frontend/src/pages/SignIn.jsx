import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

const SignIn = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        saveUserData(result.user);
      }
    } catch (error) {
      console.error('Failed to sign in with Google:', error);
    }
  };

  const saveUserData = async (user) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const response = await fetch(BASE_URL + 'signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: user.uid,
        email: user.email,
        name: user.displayName,
      }),
    });
    if (!response.ok) {
      console.error('Failed to save user data');
    }
  };

  return (
    <Box className='signin'>
      <Box className='signin__container'>
        <Button
          className="signin__btn flex items-center justify-center"
          onClick={signInWithGoogle}
        >
          <FcGoogle className='m-2' />
          Sign in with Google
        </Button>
      </Box>
      <p className='signin__tos'>
        Do not violate the&nbsp;
        <a
          target="_blank"
          rel="noreferrer"
          href="https://openai.com/policies/usage-policies"
          className='font-bold'
        >
          community guideline
        </a>
        &nbsp;or you will be banned for life!
      </p>
    </Box>
  );
};

export default SignIn;