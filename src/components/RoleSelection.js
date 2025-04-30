import React from 'react';
import { useNavigate } from 'react-router-dom';
import studentLogo from '../assets/student_logo.png';
import instructorLogo from '../assets/instructor_logo.png';
import './CustomCard.css';
import Navbar from './Navbar';

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="auth-container">
      {/* Role Selection Cards */}
      <div className="d-flex gap-5 flex-wrap justify-content-center">
        {/* Student Card */}
        <div
          className="auth-card text-center"
          onClick={() => navigate('/student/login')}
          style={{ cursor: 'pointer' }}
        >
          <img src={studentLogo} alt="Student" width="130" />
          <h4 className="mt-3">Are You a Student?</h4>
        </div>

        {/* Instructor Card */}
        <div
          className="auth-card text-center"
          onClick={() => navigate('/instructor/login')}
          style={{ cursor: 'pointer' }}
        >
          <img src={instructorLogo} alt="Instructor"style={{ width: '150px' }}/>
          <h4 className="mt-3">Are You an Instructor?</h4>
        </div>
      </div>
    </div>
    </>
  );
}

export default RoleSelection;
