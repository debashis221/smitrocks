"use client";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import ReactFullpage from "@fullpage/react-fullpage";

const data = [
  {
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg",
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
  {
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg",
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consecteturex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
  {
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg",
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
  {
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg",
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
];
const Slider = () => (
  <section>
    {/* <Swiper
      className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((item, index) => {
        return (
          <SwiperSlide key={index} className="testimonials">
            <div className="client__avatar">
              <Image src={item.avatar} alt="" width={100} height={100} />
            </div>
            <h5 className="client__name">{item.name}</h5>
            <small className="client_review">{item.review}</small>
          </SwiperSlide>
        );
      })}
    </Swiper><Swiper
      className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((item, index) => {
        return (
          <SwiperSlide key={index} className="testimonials">
            <div className="client__avatar">
              <Image src={item.avatar} alt="" width={100} height={100} />
            </div>
            <h5 className="client__name">{item.name}</h5>
            <small className="client_review">{item.review}</small>
          </SwiperSlide>
        );
      })}
    </Swiper> */}
    <ReactFullpage
      debug /* Debug logging */
      // fullpage options
      licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
      navigation
      anchors={["firstPage", "secondPage", "thirdPage"]}
      render={(comp) => (
        <ReactFullpage.Wrapper>
          {data.map((item, index) => (
            <div key={index}>
              <div className="client__avatar">
                <Image src={item.avatar} alt="" width={100} height={100} />
              </div>
              <h5 className="client__name">{item.name}</h5>
              <small className="client_review">{item.review}</small>
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  </section>
);

export default Slider;
