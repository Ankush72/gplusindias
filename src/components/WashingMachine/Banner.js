import React from 'react'

import washingMachine1 from "../image/washingMachine22.png"
import washingMachine2 from "../image/Washing_Machine23.png"
import washingMachine3 from "../image/Washing_Machine_24.png"


const Banner = () => {
  return (
    <div className='mb-10 pl-10 pr-10'>
        <h1 className='text-center font-bold text-4xl mb-10 capitalize'>Fully Automatic Washing machine</h1>
        <div className='flex flex-wrap items-center justify-center md:justify-between space-y-2 space-x-3 md:space-x-0'>
            <div className=' flex flex-col items-center justify-cente pb-5'>
            <img className='w-auto sm:w-[300px] md:w-[350px] rounded-lg' src={washingMachine1} alt="" />
            <h1 className='font-semibold text-xl'>7 Kg</h1>
            </div>
            <div className=' flex flex-col items-center justify-center pb-5'>
            <img className='w-auto sm:w-[300px] md:w-[350px] rounded-lg' src={washingMachine2} alt="" />
            <h1 className='font-semibold text-xl'>6 Kg</h1>

            </div>
            <div className=' flex flex-col items-center justify-center pb-5 '>
            <img className='w-auto sm:w-[300px] md:w-[350px] rounded-lg' src={washingMachine3} alt="" />
            <h1 className='font-semibold text-xl'>6 Kg</h1>

            </div>
        </div>
    </div>
  )
}

export default Banner