import React from 'react'
import washingMachine1 from "../image/f1.png"
import washingMachine2 from "../image/f2.png"
import washingMachine3 from "../image/f3.png"
import washingMachine4 from "../image/f4.png"
import Ac from "../image/accc.png"
import ToploadWashing  from "../image/top load.png"
import semiAutomatic  from "../image/semi (1).png"
import Micro from "../image/micro oven.png"
import SingleDoor from "../image/Single Door fridge.png"
import { Link } from 'react-router-dom'
// import HomeAppliancesObj from "../HomeAppliances/HomeAppliancesObj";



const Banner = () => {
  // console.log(HomeAppliancesObj)

  return (
    <div className='bg-[#d9dada] pt-5'>
    <div className="w-full h-[1px] bg-[#800000]"></div>

    <div className='pb-5 pl-10 pr-10 mt-5 font-roboto'>
        <h1 className='font-bold text-2xl  uppercase text-center tracking-wider	'>luxury appliances</h1>
        <div className='flex flex-wrap items-center justify-center '>
            <Link to="/luxury-appliances" className='p-5 w-[210px] h-[250px]  m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between'>
            <img className='rounded-lg w-[250px] ' src={washingMachine2} alt="" />
            <h1 className='font-semibold text-base uppercase text-center'>Front Load </h1>
            <h1 className='font-medium text-sm uppercase text-center'>8.5kg</h1>
            </Link>
            <Link to="/luxury-appliances" className='p-5 w-[210px] h-[250px]  m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between'>
            <img className='  w-[250px]   rounded-lg' src={washingMachine3} alt="" />
            <h1 className='font-semibold text-base uppercase'>Bottom freezer</h1>
            <h1 className='font-medium text-sm uppercase text-center'>554L</h1>

            </Link>
            <Link to="/luxury-appliances" className='p-5 w-[210px] h-[250px]  m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between'>
            <img className='  w-[250px]   rounded-lg' src={Ac} alt="" />
            <h1 className='font-semibold text-base uppercase'>Split AC</h1>
            <h1 className='font-medium text-sm uppercase text-center'>2 TON</h1>

            </Link>
        
            <Link to="/luxury-appliances" className='p-5 w-[210px] h-[250px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between '>
            <img className='  w-[250px]   rounded-lg' src={washingMachine4} alt="" />
            <h1 className='font-semibold text-base uppercase' >dessert</h1>
            <h1 className='font-medium text-sm uppercase text-center'>65L</h1>

            </Link>
            <Link to="/luxury-appliances" className='p-5 w-[210px] h-[250px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between '>
            <img className='  w-[250px]   rounded-lg' src={washingMachine1} alt="" />
            <h1 className='font-semibold text-base uppercase'>Dishwasher</h1>
            <h1 className='font-medium text-sm uppercase text-center'>16 place settings</h1>

            </Link>
            <Link to="/luxury-appliances" className='p-5 w-[210px] h-[250px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between '>
            <img className='  w-[250px]   rounded-lg' src={ToploadWashing} alt="" />
            <h1 className='font-semibold text-base uppercase'>Top load</h1>
            <h1 className='font-medium text-sm uppercase text-center'>7.5kg</h1>

            </Link>
            <Link to="/luxury-appliances" className='p-5 w-[210px] h-[250px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between '>
            <img className='  w-[250px]   rounded-lg' src={semiAutomatic} alt="" />
            <h1 className='font-semibold text-base uppercase'>Semi Automatic</h1>
            <h1 className='font-medium text-sm uppercase text-center'>8kg</h1>

            </Link>
         
            <Link to="/luxury-appliances" className='p-5 w-[210px] h-[250px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between '>
            <img className='  w-[250px]   rounded-lg' src={SingleDoor} alt="" />
            <h1 className='font-semibold text-base uppercase'>Forst free</h1>
            <h1 className='font-medium text-sm uppercase text-center'>270L</h1>

            </Link>
            <Link to="/luxury-appliances" className='p-5 w-[210px] h-[250px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between '>
            <img className='  w-[250px]   rounded-lg' src={Micro} alt="" />
            <h1 className='font-semibold text-base uppercase'>Micro oven</h1>
            <h1 className='font-medium text-sm uppercase text-center'>99min cooking timer</h1>

            </Link>
            
        </div>
        </div>
    </div>
  )
}

export default Banner