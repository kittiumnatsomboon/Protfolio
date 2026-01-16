import Image from "next/image";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LenisScroll from "./components/Lenis"
import Page from "./pages/Home"
export default function Home() {
  return (
    <>
      <Navbar />
      <Page/>
      <LenisScroll />
      <Footer />
    </>
  );
}
