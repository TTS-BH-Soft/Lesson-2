import { Navbar } from "../../layouts/NavBar/NavBar";
import { Footer } from "../../layouts/Footer/Footer";
import Teams from "../../component/Teams/Teams";
import AssisSection from "./AssisSection/AssisSection";

export default function Team() {
  return (
    <>
      <Navbar />
      <Teams />
      <AssisSection />
      <Footer />
    </>
  );
}
