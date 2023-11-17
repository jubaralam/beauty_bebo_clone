// Import necessary React components and styles
import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling

// Create the functional component for the login page
const Login = () => {
  // State to manage input fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    // For a basic example, we'll just log the credentials to the console
    console.log('Username:', username);
    console.log('Password:', password);

    // You can add further logic to check credentials, make API calls, etc.
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
