import React from 'react'
import tv1 from "../image/Screen Size 24-32-40.png"
import tv2 from "../image/Screen Size 43-50.png"
import tv3 from "../image/Screen Size 55-65-75-85 (1).png"
import { Link } from 'react-router-dom'


const Banner3 = () => {
  return (
    <div className='pt-2 pb-10 pl-10 pr-10  bg-[#d9dada]'>
        <div className='flex flex-wrap items-center justify-center md:justify-between space-y-1 space-x-2 md:space-x-0'>
            <Link to="/luxury-appliances" className=' p-2  w-auto md:w-[350px] md:h-[300px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center'>
            <img className='' src={tv1} alt="" />
            <h1 className='font-semibold text-base uppercase text-center mt-2'>smart  tv</h1>
            <h1 className='font-medium text-sm uppercase text-center'>24" / 32" / 40"</h1>
            </Link>
            <Link to="/luxury-appliances" className='p-2  w-auto md:w-[350px] md:h-[300px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center '>
            <img className='' src={tv2} alt="" />
            <h1 className='font-semibold text-base uppercase text-center mt-2'>4k UHD </h1>
            <h1 className='font-medium text-sm uppercase text-center'>43" / 50" </h1>
            </Link>
            <Link to="/luxury-appliances" className='p-2  w-auto md:w-[350px] md:h-[300px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center '>
            <img className='' src={tv3} alt="" />
            <h1 className='font-semibold text-base uppercase text-center mt-2'>4k QLED</h1>
            <h1 className='font-medium text-sm uppercase text-center'>55" / 65" / 75"/ 85"</h1>
            </Link>
        </div>
    </div>
  )
}

export default Banner3