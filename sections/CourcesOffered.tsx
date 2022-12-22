import { CourseItem } from "../components";

const CourcesOffered = () => {
  return (
    <div className="flex text-center items-center justify-center flex-col">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-green-400">
          Cources
        </span>
        We Offer
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 justify-evenly lg:mx-24 mx-7">
        {[1, 2, 4, 6, 8, 23].map((item: number, key: number) => {
          return <CourseItem key={key} PropsData={key} />;
        })}
      </div>
    </div>
  );
};

export default CourcesOffered;
