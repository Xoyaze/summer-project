import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const AnimatedLines = () => {
  const linesRef = useRef<SVGLineElement[]>([]);

  useGSAP(() => {
    if (linesRef.current.length) {
      gsap.fromTo(
        linesRef.current,
        { strokeDasharray: 100, strokeDashoffset: 100 },
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".secondPage",
            start: 'top 10%',
            once: true,
          }
        }
        
      );
    }
  }, []);

  const centerX = 300;
  const centerY = 300;
  const radius = 150; // Bigger invisible circle
  const lineLength = 80; // How far the line extends outward

  const numLines = 5; // 5 lines in top-right quadrant

  return (
    <div className="flex justify-center items-center h-[80vh] w-full absolute top-[10%] left-[-12%] animatedLines">
      <svg
        viewBox="0 0 600 600"
        width="400"
        height="400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(numLines)].map((_, i) => {
          // Only top-right quarter (0 to 90 degrees)
          const angle = (i / (numLines - 1)) * (Math.PI / 2); 

          const startX = centerX + Math.cos(angle) * radius;
          const startY = centerY - Math.sin(angle) * radius; // minus to flip upwards

          const endX = centerX + Math.cos(angle) * (radius + lineLength);
          const endY = centerY - Math.sin(angle) * (radius + lineLength);

          return (
            <line
              key={i}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke="black"
              strokeWidth="4"
              ref={(el) => {
                if (el) linesRef.current[i] = el;
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default AnimatedLines;
