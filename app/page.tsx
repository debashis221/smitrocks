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
    <div>
      <Hero />
      <NoticeBoard />
      <CourcesOffered />
      <Gallery />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
