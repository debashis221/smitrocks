import { CourseItem } from "../components";

const CourcesOffered = () => {
  return (
    <div className="flex text-center items-center justify-center flex-col">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-6xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-green-400">
          Courses
        </span>
        We Offer
      </h1>
      <h4 className="lg:mx-60 mx-7">
        The purpose of education is not to fill the minds of students with
        facts... it is to teach them to think, if that is possible, and always
        to think for themselves.
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 justify-evenly lg:mx-24 mx-7">
        {[1, 2, 4, 6, 8, 23].map((item: number, key: number) => {
          return <CourseItem key={key} PropsData={key} />;
        })}
      </div>
    </div>
  );
};

export default CourcesOffered;
