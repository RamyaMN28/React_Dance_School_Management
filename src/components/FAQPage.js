import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { BsEnvelope, BsTelephone, BsCalendar } from 'react-icons/bs';

import Footer from './Footer';
import Navbar from './Navbar';  
import './FAQPage.css';
import faq1 from '../assets/faq_bg.webp';


const FAQPage = () => {
  const faqs = [
    { question: "What styles of dance do you teach?", answer: "We offer ballet, hip-hop, jazz, contemporary, and more." },
    { question: "Do I need prior experience?", answer: "No prior experience needed! We welcome all levels." },
    { question: "What ages can join classes?", answer: "We have classes for children, teens, and adults." },
    { question: "How do I book a trial class?", answer: "Click on 'Book a Free Trial Class' button or contact us directly." },
    { question: "Are the classes online or in-person?", answer: "We offer both options depending on availability." },
    { question: "What should I wear to class?", answer: "Comfortable dance attire and appropriate footwear." },
    { question: "Can I switch class timings?", answer: "Yes, based on availability and instructor approval." },
    { question: "Do you offer private lessons?", answer: "Yes, we offer private sessions by appointment." },
    { question: "Is there a registration fee?", answer: "No registration fee is required for trial classes." },
    { question: "How do I contact customer support?", answer: "Email us at info@dancewave.com or call (555) 123-4567." }
  ];

  return (
    <>
    <Navbar></Navbar>
      {/* Hero Section */}
      <div
            className="hero-section text-center text-white d-flex align-items-center"
            style={{
            backgroundImage: `url(${faq1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px'
            }}
            >
            <Container>
            <h2 className="fw-bold">Frequently Asked Questions</h2>
            <h4 className="mt-2">Everything you need to know before getting started</h4>
            </Container>
        </div>


      {/* FAQ Intro */}
      <Container className="my-5 text-center">
        <h3 className="fw-bold">Have Questions? We Have Answers</h3>
        <p className="text-muted">Browse through our most commonly asked questions below</p>
      </Container>

      {/* Accordion Section */}
      <Container className="mb-5">
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>

      {/* Still Have Questions Section */}
      <div className="contact-section py-5 bg-light border-top">
        <Container>
          <h3 className="text-center fw-bold text-success mb-4">Still Have Questions?</h3>
          <p className="text-center text-muted mb-5">We're here to help! Contact us directly for personalized assistance.</p>
          <Row className="g-4 text-center">
            <Col md={4}>
              <div className="contact-card">
                <div className="icon-box">
                <BsEnvelope size={24} />
                </div>

                <h5 className="fw-bold mt-3">Email Us</h5>
                <p className="text-muted">Send us an email and we'll respond within 24 hours.</p>
                <p className="text-success fw-semibold">info@danceruch.com</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-card">
                <div className="icon-box">
                  <BsTelephone size={24} />
                </div>
                <h5 className="fw-bold mt-3">Call Us</h5>
                <p className="text-muted">Speak directly with our front desk staff.</p>
                <p className="text-success fw-semibold">91+ 9876543210</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-card">
                <div className="icon-box">
                  <BsCalendar size={24} />
                </div>
                <h5 className="fw-bold mt-3">Visit Us</h5>
                <p className="text-muted">Stop by during our office hours for in-person assistance.</p>
                <p className="text-success fw-semibold">Mon–Fri: 9am–8pm & Sat: 9am–3pm</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </>
  );
};

export default FAQPage;
