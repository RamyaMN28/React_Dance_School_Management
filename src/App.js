import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RoleSelection from './components/RoleSelection';
import StudentLogin from './components/StudentLogin';
import StudentRegister from './components/StudentRegister';
import ForgotPassword from './components/ForgotPassword';
import InstructorLogin from './components/InstructorLogin';
import InstructorRegister from './components/InstructorRegister';
import InstructorForgotPassword from './components/InstructorForgotPassword';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar'; // Corrected import statement
import CoursePage from './components/CoursePage';
import FAQ from './components/FAQPage';
import DashboardPage from './components/DashboardPage'

function App() {
  return (
    <Router>
      {/* Add the Navbar to be displayed on all pages */}
      <Navbar />
      
      <Routes>
        {/* Home and RoleSelection Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<RoleSelection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/faq" element={<FAQ />} />
        
        {/* Student Routes */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/student/forgot-password" element={<ForgotPassword />} />


        {/* Instructor Routes */}
        <Route path="/instructor/login" element={<InstructorLogin />} />
        <Route path="/instructor/register" element={<InstructorRegister />} />
        <Route path="/instructor/forgot" element={<InstructorForgotPassword />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
