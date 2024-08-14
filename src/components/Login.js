// src/components/Login.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { auth, signInWithEmailAndPassword, googleProvider, facebookProvider, signInWithPopup } from '../firebase'; // Adjust the path if needed

// Styled components
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
`;

const LoginBox = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 600px;

`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4ECDC4;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
`;

const SuccessPopup = styled(motion.div)`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #4CAF50;
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

const GoogleButton = styled(Button)`
  background-color: #DB4437;
`;

const FacebookButton = styled(Button)`
  background-color: #4267B2;
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const validateForm = () => {
    let errors = {};
    if (!email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid';
    if (!password) errors.password = 'Password is required';
    else if (password.length < 6) errors.password = 'Password must be at least 6 characters';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        await signInWithEmailAndPassword(email, password);
        setShowSuccessPopup(true);
        setTimeout(() => {
          window.location.href = '/';
        }, 2000); // Delay to show the popup
      } catch (error) {
        setErrors({ ...errors, general: 'Login failed. Please check your credentials.' });
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await signInWithPopup(provider);
      setShowSuccessPopup(true);
      setTimeout(() => {
        window.location.href = '/';
      }, 2000); // Delay to show the popup
    } catch (error) {
      console.error('Social login failed:', error);
    }
  };

  return (
    <LoginContainer>
      <LoginBox
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>सबसे पहले अकाउंट में लॉगिन करे उसके बाद आप पूरी वेबसाइट को देख सकते है जान सकते है  </h1>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </InputGroup>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Login
          </Button>
          {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}
        </form>
        <SocialLogin>
          <GoogleButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSocialLogin(googleProvider)}
          >
            Login with Google
          </GoogleButton>
          <FacebookButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSocialLogin(facebookProvider)}
          >
            Login with Facebook
          </FacebookButton>
        </SocialLogin>
        {showSuccessPopup && (
          <SuccessPopup
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Login Successful!
          </SuccessPopup>
        )}
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
