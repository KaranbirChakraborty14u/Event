import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ourMission.css";
import rightImage from "../../assets/homes1.png";
import vision from "../../assets/download.png";
import "./ourvision.css";
import About from "./About";
import Footer from "../../components/footer/Footer";

const OurMission = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
    <About />
      <div className="mission-container" data-aos="fade-up">
        {/* Left Side */}
        <div className="mission-left" data-aos="fade-right">
          <div className="mission-title">
            <div className="highlight-bar" />
            <h2>
              <span className="white-text">OUR MISSION</span>
            </h2>
          </div>
          <p className="mission-description">
            At Kollective, our mission is to revolutionize the way brands engage
            with their audiences by creating exceptional, immersive experiences
            that resonate on a personal level. We are dedicated to transforming
            creative ideas into impactful, memorable events that not only
            capture attention but also foster deep, emotional connections and
            lasting brand loyalty.
          </p>

          <ul className="mission-list">
            <li>
              <span className="mission-number">01.</span> Innovate & Inspire
            </li>
            <li>
              <span className="mission-number">02.</span> Deliver Excellence
            </li>
            <li>
              <span className="mission-number">03.</span> Foster Connections
            </li>
            <li>
              <span className="mission-number">04.</span> Tailor Solutions
            </li>
            <li>
              <span className="mission-number">05.</span> Empower Brands
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="mission-right" data-aos="fade-left">
          <img
            src={rightImage}
            alt="Office collage"
            className="mission-image"
          />
        </div>
      </div>
      <div className="vision-container">
        <div className="vision-image" data-aos="fade-right">
          <img src={vision} alt="Our Vision" />
        </div>

        <div className="vision-content" data-aos="fade-left">
          <h2 className="vision-title">
            <span className="line"></span>OUR VISION
          </h2>

          <div className="vision-cards">
            <div className="card yellow-card" data-aos="fade-up">
              <h2>01.</h2>
              <p>
                To be the global leader in experiential marketing, renowned for
                our innovative and transformative brand experiences that
                captivate audiences and inspire lasting connections.
              </p>
            </div>
            <div
              className="card black-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>02.</h3>
              <p>
                To continuously push the boundaries of creativity and strategic
                insight, setting new standards in the industry and helping
                brands forge meaningful, emotional connections with their
                consumers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurMission;
