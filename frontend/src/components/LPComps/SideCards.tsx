import { useRef } from "react"
import AnimatedArrow from "./AnimatedArrow"
import CardOne from "./CardOne"
import CardTwo from "./CardTwo"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const SideCards = () => {


    //animation below here
    const secondLineRef = useRef<HTMLHeadingElement>(null);
    const firstLineRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const timeline = gsap.timeline();
        timeline.fromTo(secondLineRef.current, {
            opacity: 0,
            y: 10,
        }, {
            delay: 6.2,
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'elastic.out',
        })

        timeline.fromTo(firstLineRef.current, {
            opacity: 0,
            y: 10,
        }, {
            opacity: 1,
            delay: 0.4,
            y: 0,
            duration: 0.8,
            ease: 'elastic.out',
        })

        
    }, []);
    
  return (
    <div className="h-[90vh] w-full  text-white relative top-[15%] z-[100] flex justify-between items-center px-10 ">
        <CardOne />
        <AnimatedArrow />
        <CardTwo />
        <div className="absolute top-[14%] left-[44%]">
            <h1 ref={firstLineRef} className="text-xl font-custom text-black">Get It ?</h1>
            <h1 ref={secondLineRef} className="text-xl font-custom text-black">A Secure Chest</h1>
        </div>
    </div>  
  )
}

export default SideCards
