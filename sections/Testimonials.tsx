"use client";
import Marquee from "react-fast-marquee";
import { TestimonialsItem } from "../components";

const Testimonials = () => {
  return (
    <div className="w-full py-10">
      <div className="flex text-center items-center justify-center flex-col">
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-white md:text-6xl md:tracking-tight">
          <span>What</span>{" "}
          <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
            Our Students
          </span>{" "}
          <span>Says About Us.</span>
        </h1>
        <Marquee gradient={false}>
          <TestimonialsItem />
          <TestimonialsItem />
          <TestimonialsItem />
          <TestimonialsItem />
          <TestimonialsItem />
          <TestimonialsItem />
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
