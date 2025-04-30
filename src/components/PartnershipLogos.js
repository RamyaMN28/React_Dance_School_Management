import React from 'react';
import './PartnershipLogos.css';

// Define logos with correct paths
const logos = [
  { src: require("../assets/microsoft_logo.png"), alt: 'Dance_partner' },
  { src: require("../assets/img1.jpg"), alt: 'Dance_partner' },
  { src: require("../assets/img2.jpg"), alt: 'Dance_partner' },
  { src: require("../assets/img3.jpg"), alt: 'Dance_partner' },
  { src: require("../assets/img4.jpg"), alt: 'Dance_partner' },
  { src: require("../assets/img5.png"), alt: 'Dance_partner' },
  { src: require("../assets/img6.jpeg"), alt: 'Dance_partner' },
  { src: require("../assets/img7.png"), alt: 'Dance_partner' },
  { src: require("../assets/img9.jpeg"), alt: 'Dance_partner' },
  { src: require("../assets/img8.jpg"), alt: 'Dance_partner' },
  { src: require("../assets/img10.jpeg"), alt: 'Dance_partner' },
];


function PartnershipLogos() {
  return (
    <div className="partners-section">
      <div className="logos">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo.src} alt={logo.alt} className="logo-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnershipLogos;
