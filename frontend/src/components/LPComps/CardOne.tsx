import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const CardOne = () => {

    const cardOneRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const timeline = gsap.timeline();

        timeline.fromTo(cardOneRef.current, {
            x: '-120%',
        }, {
            x: '15%',
            duration: 1,
            delay: 2,
            ease: 'power1.inOut',
        })

        timeline.to(cardOneRef.current, {
            x: 0,
            duration: 0.8,
            ease: 'power1.inOut',
        })

    }, []);


  return (
    <div ref={cardOneRef} className="h-[70vh] w-[30vw] rounded-xl relative flex px-2 py-8 justify-center items-start text-theme-foreground font-custom-two flex-col">
        
        <h1 className="text-8xl font-bold -mt-24">Buying And Selling</h1>
        <h1 className="text-4xl font-bold mt-2">Where Trades Are Secure</h1>

        <div className="h-[4px] w-[60%] bg-theme-foreground mt-4 rounded"></div>
        <div className="h-[4px] w-[78%] bg-theme-foreground mt-2 rounded"></div>

      {/* <div className="absolute top-[-15%] left-[-30%] bg-theme-background h-[40vh] w-[20vw] rounded-full"></div> */}
    </div>
  )
}

export default CardOne;
