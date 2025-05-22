import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react"

const AnimatedOverlay = () => {

    //refs for animations
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    const lineOneRef = useRef<HTMLDivElement>(null);
    const lineTwoRef = useRef<HTMLDivElement>(null);
    const lineThreeRef = useRef<HTMLDivElement>(null);
    const lineFourRef = useRef<HTMLDivElement>(null);
    const lineFiveRef = useRef<HTMLDivElement>(null);
    
    //title for animation
    const title = "Valid Treasure";

    useGSAP(() => {
        const timeline  = gsap.timeline();

        gsap.fromTo(lineOneRef.current, {
            width: '5%',
            left: '20%',
        }, {
            left: '2%',
            width: '40%',
            duration: 0.8,
        })

        gsap.fromTo(lineTwoRef.current, {
            width: '5%',
            left: '40%',
        }, {
            left: '50%',
            width: '30%',
            duration: 1,
        })

        gsap.fromTo(lineThreeRef.current, {
            width: '5%',
            left: '20%',
        }, {
            left: '5%',
            width: '20%',
            duration: 1.2,
        })

        gsap.fromTo(lineFourRef.current, {
            width: '5%',
            left: '80%',
        }, {
            left: '50%',
            width: '40%',
            duration: 1,
        })

        gsap.fromTo(lineFiveRef.current, {
            width: '5%',
            left: '60%',
        }, {
            left: '30%',
            width: '30%',
            duration: 1.4,
        })

        timeline.fromTo(containerRef.current, {
            top: '40%',
        }, {    
            top: '10%',
            duration: 1,
            ease: 'power1.inOut',
        })

        timeline.fromTo(headingRef.current?.children, {
            y: 20,
            opacity: 0,
        }, {
            stagger: 0.06,
            y: 0,
            opacity: 1,
        }, ">-0.8")

        timeline.to(containerRef.current, {
            top: '100%',
            duration: 1,
            ease: 'power1.inOut',
            delay: 0.4,
        })

        timeline.to(lineTwoRef.current, {
            left: '100%',
            width: '10%',
            duration: 1,
            ease: 'power1.inOut',
        }, ">-1")

        timeline.to(lineOneRef.current, {
            width: '1%',
            duration: 1,
            ease: 'power1.inOut',
        }, ">-1")

        timeline.to(lineThreeRef.current, {
            width: '1%',
            duration: 1,
            ease: 'power1.inOut',
        }, ">-1")

        timeline.to(lineFourRef.current, {
            left: '80%',
            width: '1%',
            duration: 1,
            ease: 'power1.inOut',
        }, ">-1")

        timeline.to(headingRef.current?.children, {
            y: 80,
            duration: 0.6,
            stagger: 0.07,
            ease: 'power1.inOut',
        }, ">-1")

        console.log(window.scrollY)
    }, []);


  return (
    <>
    {window.scrollY === 0 && (
        <div ref={containerRef} className="absolute z-[130] overflow-hidden top-[40%] left-0 h-screen w-full bg-theme-foreground flex justify-center items-center">
          <h1 ref={headingRef} className="text-9xl text-theme-background font-custom tracking-tight select-none"> 
            {title.split('').map((letter, index) => (
                <span key={index} className="inline-block">
                {letter === ' ' ? '\u00A0' : letter}
                </span>
            ))}
          </h1>
          <div ref={lineOneRef} className="absolute top-[20%] left-[2%] h-[2px] w-[40%] bg-theme-background"></div>
          <div ref={lineTwoRef} className="absolute top-[58%] left-[20%] h-[2px] w-[40%] bg-theme-background"></div>
          <div ref={lineThreeRef} className="absolute top-[70%] left-[60%] h-[2px] w-[30%] bg-theme-background"></div>
          <div ref={lineFourRef} className="absolute top-[30%] left-[50%] h-[2px] w-[40%] bg-theme-background"></div>
          <div ref={lineFiveRef} className="absolute top-[80%] left-[30%] h-[2px] w-[30%] bg-theme-background"></div>
        </div>
    )}
    </>
  )
}

export default AnimatedOverlay
