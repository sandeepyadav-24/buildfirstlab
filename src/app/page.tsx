import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Process from "./components/Process";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Reason from "./components/Reason";
import Faq from "./components/Faq";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Process />
      <Project />
      <Reason />
      <Work />
      <Testimonial />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}
