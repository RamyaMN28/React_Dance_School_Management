import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 Dance School. All rights reserved.</p>
            <Button variant="link" onClick={() => setShowTerms(true)}>Terms & Conditions</Button> |{' '}
            <Button variant="link" onClick={() => setShowPrivacy(true)}>Privacy Policy</Button>
          </Col>
        </Row>
      </Container>
      <Modal show={showTerms} onHide={() => setShowTerms(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>1. Information Collection
    We collect personal information to provide our services.</p>
          <p>2. Cookies
          Our website uses cookies to enhance your experience.</p>
          <p>
    3. Data Sharing
    We do not share your personal data without consent, except as required by law.
</p>
          <p>
    4. User Rights
    You have the right to access, modify, or delete your personal data at any time.
</p>
          <p>    5. Security
    We employ security measures to protect your data, but cannot guarantee complete security.
  `;</p>
        </Modal.Body>
      </Modal>
      <Modal show={showPrivacy} onHide={() => setShowPrivacy(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Terms & Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>1. Acceptance of Terms
    By accessing or using our services, you agree to be bound by these Terms and Conditions.</p>
          <p>    2. Registration and Classes
            Students are expected to arrive on time for classes and adhere to proper attire.</p>
          <p>    3. Payment and Refunds
            Tuition is non-refundable except in cases of serious illness or injury.</p>
          <p>
    4. Make-up Classes and Cancellations
    Missed classes can be made up within the same term.</p>
          <p>    5. Photography and Videography
          DanceWave Academy reserves the right to use photographs and videos for promotional purposes.</p>
          <p>

6. Conduct and Liability
Participation in dance classes involves physical activity, and you acknowledge the risks involved.</p>
          <p>  7. Privacy Policy
            We will not share your personal information without your consent, except as required by law.</p>
          <p>8. Changes to Terms
          These terms may be modified at any time, and it is your responsibility to stay updated.</p>
        </Modal.Body>
      </Modal>
    </footer>
  );
}

export default Footer;
