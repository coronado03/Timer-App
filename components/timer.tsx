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
        <div className="flex flex-col space-y-4 text-4xl text-white">        
            <h2>Days: {days} d</h2>
            <h2>Hours: {hours} h</h2>
            <h2>Minutes: {minutes} m</h2>
            <h2>Seconds: {seconds} s</h2>     
        </div>
 
        
        </>
      )
}





