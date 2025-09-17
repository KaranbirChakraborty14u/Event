import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";
import "./largeformateevent.css";
import { Link } from "react-router-dom";

// Imporargeformateeventstyle image
import largeformateevent1 from "../../assets/Sports/BORDOLOI TROPHY/1.jpeg";
import largeformateevent2 from "../../assets/Sports/BORDOLOI TROPHY/2.jpg";
import largeformateevent3 from "../../assets/Sports/BORDOLOI TROPHY/3.jpg";
import largeformateevent4 from "../../assets/Sports/BORDOLOI TROPHY/4.jpg";
import largeformateevent5 from "../../assets/Sports/BORDOLOI TROPHY/5.jpg";
import largeformateevent6 from "../../assets/Sports/BORDOLOI TROPHY/6.jpg";
import largeformateevent7 from "../../assets/Sports/BORDOLOI TROPHY/7.jpg";
import largeformateevent8 from "../../assets/Sports/CLUB CRICKET CHAMPIONSHIP/1.jpg";
import largeformateevent9 from "../../assets/Sports/CLUB CRICKET CHAMPIONSHIP/2.jpeg";
import largeformateevent10 from "../../assets/Sports/CLUB CRICKET CHAMPIONSHIP/3.jpeg";
import largeformateevent11 from "../../assets/Sports/CLUB CRICKET CHAMPIONSHIP/4.jpeg";
import largeformateevent12 from "../../assets/Sports/GFPL/1.jpeg";
import largeformateevent13 from "../../assets/Sports/GFPL/2.jpeg";
import largeformateevent14 from "../../assets/Sports/GFPL/3.jpeg";
import largeformateevent15 from "../../assets/Sports/GFPL/4.jpeg";
import largeformateevent16 from "../../assets/Sports/GFPL/5.jpeg";
import largeformateevent17 from "../../assets/Sports/IPL Mayfair/1.jpg";
import largeformateevent18 from "../../assets/Sports/IPL Mayfair/2.jpg";
import largeformateevent19 from "../../assets/Sports/IPL Mayfair/3.jpg";
import largeformateevent20 from "../../assets/Sports/IPL Mayfair/4.jpg";
import largeformateevent21 from "../../assets/Sports/IPL Mayfair/5.jpg";
import largeformateevent22 from "../../assets/Sports/IPL STADIUM/1.jpg";
import largeformateevent23 from "../../assets/Sports/IPL STADIUM/2.jpg";
import largeformateevent24 from "../../assets/Sports/IPL STADIUM/3.jpg";
import largeformateevent25 from "../../assets/Sports/IPL STADIUM/4.jpg";
import largeformateevent26 from "../../assets/Sports/IPL STADIUM/5.jpg";
import largeformateevent27 from "../../assets/Sports/IPL STADIUM/6.jpg";
import largeformateevent28 from "../../assets/Sports/IPL STADIUM/7.jpg";
import largeformateevent29 from "../../assets/Sports/IPL STADIUM/8.jpg";

const largeformateevent = [
  { img: largeformateevent1, title: "BORDOLOI TROPHY" },
  { img: largeformateevent2 },
  { img: largeformateevent3 },
  { img: largeformateevent4 },
  { img: largeformateevent5 },
  { img: largeformateevent6 },
  { img: largeformateevent7 },
  { img: largeformateevent8, title: "CLUB CRICKET CHAMPIONSHIP" },
  { img: largeformateevent9 },
  { img: largeformateevent10 },
  { img: largeformateevent11 },
  { img: largeformateevent12, title: "GFPL" },
  { img: largeformateevent13 },
  { img: largeformateevent14 },
  { img: largeformateevent15 },
  { img: largeformateevent16 },
  { img: largeformateevent17, title: "IPL Mayfair" },
  { img: largeformateevent18 },
  { img: largeformateevent19 },
  { img: largeformateevent20 },
  { img: largeformateevent21 },
  { img: largeformateevent22, title: "IPL STADIUM" },
  { img: largeformateevent23 },
  { img: largeformateevent24 },
  { img: largeformateevent25 },
  { img: largeformateevent26 },
  { img: largeformateevent27 },
  { img: largeformateevent28 },
  { img: largeformateevent29 },
];

const SportsEvent = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    window.scrollTo(0, 0); // Always start from top
  }, []);

  // Helper to render one group: 1 big image + several small images
  const renderPatternGroup = (bigIndex, smallStart, smallEnd) => (
    <div className="lifestyle-section-pattern" key={`pattern-${bigIndex}`}>
      <div className="lifestyle-big" data-aos="fade-up">
        <img
          src={largeformateevent[bigIndex].img}
          alt={largeformateevent[bigIndex].title || "event"}
        />
        {largeformateevent[bigIndex].title && (
          <div className="lifestyle-overlay">
            <h2>{largeformateevent[bigIndex].title}</h2>
          </div>
        )}
      </div>

      <div className="lifestyle-small-grid">
        {largeformateevent.slice(smallStart, smallEnd + 1).map((ev, idx) => (
          <div
            className="lifestyle-small"
            data-aos="fade-up"
            key={`small-${bigIndex}-${idx}`}
          >
            <img src={ev.img} alt={ev.title || "event"} />
            {ev.title && (
              <div className="lifestyle-info">
                <h3>{ev.title}</h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <section className="lifestyle-events">
        <div className="lifestyle-header">
          <p className="lifestyle-breadcrumb">
            <Link to="/" className="breadcrumb-link">
              HOMEPAGE
            </Link>{" "}
            /{" "}
            <Link to="/portfolio" className="breadcrumb-link">
              PORTFOLIO
            </Link>{" "}
            / SPORTS EVENTS
          </p>
          <h1>
            Curated <span>Sports Moments</span>
            <br /> That Inspire the Senses
          </h1>
          <p className="lifestyle-subline">
            Celebrating modern living with immersive, stylish gatherings.
          </p>
        </div>

        {/* Group 1: big (0), small (1–6) */}
        {renderPatternGroup(0, 1, 6)}

        {/* Group 2: big (7), small (8–11) */}
        {renderPatternGroup(7, 8, 10)}

        {/* Group 3: big (12), small (13–16) */}
        {renderPatternGroup(11, 13, 15)}

        {/* Group 4: big (17), small (18–21) */}
        {renderPatternGroup(16, 18, 20)}

        {/* Group 5: big (22), small (23–26) */}
        {renderPatternGroup(21, 23, 26)}

        {/* CTA Section */}
        <div className="lifestyle-cta">
          <h2>Let’s Curate a Sports Journey</h2>
          <p>
            Sophisticated, soulful, and story-driven experiences await your
            audience.
          </p>
          <a href="/contact" className="lifestyle-cta-button">
            Collaborate With Us →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SportsEvent;
