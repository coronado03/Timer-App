import { useEffect, useState } from "react";


export default function Timer() {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("09/27/2022 4:00:0");
    
        const interval = setInterval(() => {
          const now = new Date();
          const difference = target.getTime() - now.getTime();
    
          const d = Math.floor(difference / (1000 * 60 * 60 * 24));
          setDays(d);
    
          const h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          setHours(h);
    
          const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          setMinutes(m);
    
          const s = Math.floor((difference % (1000 * 60)) / 1000);
          setSeconds(s);
    
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

          
          <div className="grid grid-cols-4 h-screen lg:mx-10 justify-items-center place-content-center gap-x-px gap-y-px text-5xl	md:text-8xl text-white">        
              <h1 {...memoryHoveringProps} className='transition duration-300 ease-in-out hover:text-3xl hover:text-fuchsia-500	 col-span-4 mb-14 text-3xl md:text-4xl text-yellow-400'>

              {memoryHovering ? "if we keep holding onto yesterday, what are we going to be tomorrow?" : "思い出はいらない"}
              </h1>
              
              <h1 className="font-bold hover:text-rose-500	transition duration-500 ease-in-out">{days}</h1>
              <h1 className="font-bold hover:text-rose-500	transition duration-500 ease-in-out">{hours}</h1>
              <h1 className="font-bold hover:text-rose-500	transition duration-500 ease-in-out">{minutes}</h1>
              <h1 className="font-bold hover:text-rose-500	transition duration-500 ease-in-out">{seconds}</h1>
              
              <h4 className="text-base">Days</h4>    
              <h4 className="text-base">Hours</h4>  
              <h4 className="text-base">Minutes</h4>  
              <h4 className="text-base">Seconds</h4>   




          </div>
        
        </>
      )
}





