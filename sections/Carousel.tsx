"use client";

import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/style.css"; //Allows for server-side rendering.
import Image from "next/image";

const Carousel = () => {
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
  };

  return (
    <div>
      <OwlCarousel options={options}>
        <div>
          <img src="/img/fullimage1.jpg" alt="The Last of us" />
        </div>
        <div>
          <img src="/img/fullimage2.jpg" alt="GTA V" />
        </div>
        <div>
          <img src="/img/fullimage3.jpg" alt="Mirror Edge" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
