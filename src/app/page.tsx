import { ScrollProvider } from "@/context/ScrollContext";
import ScrollProgress from "@/components/ScrollProgress";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Sectors from "@/components/sections/Sectors";
import Benefits from "@/components/sections/Benefits";
import Services from "@/components/sections/Services";
import StartNow from "@/components/sections/StartNow";
import HowItWorks from "@/components/sections/HowItWorks";
import Cases from "@/components/sections/Cases";
import About from "@/components/sections/About";
import Diffs from "@/components/sections/Diffs";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <ScrollProvider>
      <div id="top" className="relative">
        <ScrollProgress />
        <Background />
        <Navbar />
        <Hero />
        <Sectors />
        <Benefits />
        <Services />
        <StartNow />
        <HowItWorks />
        <Cases />
        <About />
        <Diffs />
        <Faq />
        <FinalCta />
        <Footer />
      </div>
    </ScrollProvider>
  );
}
