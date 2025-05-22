import AnimatedLines from "./AnimatedLines";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import AnimatedArrowTwo from "./AnimatedArrowTwo";
gsap.registerPlugin(ScrollTrigger);


const SecondPage = () => {

    const headingRef = useRef<HTMLHeadingElement>(null);
    const paraRef = useRef<HTMLParagraphElement>(null);
    const sayingRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(headingRef.current, {
            y: 20,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: "power1.inOut",
            duration: 2,
            scrollTrigger: {
                trigger: ".secondPage",
                start: "top center",
                scrub: false,
                once: true,
            }
        });

        gsap.fromTo(sayingRef.current, {
            y: 20,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: "power1.inOut",
            duration: 2,
            scrollTrigger: {
                trigger: ".secondPage",
                start: "top center",
                scrub: false,
                once: true,
            }
        });

        gsap.fromTo(cardsRef.current, {
            y: 20,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: "power1.inOut",
            duration: 2,
            scrollTrigger: {
                trigger: ".secondPage",
                start: "top center",
                scrub: false,
                once: true,
            }
        });

        gsap.fromTo(paraRef.current, {
            y: 20,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: "power1.inOut",
            duration: 2,
            scrollTrigger: {
                trigger: ".secondPage",
                start: "top center",
                scrub: false,
                once: true,
            }
        });

    }, []);

  return (
    <div className="h-screen w-full overflow-y-hidden px-12 text-black secondPage flex justify-end items-center relative overflow-x-hidden">
        <AnimatedLines />
        <AnimatedArrowTwo />
        <div ref={sayingRef} className="absolute top-[9%] left-[31%]">
            <h1 className="text-3xl font-custom-two">Unlocking Value</h1>
        </div>
        <div className="h-[84vh] w-1/2 text-black px-4 py-4 mt-10">
            <h1 ref={headingRef} className="text-7xl font-custom text-end">Transparent & Trusted</h1>
            <p ref={paraRef} className="mt-10 font-custom-two text-end">"We understand the risks that come with trading niche products like in-game diamonds, audiobooks, and hard-to-find items. That’s why we’ve built a platform focused on trust and transparency. Users can freely comment on and like seller pages, helping others gauge credibility through genuine feedback. Meanwhile, our admins actively monitor activity and ban any sellers who display fraudulent behavior, ensuring a safer environment for everyone. Our goal is to give buyers confidence and protect the community from scams."</p>
        </div>


        <div ref={cardsRef} className="h-[25vh] w-1/2 bg-theme-brown/70 rounded-xl flex justify-around items-center absolute bottom-[10%] right-[2%]">
            <div className="h-[10vh] w-[24%] bg-theme-foreground text-gray-100 rounded-4xl flex justify-center items-center">
                <h2>Routine Inspections</h2>
            </div>
            <div className="h-[10vh] w-[26%] bg-theme-foreground text-gray-100 rounded-4xl flex justify-center items-center">
                <h2>Comments And Reports</h2>
            </div>
            <div className="h-[10vh] w-[22%] bg-theme-foreground text-gray-100 rounded-4xl flex justify-center items-center">
                <h2>Admin Bans</h2>
            </div>
        </div>  


    </div>
  )
}

export default SecondPage
