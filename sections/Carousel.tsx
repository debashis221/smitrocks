"use client";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";

const data = [
  {
    avatar: "",
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
  {
    avatar: "",
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consecteturex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
  {
    avatar: "",
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
  {
    avatar: "",
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
];
const Slider = () => (
  <section>
    <Swiper
      className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map(({ avatar, name, review }, index) => {
        return (
          <SwiperSlide key={index} className="testimonials">
            <div className="client__avatar">
              <Image src={avatar} alt="" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </section>
);

export default Slider;
