import DoctorSection from "@/components/DoctorSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { auth } from "../../auth";

export default async function  Home() {
const session =await auth()
console.log("Session" , session);

  return (
    <div className="">
      <Navbar session={session}/>
      <div className="bg-cover bg-[#BFDBFE] bg-center md:h-screen min-h-screen flex items-center">
        <HeroSection />
      </div>
      <DoctorSection isHome={true} />
      <FooterSection />
    </div>
  );
}
