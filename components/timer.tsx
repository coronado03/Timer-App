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

      return(
        <>
        
          <div className="grid grid-cols-4 h-screen justify-items-center place-content-center gap-x-px text-5xl	md:text-8xl text-white">        
              <h4 className="text-base">Days</h4>    
              <h4 className="text-base">Hours</h4>  
              <h4 className="text-base">Minutes</h4>  
              <h4 className="text-base">Seconds</h4>   

              <h1 className="font-bold">{days}</h1>
              <h1 className="font-bold">{hours}</h1>
              <h1 className="font-bold">{minutes}</h1>
              <h1 className="font-bold">{seconds}</h1>


          </div>
        
        </>
      )
}





