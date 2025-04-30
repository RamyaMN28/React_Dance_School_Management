import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CustomCard.css';

function InstructorRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resume, setResume] = useState(null);
  const [specialization, setSpecialization] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [instructorCode, setInstructorCode] = useState('');

  const navigate = useNavigate();

  const danceStyles = [
    "Ballet",
    "Hip-Hop",
    "Jazz",
    "Bharathanatiyam",
    "Salsa",
    "Kathak"
  ];

  const validateForm = () => {
    return (
      /\S+@\S+\.\S+/.test(email) &&
      password.length >= 6 &&
      password === confirmPassword &&
      resume &&
      specialization &&
      experienceLevel &&
      yearsOfExperience > 0 &&
      instructorCode === 'xaydance'
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      alert('Please fill in all fields correctly!\nMake sure instructor code is "xaydance".');
      return;
    }

    // Extract username from email (before '@')
    const username = email.split('@')[0];
  
    const instructorData = {
      email,
      password,
      username, // Storing the username here
      resumeName: resume.name,
      specialization,
      experienceLevel,
      yearsOfExperience,
      instructorCode
    };
  
    const existingInstructors = JSON.parse(localStorage.getItem('registeredInstructors')) || [];
  
    const alreadyExists = existingInstructors.some(inst => inst.email === email);
    if (alreadyExists) {
      alert('Instructor already registered with this email!');
      return;
    }
  
    existingInstructors.push(instructorData);
    localStorage.setItem('registeredInstructors', JSON.stringify(existingInstructors));
  
    alert('Instructor registered successfully!');
    navigate('/instructor/login');
  };
  
  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Instructor Register</h2>

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

        <input
          className="form-control"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <input
          className="form-control"
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          onChange={(e) => setResume(e.target.files[0])}
          required
        />
        <small className="text-muted">Upload your resume (PDF, DOC, JPG)</small>

        <select
          className="form-control mt-2"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          required
        >
          <option value="">Select Dance Specialization</option>
          {danceStyles.map((style) => (
            <option key={style} value={style}>{style}</option>
          ))}
        </select>

        <select
          className="form-control mt-2"
          value={experienceLevel}
          onChange={(e) => setExperienceLevel(e.target.value)}
          required
        >
          <option value="">Select Experience Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <input
          className="form-control mt-2"
          type="number"
          placeholder="Years of Experience"
          min="1"
          value={yearsOfExperience}
          onChange={(e) => setYearsOfExperience(e.target.value)}
          required
        />

        <input
          className="form-control mt-2"
          type="text"
          placeholder="Instructor Code (xaydance)"
          value={instructorCode}
          onChange={(e) => setInstructorCode(e.target.value)}
          required
        />

        <button className="btn btn-light w-100 mt-3" type="submit">Register</button>

        <div className="text-center mt-2">
          <Link to="/instructor/login">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
}

export default InstructorRegister;
