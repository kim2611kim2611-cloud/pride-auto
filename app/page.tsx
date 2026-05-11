import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { Brands } from "@/components/sections/Brands";
import { Gallery } from "@/components/sections/Gallery";
import { Calculator } from "@/components/sections/Calculator";
import { Timeline } from "@/components/sections/Timeline";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden bg-[#0A0A0A]">
        <Hero />
        <HowItWorks />
        <WhyUs />
        <Brands />
        <Gallery />
        <Calculator />
        <Timeline />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
