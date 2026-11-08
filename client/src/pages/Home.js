import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroImg from '../assets/hero-court.jpg';
import img1 from '../assets/IMG_9252.JPG';
import img2 from '../assets/IMG_9257.JPG';
import img3 from '../assets/IMG_9301.JPG';
import img4 from '../assets/IMG_9304.JPG';
import {
  ClockIcon,
  TrophyIcon,
  MapPinIcon,
  CalendarIcon,
  EmailIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../components/Icons';

const testimonials = [
  {
    quote:
      'Our family has volunteered with Project Lovematch for several years.  It is a rewarding experience to get to know the Athletes and watch their tennis skills develop.  You definitely do not need to be an expert in tennis to volunteer.',
    author: 'Bill Thomas'
  },
  {
    quote:
      'I really enjoy project lovematch program cause it helped me with my tennis skills! I also enjoy the volunteers they were very helpful with giving advice on what to do the basics skills!',
    author: 'Kelly Bloomer'
  },
  {
    quote:
      'A few years ago my son walked into Project Lovematch not knowing a thing about tennis. Today he is a competitive athlete with a consistently accurate serve and a love for the game.  We owe much of that to the dedicated coaches and volunteers at PLM who create a positive and fun experience. We highly recommend this program!!',
    author: 'Barb Jones'
  },
  {
    quote:
      'Project Lovematch has been an amazing program for Ursula for many years. The Coaches and Volunteers are patient and encouraging. We have seen great growth in her skills and confidence. It was the start for her love for Tennis. We are so grateful for this well organized program and the joy it brings to the participants.',
    author: ''
  },
  {
    quote:
      'I have been volunteering at PLM for several years now. This experience has taught me the importance of acceptance and inclusion. The athletes have taught me so much. Volunteering at PLM has made me a more patient, caring, and empathetic person.',
    author: 'Noah C'
  }
];

const stats = [
  { value: '30+', label: 'Years running' },
  { value: '10', label: 'Sunday sessions' },
  { value: '1:1', label: 'Volunteer-to-athlete goal' },
  { value: '13+', label: 'Athlete ages' },
];

const highlights = [
  { img: img1, alt: 'Tennis program activity', title: 'Building Connections', text: 'Volunteers and athletes working together to build lasting friendships through tennis' },
  { img: img2, alt: 'Group tennis session', title: 'Team Spirit', text: 'Group activities that foster teamwork and inclusive participation for everyone' },
  { img: img3, alt: 'Tennis skill development', title: 'Skill Development', text: 'Personalized coaching helps athletes develop confidence and tennis fundamentals' },
  { img: img4, alt: 'Celebrating achievements', title: 'Celebrating Success', text: 'Every achievement is celebrated together as a supportive community' },
];

const QuoteMark = () => (
  <svg className="testimonial-mark" width="40" height="32" viewBox="0 0 40 32" aria-hidden="true">
    <path
      fill="currentColor"
      d="M0 32V19.2C0 8.6 5.6 2.2 16.8 0l1.6 4.4C12.6 6 9.6 9.4 9.2 14.4H17V32H0Zm22.6 0V19.2C22.6 8.6 28.2 2.2 39.4 0L41 4.4c-5.8 1.6-8.8 5-9.2 10H39.6V32H22.6Z"
    />
  </svg>
);

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialTimerResetKey, setTestimonialTimerResetKey] = useState(0);

  const resetTestimonialTimer = () => {
    setTestimonialTimerResetKey((current) => current + 1);
  };

  const selectTestimonial = (index) => {
    setActiveTestimonial(index);
    resetTestimonialTimer();
  };

  const showPreviousTestimonial = () => {
    setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length);
    resetTestimonialTimer();
  };

  const showNextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
    resetTestimonialTimer();
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 7000);

    return () => clearTimeout(timeoutId);
  }, [activeTestimonial, testimonialTimerResetKey]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ '--hero-image': `url(${heroImg})` }}>
        <div className="hero-content">
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
            Project <span className="highlight">Lovematch</span>
          </h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            Where tennis meets compassion, creating opportunities for every athlete to shine
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScE1W0pijbXJkpvf9As8mimb0yn2c_AaJvuk0o52AqooApgIg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Athlete Sign Up
            </a>
            <a
              href="https://forms.gle/g9Cgfbo2Mixnjy8n9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero-btn"
            >
              Volunteer Sign Up
            </a>
            <Link to="/about" className="btn hero-btn-ghost">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="container">
        <div className="stats-strip" data-aos="fade-up" data-aos-offset="0">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title" data-aos="fade-up">Empowering Through Tennis</h2>
            <p className="about-description" data-aos="fade-up" data-aos-delay="50">
              Project Lovematch is an annual program which provides basic tennis instruction and activity focused on
              athletes (age 13+) with intellectual and developmental disabilities, including Down Syndrome, Autism,
              and other developmental conditions. For over 30 years, the program has engaged local high school
              students as volunteers who aspire to develop one-on-one relationships with athletes as resources permit, providing positive
              social interactions and a rewarding experience for all involved.
            </p>
            <p className="about-description" data-aos="fade-up" data-aos-delay="100">
              The Program is offered at the Franklin Lakes Racquet Club on ten Sundays from January through March from 4:00 to 5:00 PM.
            </p>
          </div>
          <div className="about-features">
            <div className="feature" data-aos="fade-up">
              <div className="feature-icon"><CalendarDaysIcon size={32} /></div>
              <h3>Weekly Sessions</h3>
              <p>Every week from January to March</p>
            </div>
            <div className="feature" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon"><ClockIcon size={32} /></div>
              <h3>4:00 – 5:00 PM</h3>
              <p>Every Sunday afternoon</p>
            </div>
            <div className="feature" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon"><TrophyIcon size={32} /></div>
              <h3>10 Week Program</h3>
              <p>Comprehensive tennis experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="photos-section">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <h2 className="section-title">Program Highlights</h2>
            <p className="section-subtitle">
              See the impact of our program through the eyes of our volunteers and athletes
            </p>
          </div>

          <div className="photos-grid">
            {highlights.map((item, index) => (
              <figure
                className="photo-card"
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 120}
              >
                <div className="photo-container">
                  <img src={item.img} alt={item.alt} className="photo-image" loading="lazy" />
                </div>
                <figcaption className="photo-caption">
                  <h3 className="photo-title">{item.title}</h3>
                  <p className="photo-description">{item.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <h2 className="section-title">What Families And Volunteers Say</h2>
            <p className="section-subtitle">
              Stories from our community that reflect the impact of Project Lovematch
            </p>
          </div>

          <div className="testimonial-carousel" data-aos="fade-up" data-aos-delay="100">
            <button
              type="button"
              className="testimonial-arrow"
              onClick={showPreviousTestimonial}
              aria-label="Show previous testimonial"
            >
              <ChevronLeftIcon size={20} />
            </button>

            <div key={activeTestimonial} className="testimonial-card testimonial-slide" aria-live="polite">
              <QuoteMark />
              <p className="testimonial-quote">{testimonials[activeTestimonial].quote}</p>
              {testimonials[activeTestimonial].author && (
                <p className="testimonial-author">{testimonials[activeTestimonial].author}</p>
              )}
            </div>

            <button
              type="button"
              className="testimonial-arrow"
              onClick={showNextTestimonial}
              aria-label="Show next testimonial"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>

          <div className="testimonial-dots" role="tablist" aria-label="Testimonials">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author + index}
                className={`testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => selectTestimonial(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-selected={index === activeTestimonial}
                role="tab"
                type="button"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title" data-aos="fade-up" data-aos-delay="50">Ready to Make a Difference?</h2>
            <p className="cta-description" data-aos="fade-up" data-aos-delay="100">
              Join our community of volunteers and help create unforgettable experiences
              for our amazing athletes. Every session counts, every smile matters.
            </p>
            <div className="cta-buttons" data-aos="fade-up" data-aos-delay="150">
              <a
                href="https://forms.gle/g9Cgfbo2Mixnjy8n9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-large"
              >
                Volunteer Today
              </a>
              <Link to="/calendar" className="btn btn-secondary btn-large">
                View Schedule
              </Link>
            </div>
            <div className="cta-info">
              <div className="info-item" data-aos="fade-up" data-aos-delay="0">
                <span className="info-icon"><MapPinIcon size={22} /></span>
                <span>Franklin Lakes Racquet Club</span>
              </div>
              <div className="info-item" data-aos="fade-up" data-aos-delay="100">
                <span className="info-icon"><CalendarIcon size={22} /></span>
                <span>January – March</span>
              </div>
              <div className="info-item" data-aos="fade-up" data-aos-delay="200">
                <span className="info-icon"><ClockIcon size={22} /></span>
                <span>Sundays, 4:00 – 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="donation-section">
        <div className="container">
          <div className="donation-content" data-aos="fade-up">
            <h2 className="section-title">Support Our Mission</h2>
            <p className="donation-description">
              If you would like to help, you can sign up to volunteer or make a tax-deductible donation.
              PLM is a 501(c)(3) tax-exempt organization and any amount is welcome! Sponsorships are also
              available upon request.
            </p>
            <div className="donation-info-box">
              <h4>Send Donations To</h4>
              <p className="donation-address">
                Project Lovematch<br />
                PO Box 64<br />
                Allendale, NJ 07401
              </p>
            </div>
          </div>

          <div className="sponsors-section" data-aos="fade-up">
            <h3 className="sponsors-title">Our Sponsors</h3>
            <div className="sponsors-list">
              <div className="sponsor-item">USTA - Eastern Region</div>
              <div className="sponsor-item">The Haar Family Foundation</div>
              <div className="sponsor-item">Franklin Lakes Racquet Club</div>
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
                <span className="contact-icon"><EmailIcon size={22} /></span>
                <span className="contact-email">projectlovematch@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
