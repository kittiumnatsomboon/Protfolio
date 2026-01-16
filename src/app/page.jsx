import Image from "next/image";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LenisScroll from "./components/Lenis"

export default function Home() {
  return (
    <>
      <Navbar />
      <LenisScroll />
      <Footer />
    </>
  );
}
