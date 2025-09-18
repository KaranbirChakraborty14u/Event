import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";
import "./largeformateevent.css";
import { Link } from "react-router-dom";

import largeformateevent1 from "../../assets/Sports/BORDOLOI_TROPHY/1.jpeg";
import largeformateevent2 from "../../assets/Sports/BORDOLOI_TROPHY/2.jpg";
import largeformateevent3 from "../../assets/Sports/BORDOLOI_TROPHY/3.jpg";
import largeformateevent4 from "../../assets/Sports/BORDOLOI_TROPHY/4.jpg";
import largeformateevent5 from "../../assets/Sports/BORDOLOI_TROPHY/5.jpg";
import largeformateevent6 from "../../assets/Sports/BORDOLOI_TROPHY/6.jpg";
import largeformateevent7 from "../../assets/Sports/BORDOLOI_TROPHY/7.jpg";
import largeformateevent8 from "../../assets/Sports/CLUB_CRICKET_CHAMPIONSHIP/1.jpg";
import largeformateevent9 from "../../assets/Sports/CLUB_CRICKET_CHAMPIONSHIP/2.jpeg";
import largeformateevent10 from "../../assets/Sports/CLUB_CRICKET_CHAMPIONSHIP/3.jpeg";
import largeformateevent11 from "../../assets/Sports/CLUB_CRICKET_CHAMPIONSHIP/4.jpeg";
import largeformateevent12 from "../../assets/Sports/GFPL/1.jpeg";
import largeformateevent13 from "../../assets/Sports/GFPL/2.jpeg";
import largeformateevent14 from "../../assets/Sports/GFPL/3.jpeg";
import largeformateevent15 from "../../assets/Sports/GFPL/4.jpeg";
import largeformateevent16 from "../../assets/Sports/GFPL/5.jpeg";
import largeformateevent17 from "../../assets/Sports/IPL_Mayfair/1.jpg";
import largeformateevent18 from "../../assets/Sports/IPL_Mayfair/2.jpg";
import largeformateevent19 from "../../assets/Sports/IPL_Mayfair/3.jpg";
import largeformateevent20 from "../../assets/Sports/IPL_Mayfair/4.jpg";
import largeformateevent21 from "../../assets/Sports/IPL_Mayfair/5.jpg";
// import largeformateevent22 from "../../assets/Sports/ipl_stadium/1.jpg";
// import largeformateevent23 from "../../assets/Sports/ipl_stadium/2.jpg";
// import largeformateevent24 from "../../assets/Sports/ipl_stadium/3.jpg";
// import largeformateevent25 from "../../assets/Sports/ipl_stadium/4.jpg";
// import largeformateevent26 from "../../assets/Sports/ipl_stadium/5.jpg";
// import largeformateevent27 from "../../assets/Sports/ipl_stadium/6.jpg";
// import largeformateevent28 from "../../assets/Sports/ipl_stadium/7.jpg";
// import largeformateevent29 from "../../assets/Sports/ipl_stadium/8.jpg";

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
  // { img: largeformateevent22, title: "IPL STADIUM" },
  // { img: largeformateevent23 },
  // { img: largeformateevent24 },
  // { img: largeformateevent25 },
  // { img: largeformateevent26 },
  // { img: largeformateevent27 },
  // { img: largeformateevent28 },
  // { img: largeformateevent29 },
];

const SportsEvent = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    window.scrollTo(0, 0);
  }, []);

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
            <Link to="/" className="breadcrumb-link">HOMEPAGE</Link> /{" "}
            <Link to="/portfolio" className="breadcrumb-link">PORTFOLIO</Link> / SPORTS EVENTS
          </p>
          <h1>
            Curated <span>Sports Moments</span>
            <br /> That Inspire the Senses
          </h1>
          <p className="lifestyle-subline">
            Celebrating modern living with immersive, stylish gatherings.
          </p>
        </div>

        {renderPatternGroup(0, 1, 6)}
        {renderPatternGroup(7, 8, 10)}
        {renderPatternGroup(11, 13, 15)}
        {renderPatternGroup(16, 18, 20)}
        {/* {renderPatternGroup(21, 23, 26)} */}

        <div className="lifestyle-cta">
          <h2>Let’s Curate a Sports Journey</h2>
          <p>
            Sophisticated, soulful, and story-driven experiences await your audience.
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
