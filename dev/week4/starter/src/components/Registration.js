import { useState } from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '', // New field for password confirmation
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the passwords match
    if (formData.password !== formData.confirmPassword) {
      console.log('Password and confirmation do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User registered successfully');

        // Redirect to the login page
        window.location.href = '/login';

      } else {
        const errorData = await response.json();
        console.log('Registration failed:', errorData.errors);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="registration-form">
      <h2 className="header-form">Registration</h2>
      <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* New input field for password confirmation */}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
      <p>
        Already have an account?{' '}
        <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Registration;
