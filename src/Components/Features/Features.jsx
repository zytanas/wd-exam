import React from "react";
import "./Features.css";
import Feature from "../Images/feature.png";
import Fans from "../Images/fans-oncouch.png";
import Video from "../Images/video.png";
import Podcast from "../Images/podcast.png";
import Photo from "../Images/photo.png";
import SMS from "../Images/sms.png";
import Poll from "../Images/poll.png";
import Footer from './../Footer/Footer'

const Features = () => {
  return (
    <section className="feature-container">
      <div className="feature-main">
        <div className="feature-content">
          <h2>Features</h2>
          <p>
            On SportsTXT, you’ll find a great mix of <br />
            features enabling sports clubs and athletes to connect <br />
            directly with their fans.
          </p>
        </div>
        <div className="feature-img">
          <img src={Feature} alt="" />
        </div>
      </div>

      <div className="fans-content">
        <div className="fans-img">
          <img src={Fans} alt="" />
        </div>
        <div className="fans-text">
          <h2>Fanzone</h2>
          <p>
            Empower your supporters in the Fanzone, a moderated platform for{" "}
            <br />
            interaction and involvement. Fans can create public and private{" "}
            <br />
            subgroups for sharing content and building a supportive community.{" "}
            <br />
            Enhance your organization's community engagement with the Fanzone.
          </p>
        </div>
      </div>

      <div className="video-content">
        <div className="video-text">
          <h2>Video</h2>
          <p>
            Make your members feel special by offering them workouts, <br />
            interviews, live matches, and even behind-the-scenes content. We{" "}
            <br />
            support a range of video platforms, so you can easily upload <br />
            videos from your phone.
          </p>
        </div>
        <div className="video-img">
          <img src={Video} alt="" />
        </div>
      </div>

      <div className="podcast-content">
        <div className="podcast-img">
          <img src={Podcast} alt="" />
        </div>
        <div className="podcast-text">
          <h2>Podcasts</h2>
          <p>
            Weekly updates, interviews, or tip of the week? Record a podcast{" "}
            <br />
            on your phone and share it with your community.
          </p>
        </div>
      </div>

      <div className="sms-content">
        <div className="sms-text">
          <h2>SMS</h2>
          <p>
            Want to get your fans instantly involved with the latest updates?{" "}
            <br />
            Send personalized SMS messages straight to your members' phones and{" "}
            <br />
            show them that you value their membership.
          </p>
        </div>
        <div className="sms-img">
          <img src={SMS} alt="" />
        </div>
      </div>

      <div className="photo-content">
        <div className="photo-img">
          <img src={Photo} alt="" />
        </div>
        <div className="photo-text">
          <h2>Photo</h2>
          <p>
            Publish photos from, games, training sessions or events. There’s{" "}
            <br />
            no limit to how much you choose to share. Make it more personal by{" "}
            <br />
            adding emojis, customizing colors and including text. It’s a great{" "}
            <br />
            way to document and share all the big moments.
          </p>
        </div>
      </div>

      <div className="poll-content">
        <div className="poll-text">
          <h2>Polls</h2>
          <p>
            Get real-time feedback from your fans. Ask questions and test their{" "}
            <br />
            knowledge with our online quizzes and voting features. 
          </p>
        </div>
        <div className="poll-img">
          <img src={Poll} alt="" />
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

export default Features;
