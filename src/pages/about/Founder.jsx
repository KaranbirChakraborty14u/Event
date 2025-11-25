import React, { useEffect } from "react";
import "./founder.css";
import founderImg from "../../assets/founder.png";
import founderImg2 from "../../assets/Darshan Jain_Buisness and finance head.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Founder = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <div className="founder-wrapper">

      {/* -------- SECTION 1 (TEXT LEFT - IMAGE RIGHT) -------- */}
      <div className="founder-section">
        <div className="founder-left" data-aos="fade-right">
          <h2>
            <span className="highlightssss">I</span>SHAN JAIN
          </h2>
          <h4 className="role">FOUNDER & CEO</h4>

          <p className="bioss" data-aos="fade-up" data-aos-delay="200">
            Born and brought up in Guwahati, Ishan began his career in 2017, driven by 
            a deep passion for the event and experiential industry. A graduate of Royal 
            Global University with a degree in Commerce, he blends academic insight with 
            real-world expertise in strategic marketing, event management, and 
            creative direction.
          </p>

          <p className="bioss" data-aos="fade-up" data-aos-delay="400">
            Before founding Kollective Xperiential Private Limited, Ishan worked with 
            leading marketing agencies, where he played pivotal roles in crafting and 
            executing high-impact campaigns for renowned national and global brands. 
            His experience across diverse event formats, combined with his creative 
            problem-solving and people-first approach, forms the foundation of 
            Kollective’s vision—delivering innovative, meaningful, and meticulously 
            executed experiences.
          </p>
        </div>

        <div className="founder-right" data-aos="fade-left">
          <img src={founderImg} alt="Ishan Jain - Founder & CEO" />
        </div>
      </div>

      {/* -------- SECTION 2 (IMAGE LEFT - TEXT RIGHT) -------- */}
      <div className="founder-section reverse">
        <div className="founder-right" data-aos="fade-right">
          <img src={founderImg2} alt="Darshan Jain - Co-Founder & CFO" />
        </div>

        <div className="founder-left" data-aos="fade-left">
          <h2>
            <span className="highlightssss">D</span>ARSHAN JAIN
          </h2>
          <h4 className="role">CO-FOUNDER & CFO</h4>

          <p className="bioss" data-aos="fade-up" data-aos-delay="200">
            Darshan brings a unique fusion of financial expertise, design sensibility, 
            and artistic vision to Kollective. With a strong background in the 
            distribution business, he developed a deep understanding of operations, 
            market dynamics, and business management early in his career. Since 2018, 
            he has been actively involved in building and scaling ventures with a sharp 
            focus on strategic planning and sustainable growth.
          </p>

          <p className="bioss" data-aos="fade-up" data-aos-delay="400">
            His transition into the events and experiential industry in 2022 added a new 
            creative dimension to his profile. Darshan now plays a pivotal role in 
            conceptualising and executing high-impact event designs, artistic 
            installations, and immersive environments. His ability to balance 
            creativity with financial clarity enables Kollective to deliver 
            aesthetically powerful yet structurally sound experiences for clients 
            across sectors.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Founder;
