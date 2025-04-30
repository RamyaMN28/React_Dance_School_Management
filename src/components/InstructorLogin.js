import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CustomCard.css';

function InstructorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    return /\S+@\S+\.\S+/.test(email) && password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentLoggedIn = localStorage.getItem('loggedInStudent');
    if (studentLoggedIn) {
      return alert('You are already logged in as a student. Please log out from the student account first.');
    }

    if (!validateForm()) {
      return alert('Invalid email or password!');
    }

    const registeredInstructors = JSON.parse(localStorage.getItem('registeredInstructors')) || [];

    const instructor = registeredInstructors.find(
      (inst) => inst.email === email && inst.password === password
    );

    if (!instructor) {
      return alert('Instructor not found or incorrect password!');
    }
    const instructorLoggedIn = localStorage.getItem('loggedInInstructor');
    if (instructorLoggedIn) {
      return alert('You are already logged in as an instructor.');
    }
    

    localStorage.setItem('loggedInInstructor', email);
    alert('Instructor logged in successfully!');

    setEmail('');
    setPassword('');
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Instructor Login</h2>
        <input
          className="form-control"
          type="email"
          placeholder="Instructor Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="form-control"
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-light w-100" type="submit">Login</button>
        <div className="text-center mt-2">
          <Link to="/instructor/forgot">Forgot Password?</Link><br />
          <Link to="/instructor/register">Don't have an account? Register</Link>
          <Link to="/" className="btn form-control">Back to Home</Link>
        </div>
      </form>
    </div>
  );
}

export default InstructorLogin;
