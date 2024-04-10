import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Handle successful login (redirect, store token, etc.)
      console.log('Login successful!');
      sessionStorage.setItem('isLoggedIn', true);
      // Example: Redirect to a protected route
      window.location.href = '/users';
    } catch (error) {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
    <div className='login'>
    <form onSubmit={handleSubmit} >
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>
    </div>
  );
};

export default Login;
