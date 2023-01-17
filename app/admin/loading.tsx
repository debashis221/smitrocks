import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <HashLoader color="white" />
    </div>
  );
};

export default loading;
