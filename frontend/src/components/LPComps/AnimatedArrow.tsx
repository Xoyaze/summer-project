import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedArrow = () => {
  const tailRef = useRef<SVGPathElement>(null);
  const leftHeadRef = useRef<SVGLineElement>(null);
  const rightHeadRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (tailRef.current && leftHeadRef.current && rightHeadRef.current) {
      const tailLength = tailRef.current.getTotalLength();

      // Set initial dash state for tail
      gsap.set(tailRef.current, {
        strokeDasharray: tailLength,
        strokeDashoffset: tailLength,
      });

      const timeline = gsap.timeline();
      // Animate tail
      timeline.to(tailRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        delay: 4,
        ease: "power2.out",
      });

      // Animate arrowhead lines after tail animation
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
    <div className="flex items-center justify-center h-screen  transform translate-y-[-5%] translate-x-[20%] rotate-[-100deg]">
      <svg
        width="400"
        height="200"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Arrow Tail (with nice curve) */}
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

        {/* Arrowhead Left Line */}
        <line  
          ref={leftHeadRef}
          x1="350"
          y1="100"
          x2="330"
          y2="95"  // slightly up (was 90 before)
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Arrowhead Right Line */}
        <line
          ref={rightHeadRef}
          x1="350"
          y1="100"
          x2="345"
          y2="125" // slightly down (was 110 before)
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default AnimatedArrow;
