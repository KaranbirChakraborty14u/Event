import { Link } from "react-router-dom";
import "./brands.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";

const BrandCommunication = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const services = [
    {
      title: "OUT OF HOME SOLUTIONS (OOH)",
      description: "High-impact outdoor advertising—from billboards to transit media—ensuring your brand captures attention in the real world.",
    },
    {
      title: "RADIO SPOTS & CAMPAIGNS",
      description: "Engaging radio campaigns crafted to communicate your message to a wide and diverse audience through compelling audio storytelling.",
    },
    {
      title: "DIGITAL ADS & ADVERTORIALS",
      description: "Performance-driven digital advertising strategies including display ads, video, and native content for online engagement.",
    },
    {
      title: "BRAND IDENTITY DEVELOPMENT",
      description: "Building strong brand identities through logos, visual guidelines, and consistent messaging across platforms.",
    },
    {
      title: "SOCIAL MEDIA CAMPAIGNS",
      description: "Creative and data-led social media campaigns designed to grow reach, engagement, and brand loyalty.",
    },
    {
      title: "PRINT & NATIVE ADVERTISING",
      description: "Targeted print media solutions including magazine spreads and native ads that blend storytelling with brand value.",
    },
    {
      title: "AMBIENT MEDIA & INSTALLATION",
      description: "Innovative brand installations and ambient media placements to surprise, delight, and leave a memorable impression.",
    },
  ];

  return (
    <section className="allbrands">
      {/* Hero Section */}
      <div className="portfolio-h" data-aos="fade-up">
        <p className="breadcr" data-aos="fade-up">
          <Link to="/" className="breadcrumb-l">HOMEPAGE</Link>
          &nbsp; / &nbsp;
          <Link to="/allservices" className="breadcrumb-l" data-aos="fade-up">SERVICES</Link>
          &nbsp; / &nbsp;
          <span className="breadcrumb-cur" data-aos="fade-up">BRAND COMMUNICATION</span>
        </p>

        <h1 className="hero-t" data-aos="fade-up">
          Brand <span className="light-w">Communication</span> <br />
          <span className="highlig">and</span> <span className="light-w">Advertising</span>
        </h1>

        <a href="#our-services" className="our-works-l" data-aos="fade-up">
          ABOUT SERVICE <span className="down-arr">↓</span>
        </a>
      </div>

      {/* Accordion Section */}
      <div className="accordion-wrapper" id="our-services" data-aos="fade-up">
        {services.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div className="accordion-header" onClick={() => toggleItem(index)}>
              <span className="accordion-title">{item.title}</span>
              <div className={`accordion-toggle ${openIndex === index ? "open" : ""}`}>
                {openIndex === index ? "−" : "+"}
              </div>
            </div>
            {openIndex === index && (
              <div className="accordion-body">
                <p>{item.description}</p>
              </div>
            )}
            <hr />
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="portfolio-cta" data-aos="fade-up">
        <div className="cta-content" data-aos="fade-up">
          <p className="cta-subtext" data-aos="fade-up">
            Want your brand to be heard, seen, and remembered? We craft communication that connects.
          </p>
          <h2>
            Let’s amplify your <strong>brand</strong> <br />
            <span>through smart</span> storytelling.
          </h2>
          <a href="/contact" className="cta-button">
            Contact Us <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default BrandCommunication;
