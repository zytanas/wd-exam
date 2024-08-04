import React from "react";
import "./AboutUs.css";
import User1 from '../Images/user.png';
import User2 from '../Images/user.png';
import User3 from '../Images/user.png';
import User4 from '../Images/user.png';
import Footer from '../Footer/Footer'

const AboutUs = () => {
  return (
    <section className="about-us-container">
      <div className="about-us-main">
        <div className="about-us-content">
          <h3>
            SportsTXT is an initiative from NMS Productions BV, a division of New Media Services, <br/>
            a global company specializing in delivering intelligent outsourcing services through <br/>
            a combination of machine learning and human-powered activities.
          </h3>
          <p>
            From fans to brands to individual content creators, NMSP designs and builds collaborative <br/>
            online platforms for our users to communicate, connect, learn, and share. 
          </p>
        </div>
      </div>

      <div className="key-content">
        <h2>Key People</h2>
      </div>

      <div className="user-content">
        <div className="user-grid">
          <div className="user-card">
            <img src={User1} alt="John Doe" />
            <h4>John Doe</h4>
            <p>Founder</p>
          </div>
          <div className="user-card">
            <img src={User2} alt="John Doe" />
            <h4>John Doe</h4>
            <p>COO</p>
          </div>
          <div className="user-card">
            <img src={User3} alt="John Doe" />
            <h4>John Doe</h4>
            <p>Head of Design</p>
          </div>
          <div className="user-card">
            <img src={User4} alt="John Doe" />
            <h4>John Doe</h4>
            <p>Project Manager</p>
          </div>
        </div>
      </div>

      <div className="get-content">
        <div className="get-about">
          <h2>Get In Touch</h2>
          <p> Build A Unified Community with SportsTXT</p>
          <button className="get-btn">Contact Us</button>
        </div>
      </div>

    <Footer />
    </section>
  );
};

export default AboutUs;
