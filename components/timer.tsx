import { useEffect, useState } from "react";


export default function Timer() {

    const [days, setDays] = useState('0'); 
    const [hours, setHours] = useState('0');
    const [minutes, setMinutes] = useState('0');
    const [seconds, setSeconds] = useState('0');

    useEffect(() => {
        const target = new Date("09/27/2022 4:00:0");
    
        const interval = setInterval(() => {
          const now = new Date();
          const difference = target.getTime() - now.getTime();
    
          const d = Math.floor(difference / (1000 * 60 * 60 * 24));
          const da = String(d).padStart(2, '0');
          setDays(da);
    
          const h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const ha = String(h).padStart(2, '0');
          setHours(ha);
    
          const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const mi = String(m).padStart(2, '0');
          setMinutes(mi);
    
          const s = Math.floor((difference % (1000 * 60)) / 1000);
          const se = String(s).padStart(2, '0');
          setSeconds(se);
    
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);


      function useHover() {
        const [hovering, setHovering] = useState(false)
        const onHoverProps = {
          onMouseEnter: () => setHovering(true),
          onMouseLeave: () => setHovering(false),
        }
        return [hovering, onHoverProps]
      }

      const [memoryHovering, memoryHoveringProps] = useHover()


      return(
        <>
          <div className="group flex flex-col items-center mr-10 place-self-end md:place-self-center md:mr-0 md:ml-12 md:row-span-2 md:row-start-1 md:row-end-3 md:col-start-1 md:mb-20">

            <div className="flex mb-[-19px]">
              <h1 className="text-9xl md:text-[9rem] lg:text-[11rem] xl:text-[13rem] text-white group-hover:text-red-500 transition ease-in-out">{days}</h1>
              <p className="self-center mt-5 text-[43px] ml-[-35px] group-hover:translate-x-6 text-white outline-text transition ease-in-out">days</p>
            </div>
            <div className="flex mb-[-25px]">
              <h1 className="text-8xl md:text-[7rem] lg:text-[8rem] xl:text-[10rem] text-white group-hover:text-red-500 transition ease-in-out">{hours}</h1>
              <p className="self-end mb-4 text-[43px] mt-9 text-grey ml-[-45px] group-hover:translate-x-6 text-white outline-text transition ease-in-out">hours</p>
            </div>
            <div className="flex gap-4 mr-14 text-4xl md:text-[2.8rem] lg:text-[3.4rem] xl:text-[3.8rem] md:mt-5 lg:mt-7 text-white">
              <h1 className="group-hover:text-red-500 transition ease-in-out">{minutes}</h1>
              <h1 className="group-hover:text-red-500 transition ease-in-out">{seconds}</h1>
            </div>

            <div className="text-white">
              <p className="text-xs lg:mt-2 group-hover:translate-x-6 transition ease-in-out">minutes & seconds</p>
            </div>




          </div>
        
        </>
      )
}





