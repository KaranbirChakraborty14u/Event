import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './gallery.css';
import img1 from "../../assets/Weddings/Chirag + Surabhi/1.jpg";
import img2 from "../../assets/Weddings/Chirag + Surabhi/2.jpg";
import img3 from "../../assets/Weddings/Chirag + Surabhi/3.jpg";
import img4 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/1.jpg";
import img5 from "../../assets/Weddings/Prianca + Punit (26th Nov 22)/2.jpg";
import img6 from "../../assets/Riya + Shubham (10th May 22)/1.JPG";
import img7 from "../../assets/Riya + Shubham (10th May 22)/2.JPG";
import img12 from "../../assets/Weddings/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/1.jpg";
import img8 from "../../assets/Weddings/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/2.jpg";
import img9 from "../../assets/Weddings/Taj Wedding/2.jpg";
import img10 from "../../assets/Weddings/Taj Wedding/3.jpg";
import img11 from "../../assets/Weddings/Taj Wedding/4.jpg";
import img13 from "../../assets/NGO Associations/12th EHNF & BFA/BALIPARA EHNF DAY/6.jpg";
import img14 from "../../assets/NGO Associations/12th EHNF & BFA/BALIPARA EHNF DAY/7.jpg";
import img15 from "../../assets/NGO Associations/Apne Apne Ram/3.JPG";
import img16 from "../../assets/NGO Associations/Apne Apne Ram/4.JPG";
import img17 from "../../assets/NGO Associations/Apne Apne Ram/5.JPG";
import img18 from "../../assets/Sports/IPL Mayfair/2.jpg";
import img19 from "../../assets/Sports/IPL Stadium/1.jpg";
import img20 from "../../assets/Website/AUDI/1.jpg";
import img21 from "../../assets/Website/AUDI/3.jpg";
import img22 from "../../assets/Sports/IPL Mayfair/5.jpg";
import img23 from "../../assets/Sports/IPL STADIUM/2.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
];


const breakpointColumnsObj = {
  default: 4,
  1200: 3,
  768: 2,
  500: 1,
};

export default function Gallery() {
  useEffect(() => {
  AOS.init({
    duration: 700,
    once: false, // 🔁 allow animations to happen on every scroll
    mirror: true, // (optional) animates out when scrolling back up
  });

  // Refresh AOS when the component updates (just in case)
  AOS.refresh();
}, []);


  return (
    <div className="gallery-wrapper">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="gallery-masonry"
        columnClassName="gallery-column"
      >
        {images.map((src, index) => (
          <div
            className="gallery-item"
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={(index % 5) * 100}
          >
            <img src={src} alt={`Gallery ${index}`} loading="lazy"/>
          </div>
        ))}
      </Masonry>
    </div>
  );
}