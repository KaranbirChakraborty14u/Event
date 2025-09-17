import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";
import "./lifestyle.css";
import { Link } from "react-router-dom";

// Imported lifestyle images
import lifestyle1 from "../../assets/Weddings/Chirag + Surabhi/1.jpg";
import lifestyle2 from "../../assets/Weddings/Chirag + Surabhi/2.jpg";
import lifestyle3 from "../../assets/Weddings/Chirag + Surabhi/3.jpg";
import lifestyle4 from "../../assets/Weddings/Chirag + Surabhi/4.jpg";
import lifestyle5 from "../../assets/Weddings/Chirag + Surabhi/5.jpg";
import lifestyle6 from "../../assets/Weddings/Chirag + Surabhi/6.jpg";
import lifestyle7 from "../../assets/Weddings/Chirag + Surabhi/7.jpg";
import lifestyle8 from "../../assets/Weddings/Chirag + Surabhi/8.jpg";
import lifestyle9 from "../../assets/Weddings/Chirag + Surabhi/9.jpg";
import lifestyle10 from "../../assets/Weddings/Chirag + Surabhi/10.jpg";
import lifestyle11 from "../../assets/Weddings/Chirag + Surabhi/11.jpg";
import lifestyle12 from "../../assets/Weddings/Chirag + Surabhi/12.jpg";
import lifestyle13 from "../../assets/Weddings/Chirag + Surabhi/13.jpg";
import lifestyle14 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/1.jpg";
import lifestyle15 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/2.jpg";
import lifestyle16 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/3.jpg";
import lifestyle17 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/4.jpg";
import lifestyle18 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/5.jpg";
import lifestyle19 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/6.jpg";
import lifestyle20 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/7.jpg";
import lifestyle21 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/8.jpg";
import lifestyle22 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/9.jpg";
import lifestyle23 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/10.jpg";
import lifestyle24 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/11.jpg";
import lifestyle25 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/12.jpg";
import lifestyle26 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/13.jpg";
import lifestyle27 from "../../assets/Riya + Shubham (10th May 22)/1.JPG";
import lifestyle28 from "../../assets/Riya + Shubham (10th May 22)/2.JPG";
import lifestyle29 from "../../assets/Riya + Shubham (10th May 22)/3.JPG";
import lifestyle30 from "../../assets/Riya + Shubham (10th May 22)/4.JPG";
import lifestyle31 from "../../assets/Riya + Shubham (10th May 22)/5.JPG";
import lifestyle32 from "../../assets/Riya + Shubham (10th May 22)/6.JPG";
import lifestyle33 from "../../assets/Riya + Shubham (10th May 22)/7.JPG";
import lifestyle34 from "../../assets/Riya + Shubham (10th May 22)/8.jpg";
import lifestyle35 from "../../assets/Rohit Himanshi Wedding Decor/1.jpg";
import lifestyle36 from "../../assets/Rohit Himanshi Wedding Decor/2.jpg";
import lifestyle37 from "../../assets/Rohit Himanshi Wedding Decor/3.jpg";
import lifestyle38 from "../../assets/Rohit Himanshi Wedding Decor/4.jpg";
import lifestyle40 from "../../assets/Rohit Himanshi Wedding Decor/6.jpg";
import lifestyle41 from "../../assets/Weddings/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/1.jpg";
import lifestyle42 from "../../assets/Weddings/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/2.jpg";
import lifestyle43 from "../../assets/Weddings/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/3.jpg";
import lifestyle44 from "../../assets/Weddings/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/4.jpg";
import lifestyle45 from "../../assets/Weddings/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/5.jpg";
import lifestyle46 from "../../assets/Weddings/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/6.jpg";
import lifestyle47 from "../../assets/Weddings/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/7.jpg";
import lifestyle48 from "../../assets/Weddings/Taj Wedding/1.jpg";
import lifestyle49 from "../../assets/Weddings/Taj Wedding/2.jpg";
import lifestyle50 from "../../assets/Weddings/Taj Wedding/3.jpg";
import lifestyle51 from "../../assets/Weddings/Taj Wedding/4.jpg";
import lifestyle52 from "../../assets/Weddings/Taj Wedding/5.jpg";
import lifestyle53 from "../../assets/Weddings/Taj Wedding/6.jpg";

const lifestyleEvents = [
  { img: lifestyle1, title: "Chirag + Surabhi" },
  { img: lifestyle2 },
  { img: lifestyle3 },
  { img: lifestyle4 },
  { img: lifestyle5 },
  { img: lifestyle6 },
  { img: lifestyle7 },
  { img: lifestyle8 },
  { img: lifestyle9 },
  { img: lifestyle10 },
  { img: lifestyle11 },
  { img: lifestyle12 },
  { img: lifestyle13 },
  { img: lifestyle14, title: "Prianca + Punit (26th Nov 22)" },
  { img: lifestyle15 },
  { img: lifestyle16 },
  { img: lifestyle17 },
  { img: lifestyle18 },
  { img: lifestyle19 },
  { img: lifestyle20 },
  { img: lifestyle21 },
  { img: lifestyle22 },
  { img: lifestyle23 },
  { img: lifestyle24 },
  { img: lifestyle25 },
  { img: lifestyle26 },
  { img: lifestyle27, title: "Riya + Shubham (10th May 22)" },
  { img: lifestyle28 },
  { img: lifestyle29 },
  { img: lifestyle30 },
  { img: lifestyle31 },
  { img: lifestyle32 },
  { img: lifestyle33 },
  { img: lifestyle34 },
  { img: lifestyle35, title: "Rohit Himanshi Wedding Decor" },
  { img: lifestyle36 },
  { img: lifestyle37 },
  { img: lifestyle38 },
  // { img: lifestyle39 },
  { img: lifestyle40 },
  {
    img: lifestyle41,
    title: "Sandeep _ Binita (18th December 2022) - Guwahati, Assam",
  },
  { img: lifestyle42 },
  { img: lifestyle43 },
  { img: lifestyle44 },
  { img: lifestyle45 },
  { img: lifestyle46 },
  { img: lifestyle47 },
  { img: lifestyle48, title: "Taj Wedding" },
  { img: lifestyle49 },
  { img: lifestyle50 },
  { img: lifestyle51 },
  { img: lifestyle52 },
  { img: lifestyle53 },
];

const Lifestyle = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    window.scrollTo(0, 0); // Always start from top
  }, []);

  // Helper to render one group: 1 big image + several small images
  const renderPatternGroup = (bigIndex, smallStart, smallEnd) => (
    <div className="lifestyle-section-pattern" key={`pattern-${bigIndex}`}>
      <div className="lifestyle-big" data-aos="fade-up">
        <img
          src={lifestyleEvents[bigIndex].img}
          alt={lifestyleEvents[bigIndex].title || "event"}
        />
        {lifestyleEvents[bigIndex].title && (
          <div className="lifestyle-overlay">
            <h2>{lifestyleEvents[bigIndex].title}</h2>
          </div>
        )}
      </div>

      <div className="lifestyle-small-grid">
        {lifestyleEvents.slice(smallStart, smallEnd + 1).map((ev, idx) => (
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
            / LIFESTYLE EVENTS
          </p>
          <h1>
            Curated <span>Lifestyle Moments</span>
            <br /> That Inspire the Senses
          </h1>
          <p className="lifestyle-subline">
            Celebrating modern living with immersive, stylish gatherings.
          </p>
        </div>

        {/* Group 1: 1 big (0), 12 small (1–12) */}
        {renderPatternGroup(0, 1, 12)}

        {/* Group 2: 1 big (13), 12 small (14–26) */}
        {renderPatternGroup(13, 14, 25)}

        {/* Group 3: 1 big (27), 7 small (28–34) */}
        {renderPatternGroup(26, 28, 33)}

        {/* Group 4: 1 big (35), 5 small (36–40) */}
        {renderPatternGroup(34, 36, 38)}

        {/* Group 5: 1 big (41), 6 small (42–47) */}
        {renderPatternGroup(39, 42, 45)}

        {/* Group 6: 1 big (48), 5 small (49–53) */}
        {renderPatternGroup(46, 49, 53)}

        {/* CTA Section */}
        <div className="lifestyle-cta">
          <h2>Let’s Curate a Lifestyle Journey</h2>
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

export default Lifestyle;
