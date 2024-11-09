import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
       <Navbar/>
      <div className="bg-cover bg-[#BFDBFE] bg-center md:h-screen min-h-screen flex items-center">
        <HeroSection />
      </div>
    </div>
  );
}
