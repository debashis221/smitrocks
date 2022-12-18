"use client";
import BearCarousel, {
  TBearSlideItemDataList,
  BearSlideItem,
} from "bear-react-carousel";

const Slider = () => {
  const images = [
    { id: 1, image: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg" },
    { id: 2, image: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg" },
    { id: 3, image: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg" },
  ];

  const bearSlideItemData: TBearSlideItemDataList = images.map((row) => {
    return {
      key: row.id,
      children: <BearSlideItem imageUrl={row.image} />,
    };
  });
  return (
    <BearCarousel
      data={bearSlideItemData}
      aspectRatio={{ widthRatio: 16, heightRatio: 9 }}
    />
  );
};

export default Slider;
