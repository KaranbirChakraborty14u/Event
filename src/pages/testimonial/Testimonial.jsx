import { useState, useEffect } from "react";
import "./testimonial.css";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Raj & Priyal",
    company: "Naming Ceremony",
    text: "Our baby's naming ceremony was an incredibly special and meaningful occasion, and we couldn't have asked for a better event planner than Ishaan & his team. From the very beginning, they understood the significance of this milestone for our family and put their heart and soul into creating a beautiful and memorable ceremony.",
  },
  {
    name: "Surabhi & Chirag",
    company: "Wedding",
    text: "The team at Kollective is simply outstanding. They took the time to understand our vision, and their creativity and attention to detail made our wedding truly magical. From the stunning decor to the seamless coordination, everything was executed flawlessly. They truly went above and beyond to make our day perfect, and we couldn't have asked for a better team by our side. We highly recommend them to anyone who wants their wedding dreams to come true.",
  },
  {
    name: "Kangkana & Rahul",
    company: "Wedding",
    text: "Working with this Ishaan and his team was an absolute pleasure. Their passion for what they do is evident in every interaction. They went above and beyond to understand our unique vision and execute it flawlessly. Their creativity and attention to detail created a wedding that truly reflected our personalities. The entire team was professional, responsive, and a joy to work with. This was the best we could for our brother's wedding and we wholeheartedly recommend them to anyone seeking a truly exceptional wedding.",
  },
  {
    name: "Diksha & Rounak",
    company: "Wedding",
    text: "Choosing the Kollective Group was the best decision we made for our big day. They listened to our ideas, offered valuable suggestions, and handled every little detail with care. Their organizational skills and calm demeanor put us at ease throughout the entire planning process. On the wedding day, everything ran like clockwork, allowing us to relax and fully enjoy every moment. We highly recommend their services to any couple looking for a stress-free and unforgettable wedding experience.",
  },
  {
    name: "Ronak Baid",
    company: "Engagement",
    text: "A huge thank you to Ishaan and his incredible team for managing our engagement event so seamlessly! Everything was absolutely perfect and stress-free from start to finish. Truly appreciate all the hard work and attention to detail!.",
  },
  {
    name: "Ayushi Kothari",
    company: "Wedding",
    text: "A big thank you to Ishaan and his amazing team for managing our event so beautifully! Everything was flawlessly organized, and the attention to every little detail truly stood out. We’re so grateful for all the effort that went into making the day such a success!.",
  },
  {
    name: "Apurva & Vishal",
    company: "Wedding",
    text: "Our wedding day was an absolute dream come true, and we have our incredible wedding planner to thank for that. From the moment we met Ishaan and his team, they understood our vision and turned it into a reality. Their attention to detail, creativity, and professionalism were outstanding. Our guests still can't stop talking about how magical and flawlessly executed every aspect of our wedding was. We are forever grateful for their dedication and expertise.",
  },
  {
    name: "Gaurav Jain",
    company: "Managing Director, G E Tradecom Pvt. Ltd. (Apple Authorised Distributor)",
    text: "Kollective Events & Xperiences always understand what we want and deliver it perfectly. Their planning, creativity, and execution make every event smooth and successful. We truly value our partnership with them."
  },
  {
    name: "K.C. Jindal",
    company: "Director, G E Tradecom Pvt. Ltd. (Apple Authorised Distributor)",
    text: "Working with Kollective is always hassle-free. The team is dependable, professional, and ensures everything is well taken care of. They make events stress-free for us."
  }
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const prev = () => {
    if (activeIndex > 0) {
      setAnimationDirection("slide-left");
      setActiveIndex((prev) => prev - 1);
    }
  };

  const next = () => {
    if (activeIndex < testimonials.length - 1) {
      setAnimationDirection("slide-right");
      setActiveIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const content = document.querySelector(".testimonial-content");
    if (content && animationDirection) {
      content.classList.remove("slide-left", "slide-right");
      void content.offsetWidth; // Trigger reflow
      content.classList.add(animationDirection);
    }
  }, [activeIndex, animationDirection]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="zigzag-testimonial">
      <h2 data-aos="fade-up">
        <span className="bold">Customer</span>{" "}
        <span className="light">Voices:</span>
        <br />
        <strong>
          <span className="bold">Hear What</span>{" "}
          <span className="light">They Say!</span>
        </strong>
      </h2>

      <div className="testimonial-box" data-aos="fade-up" data-aos-delay="400">
        <button
          className={`nav-arrow left ${activeIndex === 0 ? "disabled" : ""}`}
          onClick={prev}
          disabled={activeIndex === 0}
        >
          ←
        </button>

        <div
          className="testimonial-content"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="quote-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40"
              height="40"
              style={{
                transform: "translate(0px, 0px)",
                opacity: 1,
                fill: "orange",
              }}
            >
              <path
                d="M 13.5 10 A 8.5 8.5 0 0 0 13.5 27 A 8.5 8.5 0 0 0 18.291016 25.519531 C 17.422273 29.222843 15.877848 31.803343 14.357422 33.589844 C 12.068414 36.279429 9.9433594 37.107422 9.9433594 37.107422 A 1.50015 1.50015 0 1 0 11.056641 39.892578 C 11.056641 39.892578 13.931586 38.720571 16.642578 35.535156 C 19.35357 32.349741 22 27.072581 22 19 A 1.50015 1.50015 0 0 0 21.984375 18.78125 A 8.5 8.5 0 0 0 13.5 10 z M 34.5 10 A 8.5 8.5 0 0 0 34.5 27 A 8.5 8.5 0 0 0 39.291016 25.519531 C 38.422273 29.222843 36.877848 31.803343 35.357422 33.589844 C 33.068414 36.279429 30.943359 37.107422 30.943359 37.107422 A 1.50015 1.50015 0 1 0 32.056641 39.892578 C 32.056641 39.892578 34.931586 38.720571 37.642578 35.535156 C 40.35357 32.349741 43 27.072581 43 19 A 1.50015 1.50015 0 0 0 42.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z"
                fill="orange"
              ></path>
            </svg>
          </div>
          <h4 className="testimonial-name">{testimonials[activeIndex].name}</h4>
          <p className="testimonial-company">
            {testimonials[activeIndex].company}
          </p>
          <br />
          <br />
          <p className="testimonial-text">{testimonials[activeIndex].text}</p>
        </div>

        <button
          className={`nav-arrow right ${
            activeIndex === testimonials.length - 1 ? "disabled" : ""
          }`}
          onClick={next}
          disabled={activeIndex === testimonials.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
