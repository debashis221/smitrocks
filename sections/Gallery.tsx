"use client";
import { GalleryItem } from "../components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  return (
    <div>
      <div className="flex text-center items-center justify-center flex-col py-5">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-green-400">
            Gallery
          </span>
        </h1>
      </div>
      <section className="overflow-hidden text-gray-700 px-7 lg:px-24">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap-m-1 md:-m-2">
            <Masonry gutter="10px">
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
            </Masonry>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
