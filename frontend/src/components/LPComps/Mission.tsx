import callOfDutyImage from '/images/callOfDutyBackground.webp';
import pubgImage from '/images/pubgBackground.webp';
import freeFireImage from '/images/freeFireBackground.webp';
import mobileLegendsImage from '/images/mobileLegendsBackground.webp';
import audioBookImage from '/images/audioBookBackground.webp';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MoveRight } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);

const Mission = () => {

  //animation things below here
  const pubgRef = useRef<HTMLDivElement>(null);
  const codRef = useRef<HTMLDivElement>(null);
  const mlRef = useRef<HTMLDivElement>(null);
  const ffRef = useRef<HTMLDivElement>(null);
  const audioBookRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(pubgRef.current, {
      x: -400,
    }, {  
      x: 0,
      duration: 1.4,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.mission',
        start: 'top 30%',
        once: true,

      }
    });

    gsap.fromTo(mlRef.current, {
      x: 450,
    }, {  
      x: 0,
      duration: 1.4,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.mission',
        start: 'top 30%',
        once: true,

      }
    });

    gsap.fromTo(audioBookRef.current, {
      y: 300,
    }, {  
      y: 0,
      duration: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.mission',
        start: 'top 30%',
        once: true,

      }
    });
    gsap.fromTo(ffRef.current, {
      y: 300,
    }, {  
      y: 0,
      duration: 1.2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.mission',
        start: 'top 30%',
        once: true,

      }
    });
    gsap.fromTo(codRef.current, {
      opacity: 0,
    }, {  
      opacity: 1,
      duration: 1.8,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.mission',
        start: 'top 30%',
        once: true,

      }
    });
  }, []);



  return (
    <div className="mission h-auto w-full px-12 relative z-[200]">
      {/* <div className="h-[4px] w-full bg-theme-foreground mb-[-70px] mt-40"></div>
      <h1 className="text-4xl font-custom-two mt-24"><span className="text-6xl font-custom text-theme-brown">A Legit Place</span> to trade and not worry about scams. A Place where you find exact products you scour elsewhere.</h1>
      <div className="h-[4px] w-full bg-theme-foreground relative mt-6 mb-40"></div> */}

        
      <div className="h-[4px] w-full bg-theme-foreground mb-[-70px] mt-40"></div>
        <h1 className="text-4xl font-custom-two mt-24 px-8">A System built so robust that it just works. Our <span className="text-5xl font-custom text-theme-brown">Scam Proof System </span> can help you be at ease while dealing with such niche products.</h1>
      <div className="h-[4px] w-full bg-theme-foreground relative mt-6">
        <div className='h-[40vh] w-[4px] bg-theme-foreground absolute top-0 left-0'></div>
      </div>

      <div className='mb-20 h-[40vh] w-full px-4 py-4 flex gap-2'>
        <div className='h-full w-[5%] text-3xl text-black vertical-line'>
          <h1>Mission</h1>
        </div>
        <div className='h-full w-[80%] flex flex-col gap-10'>
          <div className='flex justify-start items-center gap-2 text-4xl'>
            <MoveRight size={42} className='mb-[-5px]'/>
            <h1>Dealing With You</h1>
          </div>
          <div className='flex justify-start items-center gap-2 text-4xl'>
            <MoveRight size={42} className='mb-[-5px]'/>
            <h1>Dealing With You</h1>
          </div>
          <div className='flex justify-start items-center gap-2 text-4xl'>
            <MoveRight size={42} className='mb-[-5px]'/>
            <h1>Dealing With You</h1>
          </div>
          <div className='flex justify-start items-center gap-2 text-4xl'>
            <MoveRight size={42} className='mb-[-5px]'/>
            <h1>Dealing With You</h1>
          </div>
        </div>
      </div>

      <h1 className='text-7xl ml-8 underline underline-offset-[20px] mb-8 text-theme-violet font-custom'>Available Products</h1>
      
      <div className="h-[80vh] w-full px-6 py-6 flex gap-6 overflow-hidden">

        <div ref={pubgRef} className="h-full w-[20%] bg-theme-foreground relative overflow-hidden group rounded-xl border-4 border-black">
          <img src={pubgImage} alt="" className='h-full w-full rounded-xl group-hover:scale-[1.2] transition duration-500  ' />
          <div className='absolute top-0 left-0 h-full w-full rounded-xl bg-[rgba(0,0,0,0.4)] group-hover:bg-[rgba(0,0,0,0.6)]'></div>

          <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center '>
            <h1 className='text-gray-100 vertical-line text-5xl font-custom-two opacity-0 group-hover:opacity-100 select-none pointer-events-none transition duration-150'>Pubg UC</h1>
          </div>

        </div>

        <div className="h-full w-1/2 flex flex-wrap">
          <div ref={codRef} className="h-[40%] w-full bg-theme-foreground relative overflow-hidden group rounded-xl border-4 border-black">
            <img src={callOfDutyImage} alt="" className='h-full w-full rounded-xl group-hover:scale-[1.2] transition duration-500 ' />
            <div className='absolute top-0 left-0 h-full w-full rounded-xl bg-[rgba(0,0,0,0.4)] group-hover:bg-[rgba(0,0,0,0.6)]'></div>
            <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center '>
            <h1 className='text-gray-100 text-5xl font-custom-two opacity-0 group-hover:opacity-100 select-none pointer-events-none transition duration-150'>CallOfDuty CP</h1>
          </div>
        </div>
          <div ref={audioBookRef}  className="h-[59%] mt-[1%] w-[48%] bg-theme-foreground relative overflow-hidden group rounded-xl border-4 border-black">
            <img src={audioBookImage} alt="" className='h-full w-full rounded-xl group-hover:scale-[1.2] transition duration-500  ' />
            <div className='absolute top-0 left-0 h-full w-full rounded-xl bg-[rgba(0,0,0,0.4)] group-hover:bg-[rgba(0,0,0,0.6)]'></div>
            
            <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center '>
              <h1 className='text-gray-100 text-5xl font-custom-two opacity-0 group-hover:opacity-100 select-none pointer-events-none transition duration-150'>AudioBooks</h1>
            </div>
          </div>

          <div ref={ffRef} className="h-[59%] mt-[1%] w-[48%] bg-theme-foreground relative overflow-hidden group ml-[4%] rounded-xl border-4 border-black">
            <img src={freeFireImage} alt="" className='h-full w-full rounded-xl group-hover:scale-[1.2] transition duration-500 ' />
            <div className='absolute top-0 left-0 h-full w-full rounded-xl bg-[rgba(0,0,0,0.4)] group-hover:bg-[rgba(0,0,0,0.6)]'></div>

            <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center '>
              <h1 className='text-gray-100 text-4xl font-custom-two opacity-0 group-hover:opacity-100 select-none pointer-events-none transition duration-150'>FreeFire Diamonds</h1>
            </div>
          </div>
        </div>

        <div ref={mlRef} className="h-full w-[30%] bg-theme-foreground relative overflow-hidden group rounded-xl border-4 border-black">
          <img src={mobileLegendsImage} alt="" className='h-full w-full rounded-xl group-hover:scale-[1.2] transition duration-500  ' />
          <div className='absolute top-0 left-0 h-full w-full rounded-xl bg-[rgba(0,0,0,0.2)] group-hover:bg-[rgba(0,0,0,0.6)]'></div>

          <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center'>
            <h1 className='text-gray-100 vertical-line text-4xl font-custom-two opacity-0 group-hover:opacity-100 select-none pointer-events-none transition duration-150'>ML Diamonds</h1>
          </div>

        </div>

      </div>


      <h1 className='text-7xl ml-8 underline underline-offset-[20px] mb-8 text-theme-violet mt-30 font-custom'>Browse Pages And Chat</h1>
      
      <div className="h-[80vh] w-full px-6 py-6 flex gap-6 overflow-hidden">

        <div ref={pubgRef} className="h-full w-[20%] bg-theme-foreground relative overflow-hidden group rounded-xl border-4 border-black">
          <img src={pubgImage} alt="" className='h-full w-full rounded-xl group-hover:scale-[1.2] transition duration-500  ' />
          <div className='absolute top-0 left-0 h-full w-full rounded-xl bg-[rgba(0,0,0,0.4)] group-hover:bg-[rgba(0,0,0,0.6)]'></div>
          <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center '>
            <h1 className='text-gray-100 vertical-line text-5xl font-custom-two opacity-0 group-hover:opacity-100 select-none pointer-events-none transition duration-150'>Pubg UC</h1>
          </div>
        </div>

        <div ref={mlRef} className="h-full w-[30%] bg-theme-foreground relative overflow-hidden group rounded-xl border-4 border-black">
          <img src={mobileLegendsImage} alt="" className='h-full w-full rounded-xl group-hover:scale-[1.2] transition duration-500  ' />
          <div className='absolute top-0 left-0 h-full w-full rounded-xl bg-[rgba(0,0,0,0.2)] group-hover:bg-[rgba(0,0,0,0.6)]'></div>
          <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center'>
            <h1 className='text-gray-100 vertical-line text-4xl font-custom-two opacity-0 group-hover:opacity-100 select-none pointer-events-none transition duration-150'>ML Diamonds</h1>
          </div>
        </div>

        <div className="h-full w-1/2 flex flex-wrap-reverse">
          <div ref={codRef} className="h-[40%] mt-[1%] w-full bg-theme-foreground relative overflow-hidden group rounded-xl border-4 border-black">
            <img src={callOfDutyImage} alt="" className='h-full w-full rounded-xl group-hover:scale-[1.2] transition duration-500 ' />
            <div className='absolute top-0 left-0 h-full w-full rounded-xl bg-[rgba(0,0,0,0.4)] group-hover:bg-[rgba(0,0,0,0.6)]'></div>
            <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center '>
            <h1 className='text-gray-100 text-5xl font-custom-two opacity-0 group-hover:opacity-100 select-none pointer-events-none transition duration-150'>CallOfDuty CP</h1>
          </div>
        </div>


          <div ref={audioBookRef}  className="h-[58%] w-[48%] bg-theme-foreground relative overflow-hidden group rounded-xl border-4 border-black">
            <img src={audioBookImage} alt="" className='h-full w-full rounded-xl group-hover:scale-[1.2] transition duration-500  ' />
            <div className='absolute top-0 left-0 h-full w-full rounded-xl bg-[rgba(0,0,0,0.4)] group-hover:bg-[rgba(0,0,0,0.6)]'></div>
            
            <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center '>
              <h1 className='text-gray-100 text-5xl font-custom-two opacity-0 group-hover:opacity-100 select-none pointer-events-none transition duration-150'>AudioBooks</h1>
            </div>
          </div>

          <div ref={ffRef} className="h-[58%] w-[48%] bg-theme-foreground relative overflow-hidden group ml-[4%] rounded-xl border-4 border-black">
            <img src={freeFireImage} alt="" className='h-full w-full rounded-xl group-hover:scale-[1.2] transition duration-500 ' />
            <div className='absolute top-0 left-0 h-full w-full rounded-xl bg-[rgba(0,0,0,0.4)] group-hover:bg-[rgba(0,0,0,0.6)]'></div>

            <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center '>
              <h1 className='text-gray-100 text-4xl font-custom-two opacity-0 group-hover:opacity-100 select-none pointer-events-none transition duration-150'>FreeFire Diamonds</h1>
            </div>
          </div>
        </div>


      </div>


    </div>
  )
}

export default Mission
