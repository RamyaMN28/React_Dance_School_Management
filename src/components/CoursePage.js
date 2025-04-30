// import React, { useState } from 'react';
// import './CoursePage.css';
// import Footer from './Footer';
// import Navbar from './Navbar';
// import { Button, Modal, Form } from 'react-bootstrap';
// import wall from "../assets/course_bg.jpg";
// import d1 from "../assets/d4.png";
// import d2 from "../assets/d2.png";
// import d5 from "../assets/d5.jpg";
// import d3 from "../assets/d3.jpg";
// import d4 from "../assets/d4.jpeg";
// import d6 from "../assets/d6.jpg";

// function CoursePage() {
//   const [selectedLevel, setSelectedLevel] = useState('All');
//   const [bookedClasses, setBookedClasses] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedClass, setSelectedClass] = useState(null);

//   const schedules = [
//     { name: 'Hip Hop', day: 'Tuesday', time: '11:00 AM - 12:30 PM', instructor: 'Marcus J.', level: 'Intermediate' },
//     { name: 'Ballet', day: 'Wednesday', time: '2:00 PM - 3:30 PM', instructor: 'Sophia C.', level: 'Beginner' },
//     { name: 'Jazz', day: 'Thursday', time: '4:00 PM - 5:30 PM', instructor: 'David R.', level: 'Advanced' },
//     { name: 'Bharatanatyam', day: 'Monday', time: '10:00 AM - 11:30 AM', instructor: 'Meenakshi S.', level: 'Beginner' },
//     { name: 'Kathak', day: 'Friday', time: '1:00 PM - 2:30 PM', instructor: 'Anitha R.', level: 'Intermediate' },
//     { name: 'Salsa', day: 'Sunday', time: '3:00 PM - 4:30 PM', instructor: 'Carla M.', level: 'Intermediate' }
//   ];

//   const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

//   const filteredSchedules = selectedLevel === 'All'
//     ? schedules
//     : schedules.filter(cls => cls.level === selectedLevel);

//   const handleOpenModal = (cls) => {
//     setSelectedClass(cls);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedClass(null);
//   };

//   const handlePayment = (e) => {
//     e.preventDefault();
//     const newBooking = {
//       ...selectedClass,
//       attendance: 'Not Attended',
//       feesPaid: 'Yes'
//     };
//     setBookedClasses((prev) => [...prev, newBooking]);
//     handleCloseModal();
//   };

//   const isClassBooked = (cls) => {
//     return bookedClasses.some(
//       (b) => b.name === cls.name && b.day === cls.day && b.time === cls.time
//     );
//   };

//   return (
//     <div>
//       <Navbar />

//       {/* Hero Section */}
//       <section className="hero-section" style={{ backgroundImage: `url(${wall})` }}>
//         <div className="hero-content text-center text-white py-5">
//           <h1>DancingRush Academy</h1>
//           <p>A step ahead everyday</p>
//           <div className="hero-buttons mt-3">
//             <Button href="/login" variant="success" className="me-2">Get Started</Button>
//             <Button href="/about" variant="outline-light">About Us</Button>
//           </div>
//         </div>
//       </section>

//       {/* Explore Dance Styles */}
//       <div className="explore-section text-center py-5">
//         <h2 className="fw-bold">Explore Dance Styles</h2>
//         <p className="lead mb-5">Find the style that moves you!</p>
//         <div className="container">
//           <div className="row g-4">
//             {[{ name: 'Hip Hop', desc: 'Urban street style with energetic moves.', image: d1, level: 'All Levels', link: 'https://en.wikipedia.org/wiki/Hip_hop_dance' },
//               { name: 'Ballet', desc: 'Elegant and classical dance form.', image: d4, level: 'Beginner to Advanced', link: 'https://en.wikipedia.org/wiki/Ballet' },
//               { name: 'Jazz', desc: 'Rhythmic and expressive movement.', image: d6, level: 'Intermediate', link: 'https://en.wikipedia.org/wiki/Jazz_dance' },
//               { name: 'Kathak', desc: 'Classical Indian dance form.', image: d5 , level: 'All Levels', link: 'https://en.wikipedia.org/wiki/Kathak' },
//               { name: 'Bharatanatyam', desc: 'Ancient classical Indian dance.', image: d3 , level: 'Intermediate to Advanced', link: 'https://en.wikipedia.org/wiki/Bharatanatyam' },
//               { name: 'Salsa', desc: 'Latin dance style with energetic movements.', image: d2 , level: 'All Levels', link: 'https://en.wikipedia.org/wiki/Salsa_(dance)' }
//             ].map((dance, i) => (
//               <div className="col-md-4" key={i}>
//                 <div className="card h-100 shadow-sm dance-card">
//                   <img src={dance.image} className="card-img-top" alt={dance.name} />
//                   <div className="card-body">
//                     <h5 className="card-title fw-bold">{dance.name}</h5>
//                     <p className="card-text">{dance.desc}</p>
//                   </div>
//                   <div className="d-flex justify-content-between px-3 pb-3">
//                     <a target="_blank" rel="noreferrer" className="btn btn-success">{dance.level}</a>
//                     <a href={dance.link} target="_blank" rel="noreferrer" className="btn btn-outline-success btn-sm">Learn More</a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Weekly Schedule */}
//       <div className="schedule-section py-5 bg-light text-center">
//         <h2 className="mb-3 fw-bold">Weekly Class Timetable</h2>
//         <p className="text-muted">Plan your week with our exciting classes</p>
//         <div className="btn-group mb-4">
//           {levels.map((level, i) => (
//             <button
//               key={i}
//               className={`btn ${selectedLevel === level ? 'btn-success' : 'btn-outline-success'}`}
//               onClick={() => setSelectedLevel(level)}
//             >
//               {level}
//             </button>
//           ))}
//         </div>

//         <div className="container">
//           <div className="row g-4 justify-content-center">
//             {filteredSchedules.map((cls, i) => (
//               <div className="col-md-4" key={i}>
//                 <div className="card green-schedule h-100">
//                   <div className="card-body">
//                     <h5 className="card-title fw-bold">{cls.name}</h5>
//                     <h6 className="text-muted">{cls.level} Level</h6>
//                     <ul className="list-unstyled mt-3">
//                       <li><i className="bi bi-calendar-event-fill me-2"></i>{cls.day}</li>
//                       <li><i className="bi bi-clock-fill me-2"></i>{cls.time}</li>
//                       <li><i className="bi bi-person-fill me-2"></i>Instructor: {cls.instructor}</li>
//                     </ul>
//                   </div>
//                   <div className="card-footer bg-transparent border-0">
//                     <button 
//                       className={`btn ${isClassBooked(cls) ? 'btn-secondary' : 'btn-success'} w-100`} 
//                       onClick={() => !isClassBooked(cls) && handleOpenModal(cls)}
//                       disabled={isClassBooked(cls)}
//                     >
//                       {isClassBooked(cls) ? 'Booked' : 'Book Class'}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {filteredSchedules.length === 0 && (
//               <div className="text-muted mt-4">No classes available at this level.</div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Modal Payment Form */}
//       <Modal show={showModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Pay & Donate </Modal.Title>
//         </Modal.Header>
//         <Form onSubmit={handlePayment}>
//           <Modal.Body>
//             <p><strong>Class:</strong> {selectedClass?.name}</p>
//             <p><strong>Fees:</strong> ₹500</p>
//             <Form.Group className="mb-3">
//               <Form.Label>Card Number</Form.Label>
//               <Form.Control type="text" required placeholder="1234 5678 9012 3456" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Name on Card</Form.Label>
//               <Form.Control type="text" required placeholder="John Doe" />
//             </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
//             <Button variant="success" type="submit">Pay ₹500</Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>

//       {/* Booked Classes */}
//       {bookedClasses.length > 0 && (
//         <div className="booked-classes-section py-5">
//           <h2 className="text-center mb-4 fw-bold">Your Booked Classes</h2>
//           <div className="container">
//             <div className="row g-4">
//               {bookedClasses.map((cls, i) => (
//                 <div className="col-md-4" key={i}>
//                   <div className="card h-100 border-success">
//                     <div className="card-body">
//                       <h5 className="card-title fw-bold">{cls.name}</h5>
//                       <h6 className="text-muted">{cls.level} Level</h6>
//                       <ul className="list-unstyled mt-3">
//                         <li><i className="bi bi-calendar-event-fill me-2"></i>{cls.day}</li>
//                         <li><i className="bi bi-clock-fill me-2"></i>{cls.time}</li>
//                         <li><i className="bi bi-person-fill me-2"></i>Instructor: {cls.instructor}</li>
//                         <li><i className="bi bi-cash-coin me-2"></i>Fees Paid: {cls.feesPaid}</li>
//                       </ul>
//                     </div>
//                     <div className="card-footer bg-transparent border-0">
//                       <Button variant="secondary" className="w-100" disabled>Booked</Button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Call to Action */}
//       <div className="cta-section text-center py-5 bg-success text-white">
//         <h2>Ready to start dancing?</h2>
//         <p className="lead">Join us for a free trial class today.</p>
//         <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
//           <Button href="/login" variant="light" className="fw-bold text-success">Get Started</Button>
//           <Button href="/about" variant="outline-light">About Us</Button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default CoursePage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CoursePage.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { Button, Modal, Form } from 'react-bootstrap';
import wall from "../assets/course_bg.jpg";
import d1 from "../assets/d4.png";
import d2 from "../assets/d2.png";
import d5 from "../assets/d5.jpg";
import d3 from "../assets/d3.jpg";
import d4 from "../assets/d4.jpeg";
import d6 from "../assets/d6.jpg";

function CoursePage() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [bookedClasses, setBookedClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    const pendingBooking = localStorage.getItem('pendingBooking');
    if (pendingBooking) {
      const cls = JSON.parse(pendingBooking);
      setSelectedClass(cls);
      setShowModal(true);
      localStorage.removeItem('pendingBooking');
    }
  }, []);

  const schedules = [
    { name: 'Hip Hop', day: 'Tuesday', time: '11:00 AM - 12:30 PM', instructor: 'Marcus J.', level: 'Intermediate' },
    { name: 'Ballet', day: 'Wednesday', time: '2:00 PM - 3:30 PM', instructor: 'Sophia C.', level: 'Beginner' },
    { name: 'Jazz', day: 'Thursday', time: '4:00 PM - 5:30 PM', instructor: 'David R.', level: 'Advanced' },
    { name: 'Bharatanatyam', day: 'Monday', time: '10:00 AM - 11:30 AM', instructor: 'Meenakshi S.', level: 'Beginner' },
    { name: 'Kathak', day: 'Friday', time: '1:00 PM - 2:30 PM', instructor: 'Anitha R.', level: 'Intermediate' },
    { name: 'Salsa', day: 'Sunday', time: '3:00 PM - 4:30 PM', instructor: 'Carla M.', level: 'Intermediate' }
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredSchedules = selectedLevel === 'All'
    ? schedules
    : schedules.filter(cls => cls.level === selectedLevel);

  const handleOpenModal = (cls) => {
    const isLoggedIn = localStorage.getItem('loggedInUser');
    if (!isLoggedIn) {
      localStorage.setItem('pendingBooking', JSON.stringify(cls));
      navigate('/login');
      return;
    }
    setSelectedClass(cls);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedClass(null);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    const newBooking = {
      ...selectedClass,
      attendance: 'Not Attended',
      feesPaid: 'Yes'
    };
    setBookedClasses((prev) => [...prev, newBooking]);
    handleCloseModal();
  };

  const isClassBooked = (cls) => {
    return bookedClasses.some(
      (b) => b.name === cls.name && b.day === cls.day && b.time === cls.time
    );
  };

  return (
    <div>
      <Navbar />

      {/* <section className="hero-section" style={{ backgroundImage: `url(${wall})` }}>
        <div className="hero-content text-center text-white py-5">
          <h1>DancingRush Academy</h1>
          <p>A step ahead everyday</p>
          <div className="hero-buttons mt-3">
            <Button href="/login" variant="success" className="me-2">Get Started</Button>
            <Button href="/about" variant="outline-light">About Us</Button>
          </div>
        </div>
      </section> */}

      <div className="explore-section text-center py-5">
        <h2 className="fw-bold">Explore Dance Styles</h2>
        <p className="lead mb-5">Find the style that moves you!</p>
        <div className="container">
          <div className="row g-4">
            {[{ name: 'Hip Hop', desc: 'Urban street style with energetic moves.', image: d1, level: 'All Levels', link: 'https://en.wikipedia.org/wiki/Hip_hop_dance' },
              { name: 'Ballet', desc: 'Elegant and classical dance form.', image: d4, level: 'Beginner to Advanced', link: 'https://en.wikipedia.org/wiki/Ballet' },
              { name: 'Jazz', desc: 'Rhythmic and expressive movement.', image: d6, level: 'Intermediate', link: 'https://en.wikipedia.org/wiki/Jazz_dance' },
              { name: 'Kathak', desc: 'Classical Indian dance form.', image: d5 , level: 'All Levels', link: 'https://en.wikipedia.org/wiki/Kathak' },
              { name: 'Bharatanatyam', desc: 'Ancient classical Indian dance.', image: d3 , level: 'Intermediate to Advanced', link: 'https://en.wikipedia.org/wiki/Bharatanatyam' },
              { name: 'Salsa', desc: 'Latin dance style with energetic movements.', image: d2 , level: 'All Levels', link: 'https://en.wikipedia.org/wiki/Salsa_(dance)' }
            ].map((dance, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm dance-card">
                  <img src={dance.image} className="card-img-top" alt={dance.name} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{dance.name}</h5>
                    <p className="card-text">{dance.desc}</p>
                  </div>
                  <div className="d-flex justify-content-between px-3 pb-3">
                    <a target="_blank" rel="noreferrer" className="btn btn-success">{dance.level}</a>
                    <a href={dance.link} target="_blank" rel="noreferrer" className="btn btn-outline-success btn-sm">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="schedule-section py-5 bg-light text-center">
        <h2 className="mb-3 fw-bold">Weekly Class Timetable</h2>
        <p className="text-muted">Plan your week with our exciting classes</p>
        <div className="btn-group mb-4">
          {levels.map((level, i) => (
            <button
              key={i}
              className={`btn ${selectedLevel === level ? 'btn-success' : 'btn-outline-success'}`}
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="container">
          <div className="row g-4 justify-content-center">
            {filteredSchedules.map((cls, i) => (
              <div className="col-md-4" key={i}>
                <div className="card green-schedule h-100">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{cls.name}</h5>
                    <h6 className="text-muted">{cls.level} Level</h6>
                    <ul className="list-unstyled mt-3">
                      <li><i className="bi bi-calendar-event-fill me-2"></i>{cls.day}</li>
                      <li><i className="bi bi-clock-fill me-2"></i>{cls.time}</li>
                      <li><i className="bi bi-person-fill me-2"></i>Instructor: {cls.instructor}</li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <button 
                      className={`btn ${isClassBooked(cls) ? 'btn-secondary' : 'btn-success'} w-100`} 
                      onClick={() => !isClassBooked(cls) && handleOpenModal(cls)}
                      disabled={isClassBooked(cls)}
                    >
                      {isClassBooked(cls) ? 'Booked' : 'Book Class'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {filteredSchedules.length === 0 && (
              <div className="text-muted mt-4">No classes available at this level.</div>
            )}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pay & Donate </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handlePayment}>
          <Modal.Body>
            <p><strong>Class:</strong> {selectedClass?.name}</p>
            <p><strong>Fees:</strong> ₹500</p>
            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" required placeholder="1234 5678 9012 3456" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control type="text" required placeholder="John Doe" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
            <Button variant="success" type="submit">Pay ₹500</Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {bookedClasses.length > 0 && (
        <div className="booked-classes-section py-5">
          <h2 className="text-center mb-4 fw-bold">Your Booked Classes</h2>
          <div className="container">
            <div className="row g-4">
              {bookedClasses.map((cls, i) => (
                <div className="col-md-4" key={i}>
                  <div className="card h-100 border-success">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{cls.name}</h5>
                      <h6 className="text-muted">{cls.level} Level</h6>
                      <ul className="list-unstyled mt-3">
                        <li><i className="bi bi-calendar-event-fill me-2"></i>{cls.day}</li>
                        <li><i className="bi bi-clock-fill me-2"></i>{cls.time}</li>
                        <li><i className="bi bi-person-fill me-2"></i>Instructor: {cls.instructor}</li>
                        <li><i className="bi bi-cash-coin me-2"></i>Fees Paid: {cls.feesPaid}</li>
                      </ul>
                    </div>
                    <div className="card-footer bg-transparent border-0">
                      <Button variant="secondary" className="w-100" disabled>Booked</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="cta-section text-center py-5 bg-success text-white">
        <h2>Ready to start dancing?</h2>
        <p className="lead">Join us for a free trial class today.</p>
        <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
          <Button href="/login" variant="light" className="fw-bold text-success">Get Started</Button>
          <Button href="/about" variant="outline-light">About Us</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CoursePage;
