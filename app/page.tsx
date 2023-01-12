import { GeneralLayot } from "wrappers";
import {
  CourcesOffered,
  Gallery,
  Hero,
  Newsletter,
  NoticeBoard,
  Testimonials,
} from "../sections";
export default function Page() {
  return (
    <GeneralLayot>
      <Hero />
      <NoticeBoard />
      <CourcesOffered />
      <Gallery />
      <Testimonials />
      <Newsletter />
    </GeneralLayot>
  );
}
