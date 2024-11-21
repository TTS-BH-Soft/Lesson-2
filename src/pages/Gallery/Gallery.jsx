import { Footer } from "../../layouts/Footer/Footer";
import { Navbar } from "../../layouts/NavBar/NavBar";
import GalleryBox from "./GalleryBox/GalleryBox";
import VideoSection from "./GalleryImageBox/VideoSection";
import QuotaSection from "./QuotaSection/QuotaSection";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <GalleryBox />
      <VideoSection />
      <QuotaSection />
      <Footer />
    </>
  );
}
