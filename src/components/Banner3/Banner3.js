import React from 'react'
import tv1 from "../image/LED_TV1.png"
import tv2 from "../image/LED_TV2.png"
import tv3 from "../image/LED_TV3.png"
import { Link } from 'react-router-dom'


const Banner3 = () => {
  return (
    <div className='mt-20 mb-10 pl-10 pr-10'>
        <h1 className='text-center font-bold text-4xl capitalize'>VYOM Smart LED TV</h1>
        <div className='flex flex-wrap items-center justify-center md:justify-between space-y-2 space-x-3 md:space-x-0'>
            <Link to="/luxury-appliances" className=' p-2  w-auto md:w-[350px] md:h-[400px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between'>
            <img className='' src={tv1} alt="" />
            </Link>
            <Link to="/luxury-appliances" className='p-2  w-auto md:w-[350px] md:h-[400px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between'>
            <img className='' src={tv2} alt="" />
            </Link>
            <Link to="/luxury-appliances" className='p-2  w-auto md:w-[350px] md:h-[400px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between'>
            <img className='' src={tv3} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Banner3