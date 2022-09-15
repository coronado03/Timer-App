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
          <div className="flex flex-col items-center justify-center">

            <div className="flex">
              <h1 className="text-9xl text-white">{days}</h1>
              <p className="self-center mt-5	ml-[-25px] text-rose-600">Days</p>
            </div>
            <div className="flex">
              <h1 className="text-8xl text-white">{hours}</h1>
              <p className="self-end mb-4 text-grey ml-[-25px] text-rose-600">Hours</p>
            </div>
            <div className="flex gap-4 text-4xl text-white">
              <h1>{minutes}</h1>
              <h1>{seconds}</h1>
            </div>

            <div className="text-rose-600">
              <p>minutes & seconds</p>
            </div>




          </div>
        
        </>
      )
}





