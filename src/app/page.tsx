import FeaturedCouses from "@/components/FeaturedCouses";
import HeroSection from "@/components/HeroSection";
import OurMentors from "@/components/OurMentors";
import Testimoni from "@/components/Testimoni";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
    <FeaturedCouses />
    <WhyChooseUs />
    <Testimoni />
    <OurMentors />
    
    </>
  );
}
