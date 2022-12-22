import Image from "next/image";

const GalleryItem = ({ Propsdata }: any) => {
  return (
    <div>
      <div
        className={
          Propsdata % 2 === 0 ? "w-1/2 p-1 md:p-2" : "w-full p-1 md:p-2"
        }
      >
        <Image
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-lg"
          src="https://picsum.photos/200/300?image=1050"
          width="100"
          height="100"
        />
      </div>
    </div>
  );
};

export default GalleryItem;
