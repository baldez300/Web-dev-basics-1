﻿// src/useSignup.js
import { useState } from 'react';

function useSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const resetFields = () => {
    setEmail('');
    setPassword('');
  };

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    resetFields,
  };
}

export default useSignup;
