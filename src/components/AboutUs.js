// import React from 'react';
// import './AboutUs.css';
// import Footer from './Footer';
// import Navbar from './Navbar';  
// import in1Image from '../assets/in1.avif'; 
// import in2Image from '../assets/in2.avif'; 
// import in3Image from '../assets/in3.avif'; 
// import fa0 from '../assets/fa0.jpg'; 
// import fa1 from '../assets/fa1.avif'; 
// import fa2 from '../assets/fa2.avif'; 
// import './Home.css';
// import { Button } from 'react-bootstrap';
// import wallpaper from '../assets/ab_bg.jpg';

// const AboutUs = () => {
//   return (
//     <div>
//       <Navbar /> 

//       {/* Hero Section */}
//       <section className="hero-section" style={{ backgroundImage: `url(${wallpaper})` }}>
//       <div className="hero-content text-center text-white py-5">
//         <h1>DancingRush Academy</h1>
//         <p>A step ahead everyday</p>
//         <div className="hero-buttons mt-3">
//           <Button href="/login" variant="success" className="me-2">Login</Button>
//           <Button href="/courses" variant="outline-light">Courses</Button>
//         </div>
//       </div>
//       </section>
//       {/* Our Story */}
//       <section className="story-section">
//         <h2>Our Story</h2>
//         <p>From humble beginnings to a thriving community of dancers

// Founded in 2005 by professional dancer Maria Rodriguez, DanceWave Academy began as a small studio with just three classes a week. Maria's vision was to create a space where dancers of all ages and abilities could explore their passion for movement in a supportive, creative environment.

// Over the years, we've grown into a premier dance education facility with multiple studios, a diverse faculty of professional instructors, and a comprehensive range of dance styles. Our students have gone on to dance professionally, compete nationally, and most importantly, develop a lifelong love of dance.

// Today, DanceWave Academy serves hundreds of students each week, from toddlers to adults, beginners to pre-professionals. While we've expanded in size, our core mission remains the same: to inspire, educate and elevate through the transformative power of dance.</p>
//       </section>

//       {/* Meet Our Instructors */}
//       <section className="instructors-section">
//         <h2>Meet Our Instructors</h2>
//         <div className="instructors-grid">
//           <div className="instructor-card">
//             <img src={in1Image} alt="Instructor 1" />
//             <h4><strong>Priya Sharma</strong></h4>
//             <p>Creative Director with 10+ years of experience in classical and fusion dance.</p>
//           </div>
//           <div className="instructor-card">
//             <img src={in2Image} alt="Instructor 2" />
//             <h4><strong>Ravi Patel</strong></h4>
//             <p>Expert in contemporary and hip-hop, known for energetic choreography.</p>
//           </div>
//           <div className="instructor-card">
//             <img src={in3Image} alt="Instructor 3" />
//             <h4><strong>Anita Desai</strong></h4>
//             <p>Yoga and mindfulness coach helping students connect mind and body.</p>
//           </div>
//         </div>
//       </section>

//       {/* Our Facilities */}
//       <section className="facilities-section">
//         <h2>Our Facilities</h2>
//         <div className="facilities-images">
//           <img src={fa0} alt="Main Studio" className="main-facility" />
//           <div className="side-facilities">
//             <img src={fa1}alt="Dance Room" />
//             <img src={fa2} alt="Music Area" />
//           </div>
//         </div>
//         <div className="facility-points">
//           <h3>✔ Spacious and air-conditioned dance studios</h3>
//           <h3>✔ Professional sound systems and mirrors</h3>
//           <h3>✔ Hygienic and secure environment for all ages</h3>
//         </div>
//         <div className="hero-buttons mt-3">
//           <Button href="/login" variant="success" className="me-2">Book Studio Tour</Button>
          
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer></Footer>

//     </div>
//   );
// };

// export default AboutUs;


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';
import Footer from './Footer';
import Navbar from './Navbar';  
import in1Image from '../assets/in1.avif'; 
import in2Image from '../assets/in2.avif'; 
import in3Image from '../assets/in3.avif'; 
import fa0 from '../assets/fa0.jpg'; 
import fa1 from '../assets/fa1.avif'; 
import fa2 from '../assets/fa2.avif'; 
import './Home.css';
import { Button } from 'react-bootstrap';
import wallpaper from '../assets/ab_bg.jpg';

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for pending tour booking after login
    const isLoggedIn = localStorage.getItem('loggedInUser');
    const pendingTour = localStorage.getItem('pendingTourBooking');
    
    if (isLoggedIn && pendingTour) {
      alert('We will reach you soon!');
      localStorage.removeItem('pendingTourBooking');
    }
  }, []);

  const handleBookTour = () => {
    const isLoggedIn = localStorage.getItem('loggedInUser');
    
    if (!isLoggedIn) {
      localStorage.setItem('pendingTourBooking', 'true');
      navigate('/login');
    } else {
      alert('We will reach you soon!');
    }
  };

  return (
    <div>
      <Navbar /> 

      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${wallpaper})` }}>
        <div className="hero-content text-center text-white py-5">
          <h1>DancingRush Academy</h1>
          <p>A step ahead everyday</p>
          <div className="hero-buttons mt-3">
            <Button href="/login" variant="success" className="me-2">Login</Button>
            <Button href="/courses" variant="outline-light">Courses</Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <h2>Our Story</h2>
        <p>From humble beginnings to a thriving community of dancers

Founded in 2005 by professional dancer Maria Rodriguez, DanceWave Academy began as a small studio with just three classes a week. Maria's vision was to create a space where dancers of all ages and abilities could explore their passion for movement in a supportive, creative environment.

Over the years, we've grown into a premier dance education facility with multiple studios, a diverse faculty of professional instructors, and a comprehensive range of dance styles. Our students have gone on to dance professionally, compete nationally, and most importantly, develop a lifelong love of dance.

Today, DanceWave Academy serves hundreds of students each week, from toddlers to adults, beginners to pre-professionals. While we've expanded in size, our core mission remains the same: to inspire, educate and elevate through the transformative power of dance.</p>
      </section>

      {/* Meet Our Instructors */}
      <section className="instructors-section">
        <h2>Meet Our Instructors</h2>
        <div className="instructors-grid">
          <div className="instructor-card">
            <img src={in1Image} alt="Instructor 1" />
            <h4><strong>Priya Sharma</strong></h4>
            <p>Creative Director with 10+ years of experience in classical and fusion dance.</p>
          </div>
          <div className="instructor-card">
            <img src={in2Image} alt="Instructor 2" />
            <h4><strong>Ravi Patel</strong></h4>
            <p>Expert in contemporary and hip-hop, known for energetic choreography.</p>
          </div>
          <div className="instructor-card">
            <img src={in3Image} alt="Instructor 3" />
            <h4><strong>Anita Desai</strong></h4>
            <p>Yoga and mindfulness coach helping students connect mind and body.</p>
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="facilities-section">
        <h2>Our Facilities</h2>
        <div className="facilities-images">
          <img src={fa0} alt="Main Studio" className="main-facility" />
          <div className="side-facilities">
            <img src={fa1} alt="Dance Room" />
            <img src={fa2} alt="Music Area" />
          </div>
        </div>
        <div className="facility-points">
          <h3>✔ Spacious and air-conditioned dance studios</h3>
          <h3>✔ Professional sound systems and mirrors</h3>
          <h3>✔ Hygienic and secure environment for all ages</h3>
        </div>
        <div className="hero-buttons mt-3">
          <Button 
            variant="success" 
            className="me-2"
            onClick={handleBookTour}
          >
            Book Studio Tour
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;