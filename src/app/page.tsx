import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import Header from "./layouts/Header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}
