import React from 'react';
import Footer from './Footer';
import PartnershipLogos from './PartnershipLogos';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import {FaAward, FaUsers, FaBuilding, FaClock } from 'react-icons/fa';

import wallpaper from '../assets/wall1.jpg';
import './Home.css';
import Navbar from './Navbar';  

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${wallpaper})` }}>
        <div className="hero-content text-center text-white py-5">
          <h1>DancingRush Academy</h1>
          <p>A step ahead everyday</p>
          <div className="hero-buttons mt-3">
            <Button href="/login" variant="success" className="me-2">Get Started</Button>
            <Button href="/about" variant="outline-light">About Us</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="advantages-section py-5">
  <Container>
    <div className="text-center mb-5">
      <h3 className="section-subtitle">Our Advantages</h3>
      <h2 className="section-title">Why Choose DancingRush Academy</h2>
      <p className="section-description">
        More than just a dance school, we're a community dedicated to helping you grow.
      </p>
      </div>

      <Row>
        {[
          {
            icon: <FaAward />,
            title: "Award-Winning Instructors",
            description: "Learn from professional dancers with years of performance and teaching experience."
          },
          {
            icon: <FaBuilding />,
            title: "State-of-the-Art Facilities",
            description: "Spacious studios with sprung floors, mirrors, sound systems and excellent lighting."
          },
          {
            icon: <FaUsers />,
            title: "Small Class Sizes",
            description: "Personalized attention in small groups to ensure proper technique and rapid improvement."
          },
          {
            icon: <FaClock />,
            title: "Flexible Scheduling",
            description: "Morning, evening, and weekend classes to fit any lifestyle or schedule."
          },
        ].map((item, idx) => (
          <Col md={6} className="mb-4" key={idx}>
            <Card className="advantage-card h-100">
              <Card.Body className="d-flex">
                <div className="icon-wrapper me-3">
                  {item.icon}
                </div>
                <div>
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  <Card.Text className="card-text">{item.description}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
  <Navbar></Navbar>

      {/* Partnerships */}
      <section className="text-center py-5" id="partners">
        <h2>Our Partnerships</h2>
        <PartnershipLogos />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
