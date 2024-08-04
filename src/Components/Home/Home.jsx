import React from "react";
import "./Home.css";
import Asset from "../Images/asset 1.jpg";
import Fans from "../Images/fans.jpg";
import FanGlove from "../Images/fan-glove.png";
import SecurityAmico from "../Images/Security-amico.png";
import Data from "../Images/Site Stats-rafiki.png";
import Value from "../Images/Appreciation-bro.png";
import GetInTouch from '../Images/get in touch.png'
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <img src={Asset} alt="" />
        <div className="header">
          <h2>
            Creating Value Off the Pitch <br /> with a Fan First Engagement{" "}
            <br /> Platform
          </h2>
        </div>

        <div className="cta-container">
          <div className="home-cta">
            <h2>Become a member</h2>
            <p>
              Find fellow fans of your favorite teams! Create an account now{" "}
              <br /> and join the millions of sports enthusiasts around the
              world!
            </p>
          </div>

          <button className="cta-btn">Join Now</button>
        </div>

        <div className="home-about">
          <img src={Fans} alt="Fans" />
          <div className="header-about">
            <h2>What is SportsTXT?</h2>
            <p>
              Being a sports fan is not just about watching games. SportsTXT{" "}
              <br />
              is an online platform designed to deliver the ultimate sports{" "}
              <br />
              fan experience. Engage with other fans, get insider facts about{" "}
              <br />
              your favorite teams, and so much more.
            </p>
          </div>
        </div>

        <div className="how-container">
          <div className="how-section">
            <h2>How It Works</h2>
            <p>
              SportsTXT is a fully customizable community platform that connects
              directly with members and fans in real-time giving them <br /> a
              true sense of belonging.
            </p>
            <p>
              <br />
              It provides sports clubs and teams with a unique opportunity to
              create more personalized experiences and open up new <br />{" "}
              revenue streams. You’ll be able to capture valuable data and
              tailor content to specific member segments.
            </p>
          </div>
        </div>

        <div className="platform-container">
          <h2>The Platform of Firsts</h2>
        </div>

        <div className="members-content">
          <div className="members-img">
            <img src={FanGlove} alt="Fan Glove" />
          </div>
          <div className="members-text">
            <h2>Members First</h2>
            <p>
              It's time to elevate your fan engagement beyond just using social
              <br />
              media and SportsTXT brings your members straight into the heart of{" "}
              <br />
              your club through exclusive stories, new experiences, games and{" "}
              <br />
              unique offers.
            </p>
          </div>
        </div>

        <div className="safety-content">
          <div className="safety-text">
            <h2>Safety First</h2>
            <p>
              SportsTXT offers 24/7 protection for sports clubs with real-time{" "}
              <br />
              monitoring and content analysis powered by a combination of human{" "}
              <br />
              expertise and AI technology. With SportsTXT, clubs can be <br />
              confident in the quality and safety of their reputation and all{" "}
              <br />
              user-generated content.
            </p>
          </div>
          <div className="safety-img">
            <img src={SecurityAmico} alt="Security" />
          </div>
        </div>

        <div className="data-content">
          <div className="data-img">
            <img src={Data} alt="" />
          </div>
          <div className="data-text">
            <h2>Data First</h2>
            <p>
              Contrary to social media, you have full ownership of your data.{" "}
              <br />
              Your personal dashboard collects and analyzes important insights{" "}
              <br />
              about members' usage of the platform, demographics and other data{" "}
              <br />
              to help you make better business decisions.
            </p>
          </div>
        </div>

        <div className="value-content">
          <div className="value-text">
            <h2>Value First</h2>
            <p>
              By making a few small tweaks in the way you present your content, <br />
              you will be amazed at how it can significantly boost your profits. <br />
              You have the opportunity to set your content prices based on your <br />
              own judgment and enhance its worth with the support of sponsors.
            </p>
          </div>
          <div className="value-img">
            <img src={Value} alt='' />
          </div>
        </div>

        <div className="get-content">
          <div className="get-about">
            <h2>Get In Touch</h2>
            <p> Build A Unified Community with SportsTXT</p>
            <button className="get-btn">Contact Us</button>
          </div>
        </div>

      </div>
      <Footer />
    </section>
  );
};

export default Home;
