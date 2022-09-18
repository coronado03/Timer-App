import { useEffect } from "react";


export default function Header() {

return(
  <>
  <div className="group hover:text-[#CC1C1C] flex flex-col text-white md:col-span-2 md:col-start-2 md:self-start">
    
    <div className="flex self-end mt-5">
      <button className="self-center border-2 px-2 md:px-5 rounded-full mb-5 h-[35%] mr-[-94px] md:mr-[-110px] z-10 bg-black text-xs md:text-base group-hover:border-[#CC1C1C] group-hover:translate-y-3 transition ease-in duration-300">また会えますように</button>
      <h1 className="text-8xl md:text-[9rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[15rem] mt-[-25px] outline-text transition ease-in-out">Cześć</h1>
    </div>
    <div className="mt-[-30px] relative self-start md:self-end">
      <h1 className="text-8xl md:text-[9rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[15rem] font-extrabold outline-text ml-[-0px] transition ease-in-out">Polska</h1>
      <button className="absolute self-center border-2 px-2 md:px-5 rounded-full h-[30%] md:h-[20%] left-[45%] lg:left-[50%] top-[40%] z-10 bg-black text-xs md:text-base leading-3 group-hover:border-[#CC1C1C] group-hover:translate-y-3 transition ease-in duration-300">New Adventures</button>
    </div>




  </div>
  </>

)
}
