import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";
import "./mice.css"; 
import { Link } from "react-router-dom";

// === NGO Images ===
import ngo1 from "../../assets/NGO_Associations/12th_EHNF_BFA/BALIPARA_EHNF_DAY/1.jpg";
import ngo2 from "../../assets/NGO_Associations/12th_EHNF_BFA/BALIPARA_EHNF_DAY/2.jpg";
import ngo3 from "../../assets/NGO_Associations/12th_EHNF_BFA/BALIPARA_EHNF_DAY/3.jpg";
import ngo4 from "../../assets/NGO_Associations/12th_EHNF_BFA/BALIPARA_EHNF_DAY/5.jpg";
import ngo5 from "../../assets/NGO_Associations/12th_EHNF_BFA/BALIPARA_EHNF_DAY/4.jpg";
import ngo6 from "../../assets/NGO_Associations/12th_EHNF_BFA/BALIPARA_EHNF_DAY/6.jpg";
import ngo7 from "../../assets/NGO_Associations/12th_EHNF_BFA/BALIPARA_EHNF_DAY/7.jpg";

import ngo8 from "../../assets/NGO_Associations/Apne_Apne_Ram/1.JPG";
import ngo9 from "../../assets/NGO_Associations/Apne_Apne_Ram/2.JPG";
import ngo10 from "../../assets/NGO_Associations/Apne_Apne_Ram/3.JPG";
import ngo11 from "../../assets/NGO_Associations/Apne_Apne_Ram/4.JPG";
import ngo12 from "../../assets/NGO_Associations/Apne_Apne_Ram/5.JPG";
import ngo13 from "../../assets/NGO_Associations/Apne_Apne_Ram/6.JPG";

// === NGO Projects Array ===
const ngoProjects = [
  { img: ngo1, title: "12th EHNF & BFA" },
  { img: ngo2 },
  { img: ngo3 },
  { img: ngo4 },
  { img: ngo5 },
  { img: ngo6 },
  { img: ngo7 },
  { img: ngo8, title: "Apne Apne Ram" },
  { img: ngo9 },
  { img: ngo10 },
  { img: ngo11 },
  { img: ngo12 },
  { img: ngo13 },
];

const NGO = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    window.scrollTo(0, 0); // Always start from top
  }, []);

  // Reusable pattern group (big + small images)
  const renderPatternGroup = (bigIndex, smallStart, smallEnd) => (
    <div className="ngo-section-pattern" key={`pattern-${bigIndex}`}>
      {/* Big Featured Image */}
      <div className="ngo-big" data-aos="fade-up">
        <img
          src={ngoProjects[bigIndex].img}
          alt={ngoProjects[bigIndex].title || "project"}
        />
        {ngoProjects[bigIndex].title && (
          <div className="ngo-overlay">
            <h2>{ngoProjects[bigIndex].title}</h2>
          </div>
        )}
      </div>

      {/* Smaller Grid Images */}
      <div className="ngo-small-grid">
        {ngoProjects.slice(smallStart, smallEnd + 1).map((proj, idx) => (
          <div
            className="ngo-small"
            data-aos="fade-up"
            key={`small-${bigIndex}-${idx}`}
          >
            <img src={proj.img} alt={proj.title || "project"} />
            {proj.title && (
              <div className="ngo-info">
                <h3>{proj.title}</h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <section className="ngo-events">
        <div className="ngo-header">
          <p className="ngo-breadcrumb">
            <Link to="/" className="breadcrumb-link">
              HOMEPAGE
            </Link>{" "}
            /{" "}
            <Link to="/portfolio" className="breadcrumb-link">
              PORTFOLIO
            </Link>{" "}
            / NGO ASSOCIATION
          </p>

          <h1>
            Together for <span>Change </span>
           Building <br /> Stronger Communities
          </h1>
          <p className="ngo-subline">
            We create
            lasting social impact.
          </p>
        </div>

        {/* Group 1: EHNF & BFA (1 big + 6 small) */}
        {renderPatternGroup(0, 1, 6)}

        {/* Group 2: Apne Apne Ram (1 big + 5 small) */}
        {renderPatternGroup(7, 8, 12)}

        {/* CTA Section */}
        <div className="ngo-cta">
          <h2>Join Us in Making a Difference</h2>
          <p>
            Partner with us to create meaningful impact in communities worldwide.
          </p>
          <a href="/contact" className="ngo-cta-button">
            Get Involved →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NGO;