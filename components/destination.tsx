import { useEffect } from "react";


export default function Destination() {

return(
  <>
    <div className="group flex flex-col hover:scale-110 hover:text-[#CC1C1C] text-white font-secondary w-[90%] gap-4 items-center place-self-center md:place-self-center md:justify-self-end	mb-5 md:col-span-2 md:col-start-2 md:col-end-4 lg:place-self-center transition ease-in-out">
      <div className="flex flex-col lg:mr-8">
        <h4 className="rounded-full border mr-7 md:text-xl lg:text-2xl xl:text-3xl border-white pl-3 pr-8 w-60 md:w-72 lg:w-80 xl:w-96 group-hover:border-[#CC1C1C]">Sebastian Coronado</h4>
        <p className="text-[0.6rem] ml-1 mt-1">Name</p>
      </div>

      <div className="flex flex-row gap-x-12 md:gap-x-8 lg:gap-x-16 xl:mr-3">
        <div className="flex flex-col">
          <h4 className="rounded-full border md:text-xl lg:text-2xl xl:text-3xl border-white pl-3 pr-8 md:pr-12 group-hover:border-[#CC1C1C]">Honduras</h4>
          <p className="text-[0.6rem] ml-1 mt-1">Departure</p>
        </div>

        <div className="flex flex-col">
          <h4 className="rounded-full border md:text-xl lg:text-2xl xl:text-3xl border-white pl-3 pr-8 md:pr-12 group-hover:border-[#CC1C1C]">Polonia</h4>
          <p className="text-[0.6rem] ml-1 mt-1">Arrival</p>
        </div>

      </div>


    </div>
  </>

)
}
