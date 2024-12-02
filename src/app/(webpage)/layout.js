import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import { auth } from "../../../auth";

export default async function Layout({ children }) {
  const session =await auth()
    return (
      <div>
           <Navbar session={session}/>
        {children}
        <FooterSection/>
      </div>
    );
  }