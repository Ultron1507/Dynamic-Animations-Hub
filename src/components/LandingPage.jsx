import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div date-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["we Create", "Eye Opening", "Presentations"].map((item, index)=>{
                return <div className='masker'>
                <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-["FoundersGrotesk Semibold"] font-semibold'>
                    {item}
                </h1>
            </div>
            })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies", "From the first pitch to IPO"] .map((item, index)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-lg upercase rounded-full'>Start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
                    <span className='rotate-[45deg]'>       
                <FaArrowUpLong />
                </span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage