"use client";

import Carousel from "nuka-carousel/lib/carousel";
import Image from "next/image";

const CarouselSlider = () => {
  return (
    <div>
      <Carousel wrapAround={true} slidesToShow={1} autoplay={true}>
        <img src="https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg" />
        <img src="https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg" />
        <img src="https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg" />
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
