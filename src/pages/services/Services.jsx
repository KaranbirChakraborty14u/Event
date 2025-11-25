import "./services.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import serviceImg from "../../assets/Image.jpeg";

const services = [
  {
    title: "CORPORATE EVENTS",
    description:
      "End-to-end execution of townhalls, launches, offsites, and employee engagement programs tailored to your company goals.",
    path: "/brands",
  },
  {
    title: "LARGE FORMAT EVENT",
    description:
      "High-impact expos, summits, and mass-scale productions that blend creativity with flawless logistics.",
    path: "/branded",
  },
  {
    title: "MICE",
    description:
      "Meetings, Incentives, Conferences, and Exhibitions—planned with precision and international standards.",
    path: "/website",
  },
  {
    title: "BRAND COMMUNICATION AND ADVERTISING",
    description:
      "Strategic campaigns and creative solutions that amplify your brand message across digital and traditional platforms.",
    path: "/max",
  },
  {
    title: "LIFESTYLE & LUXURY EVENTS",
    description:
      "Curated experiences for premium brands—fashion shows, art launches, private parties, and ultra-luxury affairs.",
    path: "/lifestyleevents",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      disable: false,
    });
  }, []);

  return (
    <div className="services-section">
      <div className="harshlahoty">
        <p className="sub-highlight">
          Professionals focused on helping your brand <br />
          <span className="highlight-right">grow and move forward.</span>
        </p>
        <div className="line-after"></div>
      </div>

      <div className="services-intro" data-aos="fade-up">
        <div className="intro-left">
          <img src={serviceImg} alt="Team" className="intro-image" />
          <h1 className="main-subheading">
            <span className="highlight" data-aos="fade-up">
              For Your
            </span>{" "}
            Business.
          </h1>
        </div>

        <div className="intro-right">
          <h1 className="main-heading">
            <span className="highlightsssss">Unique</span> Ideas
          </h1>

          <Link
            to="/allservices"
            className="team-read-moress"
            data-aos="fade-up"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="read-more-textss">WHAT WE DO</span>
            <span className="arrow-circless">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="arrow-iconss"
              >
                <path
                  d="M14 5.34c-.26 0-.52.1-.71.29l-.09.09c-.39.39-.39 1.03 0 1.42L17.07 11H4c-.55 0-1 .45-1 1s.45 1 1 1h13.07l-3.87 3.86c-.39.39-.39 1.03 0 1.42l.09.09c.39.39 1.03.39 1.42 0l5.66-5.66c.39-.39.39-1.03 0-1.42L14.71 5.63c-.2-.19-.45-.29-.71-.29z"
                  fill="#ff9800"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link
            to={service.path}
            key={index}
            className="service-card-link"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div
              className="service-card"
              data-aos={
                ["zoom-in-up", "flip-left", "slide-up", "fade-right"][index % 4]
              }
              data-aos-offset="100"
              data-aos-delay={index * 100}
            >
              <h2 className="service-title">{service.title}</h2>
              <div className="card-hover-details">
                <p>{service.description}</p>
              </div>

              <span className="arrow-circlessssss">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="arrow-iconssssss"
                >
                  <path
                    d="M14 5.34c-.26 0-.52.1-.71.29l-.09.09c-.39.39-.39 1.03 0 1.42L17.07 11H4c-.55 0-1 .45-1 1s.45 1 1 1h13.07l-3.87 3.86c-.39.39-.39 1.03 0 1.42l.09.09c.39.39 1.03.39 1.42 0l5.66-5.66c.39-.39.39-1.03 0-1.42L14.71 5.63c-.2-.19-.45-.29-.71-.29z"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* ======================================
          WHY CHOOSE US
      ======================================= */}
      <div className="why-choose-us" data-aos="fade-up">
  <h2 className="why-title">WHY CHOOSE US</h2>

  <div className="why-list">

    <div className="why-item">
      <p>
        <strong>Experience That Matters —</strong><br />
        With expertise across government, corporate, and public events, we understand
        the unique requirements of each sector.
      </p>
    </div>

    <div className="why-item">
      <p>
        <strong>End-to-End Capability —</strong><br />
        From concept to execution, we manage everything in-house—creative, production,
        technical, logistics, and operations.
      </p>
    </div>

    <div className="why-item">
      <p>
        <strong>Creative + Strategic Approach —</strong><br />
        Your event is designed with storytelling, audience psychology, brand messaging,
        and measurable outcomes in mind.
      </p>
    </div>

    <div className="why-item">
      <p>
        <strong>Uncompromised Quality —</strong><br />
        We deliver with precision, professionalism, and an eye for detail,
        no matter the scale.
      </p>
    </div>

    <div className="why-item">
      <p>
        <strong>Strong Regional Expertise —</strong><br />
        Deep understanding of Northeast India’s geography, culture, administrative systems,
        and event ecosystem.
      </p>
    </div>

  </div>
</div>


      {/* ======================================
          OUR PROCESS — THE 5 D’s
      ======================================= */}
      <div className="our-process" data-aos="fade-up">
        <h2 className="process-title">Our Process — The 5 D’s</h2>

        <div className="process-list">
          <div className="process-item">
            <h3>1. Discover</h3>
            <p>
              Understanding your objectives, audiences, timelines, and
              expectations.
            </p>
          </div>

          <div className="process-item">
            <h3>2. Design</h3>
            <p>
              Crafting creative concepts, event flow, branding, technical plans,
              and experience design.
            </p>
          </div>

          <div className="process-item">
            <h3>3. Develop</h3>
            <p>
              Vendor alignment, production, logistics mapping, and detailed
              pre-event planning.
            </p>
          </div>

          <div className="process-item">
            <h3>4. Deliver</h3>
            <p>
              On-ground execution with precision: operations, technicals,
              hospitality, coordination, safety & compliance.
            </p>
          </div>

          <div className="process-item">
            <h3>5. Debrief</h3>
            <p>
              Post-event reporting, audience insights, documentation, and
              delivery of all creative assets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
