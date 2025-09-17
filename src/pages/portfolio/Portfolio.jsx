import "./portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer.jsx";
import img1 from "../../assets/Sport_Event.jpg";
import img2 from "../../assets/Cooperate.jpg";
import img3 from "../../assets/NGO.jpg";
import img4 from "../../assets/LifeStyle.jpg";

// Portfolio Data
const portfolio = [
  {
    id: 1,
    title: "Corporate Events",
    description:
      "End-to-end corporate event planning, including conferences, product launches, and team-building experiences.",
    img: img2,
    link: "/corporateEvents",
  },
  {
    id: 2,
    title: "Sports Event",
    description:
      "Massive stage setups, crowd engagement, and technical coordination for grand experiences.",
    img: img1,
    link: "/sportsEvent", // Fixed typo if applicable
  },
  {
    id: 3,
    title: "NGO/Association",
    description:
      "Specialized services for Meetings, Incentives, Conferences, and Exhibitions with detailed planning.",
    img: img3,
    link: "/ngo",
  },
  {
    id: 5,
    title: "Lifestyle Events",
    description:
      "Luxury and style-driven events including fashion shows, art expos, and exclusive parties.",
    img: img4,
    link: "/lifestyle",
  },
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  // Split into pairs for row-wise layout
  const chunkedPortfolio = [];
  for (let i = 0; i < portfolio.length; i += 2) {
    chunkedPortfolio.push(portfolio.slice(i, i + 2));
  }

  return (
    <section>
      {/* Hero Section */}
      <div className="portfolio-hero">
        <p className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            HOMEPAGE
          </Link>{" "}
          / PORTFOLIO
        </p>
        <h1 className="hero-titles">
          Designing a <br />
          <span className="highli">Better</span> World Today
        </h1>
        <a href="#our-works" className="our-works-link">
          OUR WORKS <span className="down-arrow">↓</span>
        </a>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-container" id="our-works">
        {chunkedPortfolio.map((pair, rowIndex) => (
          <div className="portfolio-row" key={rowIndex}>
            {pair.map(({ id, img, title, link }, i) => {
              const isLeft = i === 0;
              const isEvenRow = rowIndex % 2 === 0;
              const sizeClass =
                (isEvenRow && isLeft) || (!isEvenRow && !isLeft)
                  ? "small"
                  : "big";

              return (
                <div
                  className={`portfolio-column ${sizeClass}`}
                  key={id}
                  data-aos="fade-up"
                >
                  <Link to={link}>
                    <img src={img} alt={`${title} Preview`} className="portfolio-img" />
                  </Link>
                  <div className="portfolio-text">
                    <h3>{title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="portfolio-cta">
        <div className="cta-content">
          <p className="cta-subtext">
            Looking to make your mark? We'll help you turn your project into a
            success story.
          </p>
          <h2>
            Ready to bring <strong>your</strong> ideas to <strong>life?</strong>
            <br />
            <span>We're</span> here to help
          </h2>
          <Link to="/contact" className="cta-button">
            Contact Us <span className="arrow">→</span>
          </Link>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Portfolio;