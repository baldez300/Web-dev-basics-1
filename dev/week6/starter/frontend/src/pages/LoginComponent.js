// src/LoginComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useField from './useField';

const LoginComponent = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const emailField = useField('text');
  const passwordField = useField('password');

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailField.value,
          password: passwordField.value,
        }),
      });

      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem('user', JSON.stringify(user));
        console.log('User logged in successfully!');
        setIsAuthenticated(true);
        navigate('/');
        // emailField.onChange(''); // Reset email field
        // passwordField.onChange(''); // Reset password field
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={emailField.value} onChange={emailField.onChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={passwordField.value} onChange={passwordField.onChange} />
      </label>
      <br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginComponent;
