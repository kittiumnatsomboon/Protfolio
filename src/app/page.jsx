import Image from "next/image";
import Footer from "./components/Footer"
import LenisScroll from "./components/Lenis"
import Page from "./Home"
export default function Home() {
  return (
    <>
      <Page/>
      <LenisScroll />
      <Footer />
    </>
  );
}
