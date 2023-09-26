import React from 'react'

import washingMachine1 from "../image/washingMachine22.png"
import washingMachine2 from "../image/washingMachine6kg.png"
import washingMachine3 from "../image/Washing_Machine_24.png"
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <div className='mb-10 pl-10 pr-10'>
        <h1 className='text-center font-bold text-4xl mb-10 capitalize'>Fully Automatic Washing machine</h1>
        <div className='flex flex-wrap items-center justify-center md:justify-between '>
            <Link to="/luxury-appliances" className='p-2  w-auto md:w-[350px] md:h-[400px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between'>
            <img className='  w-[350px]   rounded-lg' src={washingMachine1} alt="" />
            <h1 className='font-semibold text-xl'>7 Kg</h1>
            </Link>
            <Link to="/luxury-appliances" className='p-2  w-auto md:w-[350px]  md:h-[400px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between'>
            <img className='  w-[350px]   rounded-lg' src={washingMachine2} alt="" />
            <h1 className='font-semibold text-xl'>6 Kg</h1>

            </Link>
            <Link to="/luxury-appliances" className='p-2  w-auto md:w-[350px] md:h-[400px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between '>
            <img className='  w-[350px]   rounded-lg' src={washingMachine3} alt="" />
            <h1 className='font-semibold text-xl'>6 Kg</h1>

            </Link>
        </div>
    </div>
  )
}

export default Banner