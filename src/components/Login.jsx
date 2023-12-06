
import React, { useState } from 'react';
import './animations.css';
import './main.css';
import './login.css';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Perform your server-side validation and authentication here using fetch or other methods
        const response = await fetch('your_login_endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userEmail, userPassword }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Redirect user based on the response data received
          if (data.userType === 'p') {
            // Redirect to patient dashboard
            window.location.href = '/patient/index';
          } else if (data.userType === 'a') {
            // Redirect to admin dashboard
            window.location.href = '/admin/index';
          } else if (data.userType === 'd') {
            // Redirect to doctor dashboard
            window.location.href = '/doctor/index';
          }
        } else {
          // Handle incorrect login credentials or other errors
          setError('Wrong credentials: Invalid email or password');
        }
      } catch (error) {
        setError('An error occurred. Please try again later.');
        console.error('Error:', error);
      }
    };
  return (
       <div className="container">
      <form onSubmit={handleSubmit} >
        
        <p className="header-text">Welcome Back!</p>
        <p className="sub-text">Login with your details to continue</p>
        <label htmlFor="useremail" className="form-label">
          Email:
        </label>
        <input
          type="email"
          name="useremail"
          className="input-text"
          placeholder="Email Address"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <label htmlFor="userpassword" className="form-label">
          Password:
        </label>
        <input
          type="password"
          name="userpassword"
          className="input-text"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
        {error && <label className="form-label" style={{ color: 'rgb(255, 62, 62)', textAlign: 'center' }}>{error}</label>}
        <input type="submit" value="Login" className="login-btn btn-primary btn" />
        <p className="sub-text" style={{ fontWeight: '280' }}>
          Don't have an account? <a href="signup.php" className="hover-link1 non-style-link">Sign Up</a>
        </p>
      </form>
    </div>
  )
}

export default Login
