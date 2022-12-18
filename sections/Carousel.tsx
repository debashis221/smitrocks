"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image
            src="https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg"
            alt="image"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
        <div>
          <Image
            src="https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg"
            alt="image"
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
        <div>
          <Image
            src="https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg"
            alt="image"
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
