import React from 'react';
import './About.css';
import { HandshakeIcon, StarIcon, EmailIcon, UsersIcon } from '../components/Icons';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="80">About Project Lovematch</h1>
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="160">
              Learn about our mission and how we serve our community
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title" data-aos="fade-up">Our Mission</h2>
            <p className="mission-text" data-aos="fade-up" data-aos-delay="80">
              Project Lovematch provides basic tennis instruction and activity focused on athletes (age 13+) with 
              intellectual and developmental disabilities, including Down Syndrome, Autism, and other 
              developmental conditions. The program engages local high school students as volunteers 
              who aspire to develop one-on-one relationships with athletes as resources permit, providing positive social 
              interactions and a rewarding experience for all involved. Our program has been operating for over 30 years, 
              with some of our athletes participating the entire time.
            </p>
          </div>

          <div className="mission-values">
              <div className="mission-value" data-aos="fade-up">
                <div className="value-icon"><UsersIcon size={40} /></div>
                <h3 className="value-title">Inclusion</h3>
                <p className="value-description">
                  Creating a welcoming environment where every athlete feels valued and supported, regardless of their abilities or challenges
                </p>
              </div>
              
              <div className="mission-value" data-aos="fade-up" data-aos-delay="100">
                <div className="value-icon"><HandshakeIcon size={40} /></div>
                <h3 className="value-title">Community</h3>
                <p className="value-description">
                  Building lasting relationships between volunteers, athletes, and families that extend beyond the tennis court
                </p>
              </div>
              
              <div className="mission-value" data-aos="fade-up" data-aos-delay="200">
                <div className="value-icon"><StarIcon size={40} /></div>
                <h3 className="value-title">Growth</h3>
                <p className="value-description">
                  Fostering personal development through sports, teamwork, and achievement, helping each participant reach their full potential
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content" data-aos="fade-up">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Have questions about our program? We'd love to hear from you.
            </p>
            
            <div className="contact-info-simple">
              <a href="mailto:projectlovematch@gmail.com" className="contact-email-link">
                <span className="contact-icon"><EmailIcon size={24} /></span>
                <span className="contact-email">projectlovematch@gmail.com</span>
              </a>
            </div>
            
            <div className="donation-info" data-aos="fade-up">
              <h3>Support Our Mission</h3>
              <p>
                Project Lovematch is a 501(c)(3) tax-exempt organization. If you would like to support our program, 
                you can make a tax-deductible donation or inquire about sponsorship opportunities by contacting us directly.
              </p>
              <div className="donation-address-box">
                <h4>Send Donations To:</h4>
                <p>
                  Project Lovematch<br />
                  PO Box 64<br />
                  Allendale, NJ 07401
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
