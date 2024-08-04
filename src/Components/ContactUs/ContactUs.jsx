import React from 'react';
import './ContactUs.css';
import Contact from '../Images/contact.png';
import NMSLogo from '../Images/nms-logo.png';
import Footer from '../Footer/Footer';

const ContactUs = () => {
  return (
    <section className="contact-container">
      <div className="contact-main">
        <h2>Contact Us</h2>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-img">
            <img src={Contact} alt='Contact' />
          </div>

          <div className="contact-text">
            <h4>Amsterdam Office</h4>
            <p>
              NMS PRODUCTION EUROPE B.V.Herengracht 257, <br />
              1016 BJ, Amsterdam The Netherlands
            </p>
          </div>

          <div className="nms-img">
            <img src={NMSLogo} alt='NMS Logo' />
            <p>NMS PRODUCTIONS EUROPE B.V</p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <input type="text" id="name" name="name" placeholder="Name" />
            <input type="email" id="email" name="email" placeholder="Email" />
            <input type="tel" id="phone" name="phone" placeholder="Phone" />
            <input type="text" id="industry" name="industry" placeholder="Industry" />
            <textarea id="message" name="message" placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ContactUs;
