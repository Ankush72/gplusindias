import React from 'react'
import samllAppliances from "../image/website Small Appliances design.jpg"

// small appliances banner

const LEDBanner = () => {
  return (
    <div className='bg-[#d9dada]'>
    <div className="w-full h-[1px] bg-[#800000] "></div>

    <div className='bg-center'>
        <h1 className="font-bold text-2xl  uppercase text-center tracking-wider mb-3 mt-3">
          Small appliances
        </h1>
        <img className='w-full h-full' src={samllAppliances} alt="" />
        
    </div>
    </div>
  )
}

export default LEDBanner