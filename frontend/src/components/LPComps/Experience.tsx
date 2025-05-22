import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import TreasureChest from "./TreasuerChest";
import { useGSAP } from "@gsap/react";
import { DirectionalLight } from "three";
import gsap from "gsap";

const Experience = () => {
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsModelLoaded(true);
        }, 1000); 
        return () => clearTimeout(timer); 
    }, []);

    //animations here
    const lightRef = useRef<DirectionalLight>(null);
    useGSAP(() => {
        if(lightRef.current){
            gsap.to(lightRef.current.position, {
                delay: 1,
                x: 2,
                duration: 1,
                ease: 'power1.inOut',
                yoyo: true,
            })
        }
    }, []);


  return (
    <Canvas className="h-full w-full">
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="brown" /></mesh>}>
            {isModelLoaded && <TreasureChest />}
        </Suspense>
      <ambientLight intensity={6} color="white" /> 
      <directionalLight
        ref={lightRef}
        position={[5, 10, 5]}
        intensity={3}
        color="white"
        castShadow
      />
    </Canvas>
  )
}

export default Experience
