import React from 'react'
import tv1 from "../image/LED TV 1.png"
import tv2 from "../image/LED TV (2).jpeg"
import tv3 from "../image/LED TV.jpeg"


const Banner3 = () => {
  return (
    <div className='mt-20 mb-10 pl-10 pr-10'>
        <h1 className='text-center font-bold text-4xl capitalize'>VYOM Smart LED TV</h1>
        <div className='flex flex-wrap items-center justify-center md:justify-between space-y-2 space-x-3 md:space-x-0'>
            <div className=' shadow-2xl rounded-lg'>
            <img className='w-auto sm:w-[300px] md:w-[350px] rounded-lg' src={tv1} alt="" />
            </div>
            <div className='shadow-2xl rounded-lg'>
            <img className='w-auto sm:w-[300px] md:w-[350px] rounded-lg' src={tv2} alt="" />
            </div>
            <div className='shadow-2xl rounded-lg'>
            <img className='w-auto sm:w-[300px] md:w-[350px] rounded-lg' src={tv3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner3