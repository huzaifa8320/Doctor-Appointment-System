'use client'
import DoctorSection from "@/components/DoctorSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {

  return (
    <div className="">
      <div className="bg-cover bg-[#BFDBFE] bg-center md:h-screen min-h-screen flex items-center">
        <HeroSection/>
      </div>
      <DoctorSection isHome={true}/>
    </div>
  );
}
