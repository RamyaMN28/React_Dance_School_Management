import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomCard.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address!');
      return;
    }
    setError('');
    alert('Reset link sent to your email!');
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2 className="auth-title">Forgot Password</h2>
        <p className="text-light">Enter your email to receive a password reset link.</p>
        
        <input
          className="form-control"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        {error && <div className="error-message">{error}</div>}
        
        <button className="btn btn-primary w-100" type="submit">
          Send Reset Link
        </button>

        <div className="text-center mt-2">
          <Link to="/student/login">Back to Login</Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
