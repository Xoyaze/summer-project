import AnimatedOverlay from "@/components/LPComps/AnimatedOverlay";
import Experience from "@/components/LPComps/Experience";
import LPHeader from "@/components/LPComps/LPHeader";
import Mission from "@/components/LPComps/Mission";
import SecondPage from "@/components/LPComps/SecondPage";
import SideCards from "@/components/LPComps/SideCards";
import { useEffect, useState } from "react";
import Lenis from 'lenis';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


const LandingPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [animationLoading, setAnimationLoading] = useState<boolean>(true);

 useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);

      setTimeout(() => {
        setAnimationLoading(false);
      }, 5000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);


  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);


  return (

    <>
      {isLoading ? (
        <div className="h-screen w-full bg-black text-white flex justify-center items-center">Loading.....</div>
      ): (
          <div className={`${animationLoading ? ('h-screen overflow-hidden'): ('h-auto')} relative overflow-x-hidden w-full bg-theme-background`}>
              <LPHeader />
              <div className={`${animationLoading ? ('h-0'): ('h-[15vh]')} w-full`}></div>
              <SideCards />
              <div className="fixed top-20 left-0 h-screen w-full bg-transparent z-[100]">
                <Experience />  
              </div>
              <div className="pointer-events-none fixed inset-0 z-[100]">
                <AnimatedOverlay />
              </div>
              <SecondPage />
              <Mission />
          </div>
      ) }
    </>
  );
}

export default LandingPage;
