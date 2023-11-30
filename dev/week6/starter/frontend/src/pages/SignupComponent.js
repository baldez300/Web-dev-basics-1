// src/SignupComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useField from './useField';

const SignupComponent = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const emailField = useField('text');
  const passwordField = useField('password');
  const confirmPasswordField = useField('password'); // Add a useField hook for confirmPassword
  const [error, setError] = useState(null);

  const handleSignup = async () => {

    try {
      

      // checks if the password matches the confirmation
    if (passwordField.value !== confirmPasswordField.value) {
      console.log("passwords don't match")
      setError("Password confirmation doesn't match.")

    }
    

      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailField.value,
          password: passwordField.value,
          confirmPasswordField: confirmPasswordField.value, // Add confirmPassword to the request body
        }),
      });

      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem('user', JSON.stringify(user));
        console.log('User signed up successfully!');
        setIsAuthenticated(true);
        navigate('/');
        emailField.onChange(''); // Reset email field
        passwordField.onChange(''); // Reset password field
        confirmPasswordField.onChange(''); // Reset confirmPassword field
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>
        Email:
        <input type="text" value={emailField} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={passwordField} />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" value={confirmPasswordField} />
      </label>
      {error && <div>{error}</div>}
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
