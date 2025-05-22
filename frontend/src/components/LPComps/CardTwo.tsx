import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const CardTwo = () => {

    const cardTwoRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const timeline = gsap.timeline();

        timeline.fromTo(cardTwoRef.current, {
            x: '120%',
        }, {
            x: '-15%',
            duration: 1,
            delay: 2,
            ease: 'power1.inOut',
        })

        timeline.to(cardTwoRef.current, {
            x: 0,
            duration: 0.6,
            ease: 'power1.inOut',
        });

    }, []);

    return (
      <div ref={cardTwoRef} className="h-[70vh] w-[30vw] bg-theme-brown rounded-xl flex flex-col px-4 py-6 relative">

        <h1 className="text-2xl font-custom-two text-theme-foreground font-bold">Envisioning Success</h1>
        <div className="h-[4px] w-[85%] bg-theme-foreground"></div>
        

        <p className="text-theme-background/95 mt-2">"A secure and reliable platform built specifically for trading niche products. Whether you're looking to buy or sell unique items, our platform offers a seamless experience with robust security and intuitive features. Designed with both users and traders in mind, we prioritize safety, reliability, and trust in every transaction. Our system ensures a smooth process from start to finish, connecting like-minded individuals and filling a gap in the market for specialized product trading. Experience a platform that truly understands your needs &nbsp;&nbsp;&nbsp; and enhances your trading journey."</p>

        <p className="text-theme-background/95 mt-6 w-[60%]">"COD points? PUBG UC? Audiobooks? In-game diamonds? Everything you need is available here, all in one secure, reliable platform!"</p>

        <div className="absolute bottom-[-10%] right-[-30%] bg-theme-background h-[40vh] w-[20vw] rounded-full">
            <div className="absolute top-[4%] left-[10%] h-[80%] w-[80%] bg-theme-brown rounded-full"></div>
        </div>
      </div>
    )
  }
  
  export default CardTwo;
  