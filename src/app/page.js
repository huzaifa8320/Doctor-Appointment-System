import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
       <Navbar/>
      <div className="bg-cover bg-center md:h-screen min-h-screen flex items-center" style={{ backgroundImage: "url('/Hospital blur bg.jpg')" }}>
        <HeroSection />
      </div>
    </div>
  );
}
