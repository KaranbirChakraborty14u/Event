import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";
import "./largeformateevent.css";
import { Link } from "react-router-dom";

// Imporargeformateeventstyle images
import corporateevent1 from "../../assets/Aarohan_iPro_Meet/1.JPEG";
import corporateevent2 from "../../assets/Aarohan_iPro_Meet/2.JPG";
import corporateevent3 from "../../assets/Aarohan_iPro_Meet/3.JPG";
import corporateevent4 from "../../assets/Aarohan_iPro_Meet/4.jpeg";
import corporateevent5 from "../../assets/Aarohan_iPro_Meet/5.JPG";

import corporateevent6 from "../../assets/Website/ARMY_CAMP_CHANGSARI/1.jpeg";
import corporateevent7 from "../../assets/Website/ARMY_CAMP_CHANGSARI/2.jpeg";
import corporateevent8 from "../../assets/Website/ARMY_CAMP_CHANGSARI/3.jpeg";
import corporateevent9 from "../../assets/Website/ARMY_CAMP_CHANGSARI/4.jpeg";

import corporateevent10 from "../../assets/Website/AT_LIVE_BRANDING/1.jpeg";

import corporateevent11 from "../../assets/Website/AUDI/1.jpg";
import corporateevent12 from "../../assets/Website/AUDI/2.jpg";
import corporateevent13 from "../../assets/Website/AUDI/3.jpg";
import corporateevent14 from "../../assets/Website/AUDI/4.jpg";
import corporateevent15 from "../../assets/Website/AUDI/5.jpg";

import corporateevent16 from "../../assets/DELL_Technologies/1.JPG";
import corporateevent17 from "../../assets/DELL_Technologies/2.JPG";
import corporateevent18 from "../../assets/DELL_Technologies/3.JPG";
import corporateevent19 from "../../assets/DELL_Technologies/4.JPG";

import corporateevent20 from "../../assets/Website/IPhone_16e_launch/1.jpeg";

import corporateevent21 from "../../assets/Website/Mayfair_Family_Day/1.jpeg";
import corporateevent22 from "../../assets/Website/Mayfair_Family_Day/2.jpeg";
import corporateevent23 from "../../assets/Website/Mayfair_Family_Day/3.jpeg";
import corporateevent24 from "../../assets/Website/Mayfair_Family_Day/4.jpeg";

import corporateevent25 from "../../assets/Website/Pulsar_Mania/1.jpeg";
import corporateevent26 from "../../assets/Website/Pulsar_Mania/2.jpeg";
import corporateevent27 from "../../assets/Website/Pulsar_Mania/3.jpeg";
import corporateevent28 from "../../assets/Website/Pulsar_Mania/4.jpeg";

import corporateevent29 from "../../assets/Website/RS_DURGA_PUJA_PANDAL/1.jpg";

import corporateevent30 from "../../assets/TERI_Golden_Jubilee/1.jpg";
import corporateevent31 from "../../assets/TERI_Golden_Jubilee/2.jpg";
import corporateevent32 from "../../assets/TERI_Golden_Jubilee/3.jpg";
import corporateevent33 from "../../assets/TERI_Golden_Jubilee/4.jpg";
import corporateevent34 from "../../assets/TERI_Golden_Jubilee/5.jpg";
import corporateevent35 from "../../assets/TERI_Golden_Jubilee/6.jpg";

import corporateevent36 from "../../assets/Toyota_Training_Programe/1.jpg";
import corporateevent37 from "../../assets/Toyota_Training_Programe/2.jpg";
import corporateevent38 from "../../assets/Toyota_Training_Programe/3.jpg";
import corporateevent39 from "../../assets/Toyota_Training_Programe/4.jpg";
import corporateevent40 from "../../assets/Toyota_Training_Programe/5.jpg";
import corporateevent41 from "../../assets/Toyota_Training_Programe/6.jpg";

const corporateevent = [
  { img: corporateevent1, title: "Aarohan 2024 - iPro Meet" },
  { img: corporateevent2 },
  { img: corporateevent3 },
  { img: corporateevent4 },
  { img: corporateevent5 },
  { img: corporateevent6, title: "ARMY CAMP CHANGSARI" },
  { img: corporateevent7 },
  { img: corporateevent8 },
  { img: corporateevent9 },
  { img: corporateevent10, title: "AT LIVE BRANDING" },
  { img: corporateevent11, title: "AUDI" },
  { img: corporateevent12 },
  { img: corporateevent13 },
  { img: corporateevent14 },
  { img: corporateevent15 },
  { img: corporateevent16, title: "DELL Technologies" },
  { img: corporateevent17 },
  { img: corporateevent18 },
  { img: corporateevent19 },
  { img: corporateevent20, title: "IPhone 16e launch" },
  { img: corporateevent21, title: "Mayfair Family Day" },
  { img: corporateevent22 },
  { img: corporateevent23 },
  { img: corporateevent24 },
  { img: corporateevent25, title: "Pulsar Mania" },
  { img: corporateevent26 },
  { img: corporateevent27 },
  { img: corporateevent28 },
  { img: corporateevent29, title: "RS DURGA PUJA PANDAL" },
  { img: corporateevent30, title: "TERI Golden Jubilee - Vivanta, Guwahati" },
  { img: corporateevent31 },
  { img: corporateevent32 },
  { img: corporateevent33 },
  { img: corporateevent34 },
  { img: corporateevent35 },
  { img: corporateevent36, title: "Toyota Training Programe" },
  { img: corporateevent37 },
  { img: corporateevent38 },
  { img: corporateevent39 },
  { img: corporateevent40 },
  { img: corporateevent41 },
];

const CorporateEvents = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    window.scrollTo(0, 0); // Always start from top
  }, []);

  // Helper to render one group: 1 big image + several small images
  const renderPatternGroup = (bigIndex, smallStart, smallEnd) => (
    <div className="lifestyle-section-pattern" key={`pattern-${bigIndex}`}>
      <div className="lifestyle-big" data-aos="fade-up">
        <img
          src={corporateevent[bigIndex].img}
          alt={corporateevent[bigIndex].title || "event"}
        />
        {corporateevent[bigIndex].title && (
          <div className="lifestyle-overlay">
            <h2>{corporateevent[bigIndex].title}</h2>
          </div>
        )}
      </div>

      <div className="lifestyle-small-grid">
        {corporateevent.slice(smallStart, smallEnd + 1).map((ev, idx) => (
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
            / CORPORATE EVENTS
          </p>
          <h1>
            Curated <span>Corporate Events Moments</span>
            <br /> That Inspire the Senses
          </h1>
          <p className="lifestyle-subline">
            Celebrating modern living with immersive, stylish gatherings.
          </p>
        </div>

        {/* Group 1: Aarohan 2024 - iPro Meet (0), small (1–4) */}
        {renderPatternGroup(0, 1, 4)}

        {/* Group 2: ARMY CAMP CHANGSARI (5), small (6–8) */}
        {renderPatternGroup(5, 6, 8)}

        {/* Group 3: AT LIVE BRANDING (9), small (10–14 → AUDI set) */}
        {renderPatternGroup(9)}

        {renderPatternGroup(10, 12, 14)}

        {/* Group 4: DELL Technologies (15), small (16–18) */}
        {renderPatternGroup(15, 16, 18)}

        {/* Group 5: IPhone 16e launch (19), small (20–23 → Mayfair Family Day) */}
        {renderPatternGroup(19, 20, 23)}

        {/* Group 6: Pulsar Mania (24), small (25–27) */}
        {renderPatternGroup(24, 25, 27)}

        {/* Group 7: RS DURGA PUJA PANDAL (28) - single image */}
        {renderPatternGroup(28, 28, 28)}

        {/* Group 8: TERI Golden Jubilee (29), small (30–34) */}
        {renderPatternGroup(29, 30, 34)}

        {/* Group 9: Toyota Training Programe (35), small (36–40) */}
        {renderPatternGroup(35, 36, 40)}

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

export default CorporateEvents;
