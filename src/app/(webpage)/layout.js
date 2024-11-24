import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  
    return (
      <div>
           <Navbar/>
        {children}
        <FooterSection/>
      </div>
    );
  }