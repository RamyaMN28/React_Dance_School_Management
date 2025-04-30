import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomCard.css';

function InstructorForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Enter a valid email!');
      return;
    }
    alert('Password reset link sent to your email!');
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <input
          className="form-control"
          type="email"
          placeholder="Instructor Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn btn-light w-100" type="submit">Send Reset Link</button>
        <div className="text-center mt-2">
          <Link to="/instructor/login">Back to Login</Link>
        </div>
      </form>
    </div>
  );
}

export default InstructorForgotPassword;
