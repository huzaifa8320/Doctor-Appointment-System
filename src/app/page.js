import DoctorSection from "@/components/DoctorSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <div className="">
      <Navbar />
      <div className="bg-cover bg-[#BFDBFE] bg-center md:h-screen min-h-screen flex items-center">
        <HeroSection />
      </div>
      <DoctorSection isHome={true} />
      <FooterSection />
    </div>
  );
}
