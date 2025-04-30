// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './CustomCard.css';

// function StudentRegister() {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const validateForm = () => {
//     const isValidEmail = /\S+@\S+\.\S+/.test(email);
//     const isPasswordMatch = password === confirmPassword;
//     return isValidEmail && isPasswordMatch && name && password.length >= 6;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return alert('Invalid input or password mismatch!');
//     alert('Registered successfully!');
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-card" onSubmit={handleSubmit}>
//         <h2>Student Register</h2>
//         <input
//           className="form-control"
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           className="form-control"
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           className="form-control"
//           type="password"
//           placeholder="Password (min 6 chars)"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input
//           className="form-control"
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//         <button className="btn btn-light w-100" type="submit">Register</button>
//         <div className="text-center mt-2">
//           <Link to="/student/login">Already have an account? Login</Link>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default StudentRegister;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CustomCard.css';

function StudentRegister() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateForm = () => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isPasswordMatch = password === confirmPassword;
    return isValidEmail && isPasswordMatch && name && password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Invalid input or password mismatch!');
      return;
    }

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already exists
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      alert('Email already registered!');
      return;
    }

    // Create user object matching login structure
    const newUser = {
      username: name.trim(),
      email: email.trim(),
      password: password.trim(),
      phone: '' // Add empty phone field to match structure
    };

    // Update users array
    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Set authentication state
    localStorage.setItem('loggedInUser', JSON.stringify({
      username: newUser.username,
      email: newUser.email
    }));
    
    // Immediately redirect to courses
    navigate('/courses');
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Student Register</h2>
        <input
          className="form-control"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="form-control"
          type="email"
          placeholder="Email"
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
        <input
          className="form-control"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="btn btn-light w-100" type="submit">Register</button>
        <div className="text-center mt-2">
          <Link to="/student/login">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
}

export default StudentRegister;