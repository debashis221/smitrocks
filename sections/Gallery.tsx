import Image from "next/image";

const Gallery = () => {
  return (
    <div>
      <div className="flex text-center items-center justify-center flex-col py-5">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-6xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-green-400">
            Gallery
          </span>
        </h1>
        <h4 className="lg:mx-60 text-ellipsis mx-7">
          Memory is a way of holding onto the things you love, the things you
          are, the things you never want to lose. We store our memories in
          secure place.
        </h4>
      </div>
      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:px-24">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
