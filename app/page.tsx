import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";



import { ReactNode } from "react";

interface HomeProps {
  children: ReactNode;
}

export default function Home({ children }: HomeProps) {
  
  return (
    <>
    
    <div className="min-h-screen flex flex-col">
    <Navbar/>
    <Hero />
    <Footer/>
    </div> 
      
    
    </>
  );
}
