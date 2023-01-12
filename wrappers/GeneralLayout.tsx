import { Footer, NavBar } from "components";

interface IProps {
  children: React.ReactNode;
}
const GeneralLayot = ({ children }: IProps) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default GeneralLayot;
