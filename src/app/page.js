import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hore from "@/components/Hore";

import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hore/>
      <Features/>
      <Service/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
      
    </div>
  );
}
