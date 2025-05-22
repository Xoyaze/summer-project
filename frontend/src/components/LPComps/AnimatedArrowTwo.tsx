import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const AnimatedArrowTwo = () => {
  const tailRef = useRef<SVGPathElement>(null);
  const leftHeadRef = useRef<SVGLineElement>(null);
  const rightHeadRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (tailRef.current && leftHeadRef.current && rightHeadRef.current) {
      const tailLength = tailRef.current.getTotalLength();

      gsap.set(tailRef.current, {
        strokeDasharray: tailLength,
        strokeDashoffset: tailLength,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".secondPage",  
          start: "top 30%",     
          once: true,               
        },
      });

      timeline.to(tailRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
      });

      timeline.fromTo(
        [leftHeadRef.current, rightHeadRef.current],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen transform rotate-[-50deg] translate-x-[-20%] translate-y-[-20%]">
      <svg
        width="400"
        height="200"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={tailRef}
          d="
            M 50 150
            Q 100 50, 200 100
            T 350 100
          "
          stroke="black"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <line
          ref={leftHeadRef}
          x1="350"
          y1="100"
          x2="330"
          y2="95"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <line
          ref={rightHeadRef}
          x1="350"
          y1="100"
          x2="345"
          y2="125"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default AnimatedArrowTwo;
