// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
// import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import { SiX } from "react-icons/si";
// import logo from "../assets/logo_dan.png";

// const Navbar = () => {
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [loggedInInstructor, setLoggedInInstructor] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();  // Hook to get the current location (path)

//   useEffect(() => {
//     const user = localStorage.getItem("loggedInUser");
//     const instructor = localStorage.getItem("loggedInInstructor");

//     setLoggedInUser(user);  // Update general user state (could be instructor, student, etc.)
//     setLoggedInInstructor(instructor);  // Set the instructor login status
//   }, []);

//   const handleLogout = (type) => {
//     // Ask for confirmation before logging out
//     const confirmLogout = window.confirm("Do you want to logout?");
    
//     // If the user confirms, proceed with logout
//     if (confirmLogout) {
//       if (type === "student") {
//         localStorage.removeItem("loggedInUser");
//         alert("Do you want to logout?");
//         setLoggedInUser(null);
//       } else if (type === "instructor") {
//         localStorage.removeItem("loggedInInstructor");
//         setLoggedInInstructor(null);
//       }
//       navigate("/login");
//     }
//   };
  
//   // Function to check if the current route matches the path
//   const isActive = (path) => {
//     return location.pathname === path ? 'active' : '';
//   };

//   return (
//     <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#103910" }}>
//       <Container fluid>
//         {/* Navbar Brand */}
//         <a className="navbar-brand text-white d-flex align-items-center" href="/">
//           <img src={logo} alt="Dance School Logo" style={{ height: '40px', marginRight: '10px' }} />
//           DancingRush Academy
//         </a>

//         {/* Toggler for Mobile */}
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Content */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           {/* Centered Nav Links */}
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className={`nav-link text-white ${isActive("/")}`} to="/">HOME</Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link text-white ${isActive("/about")}`} to="/about">ABOUT US</Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link text-white ${isActive("/courses")}`} to="/courses">COURSES</Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link text-white ${isActive("/faq")}`} to="/faq">FAQ</Link>
//             </li>
//           </ul>

//           {/* Right-Aligned User Info / Auth Buttons / Social Icons */}
//           <div className="d-flex align-items-center gap-3 ms-auto">
//             {/* Social Icons */}
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
//               <FaFacebook />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
//               <SiX />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
//               <FaInstagram />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
//               <FaLinkedin />
//             </a>

//             {/* Auth Buttons */}
//             {loggedInUser ? (
//               <>
//                 <span className="text-white fw-bold">Hi, {loggedInUser}</span>
//                 <button className="btn btn-light btn-sm" onClick={() => handleLogout("student")}>
//                   Logout
//                 </button>
//               </>
//             ) : loggedInInstructor ? (
//               <>
//                 <span className="text-white fw-bold">Hi, {loggedInInstructor}</span>
//                 <button className="btn btn-light btn-sm" onClick={() => handleLogout("instructor")}>
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="btn btn-outline-light btn-sm" onClick={() => navigate("/login")}>
//                   Login
//                 </button>
//                 <button className="btn btn-outline-light btn-sm" onClick={() => navigate("/login")}>
//                   Sign Up
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </Container>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiX } from "react-icons/si";
import logo from "../assets/logo_dan.png";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInInstructor, setLoggedInInstructor] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Parse the user data from localStorage
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const instructor = localStorage.getItem("loggedInInstructor");

    // Set username from parsed user object
    setLoggedInUser(user?.username);  // Store only the username
    setLoggedInInstructor(instructor);
  }, [location]);  // Add location to dependency array to update on route change

  const handleLogout = (type) => {
    const confirmLogout = window.confirm("Do you want to logout?");
    
    if (confirmLogout) {
      if (type === "student") {
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);
      } else if (type === "instructor") {
        localStorage.removeItem("loggedInInstructor");
        setLoggedInInstructor(null);
      }
      navigate("/login");
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#103910" }}>
      <Container fluid>
        <a className="navbar-brand text-white d-flex align-items-center" href="/">
          <img src={logo} alt="Dance School Logo" style={{ height: '40px', marginRight: '10px' }} />
          DancingRush Academy
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link text-white ${isActive("/")}`} to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white ${isActive("/about")}`} to="/about">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white ${isActive("/courses")}`} to="/courses">COURSES</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white ${isActive("/faq")}`} to="/faq">FAQ</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 ms-auto">
            {/* Social icons remain same */}

            {loggedInUser ? (
              <>
                <span className="text-white fw-bold">Hi, {loggedInUser}</span>
                <button className="btn btn-light btn-sm" onClick={() => handleLogout("student")}>
                  Logout
                </button>
              </>
            ) : loggedInInstructor ? (
              <>
                <span className="text-white fw-bold">Hi, {loggedInInstructor}</span>
                <button className="btn btn-light btn-sm" onClick={() => handleLogout("instructor")}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-outline-light btn-sm" onClick={() => navigate("/login")}>
                  Login
                </button>
                <button className="btn btn-outline-light btn-sm" onClick={() => navigate("/login")}>
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;