"use client";

import Carousel from "nuka-carousel/lib/carousel";
import Image from "next/image";

const CarouselSlider = () => {
  return (
    <div>
      <Carousel wrapAround={true} slidesToShow={3}>
        <img src="/image1.png" />
        <img src="/image2.png" />
        <img src="/image3.png" />
        <img src="/image4.png" />
        <img src="/image5.png" />
      </Carousel>
      ;
    </div>
  );
};

export default CarouselSlider;
