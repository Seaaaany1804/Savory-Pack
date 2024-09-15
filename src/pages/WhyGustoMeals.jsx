import React from 'react'
import '../pages/css/background.css'
import dash from '../assets/dash.png'
import { LuCheckCircle } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { LiaCommentSlashSolid } from "react-icons/lia";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { PiCookingPot } from "react-icons/pi";
import { PiFishThin } from "react-icons/pi";

function WhyGustoMeals() {
  return (
    <div>
      <div id='background' className='h-screen'>

        {/* Page Title */}
        <div className='pt-[120px]'>
          <div className='flex flex-col justify-center w-full'>
          <h1 className='text-white text-center font-semibold text-[48px] font-dm-serif tracking-wider'>Why Savory Meals? </h1>  
            <div className='flex justify-center'>
              <img src={dash} alt="" className='w-[450px]'/>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap justify-center gap-[120px] px-[100px] mt-[150px]'>
          <div className='flex space-x-4 items-center w-[400px]'>
            <LuCheckCircle className=' text-black text-[60px] p-3 rounded-full bg-white'/>
            <h1 className='text-white text-[24px] font-poppins tracking-wider'> Easy and Convenient </h1>
          </div>

          <div className='flex space-x-4 items-center w-[400px]'>
            <FaRegEye className=' text-black text-[60px] p-3 rounded-full bg-white'/>
            <h1 className='text-white text-[24px] font-poppins tracking-wider'> Kosher Supervision </h1>
          </div>

          <div className='flex space-x-4 items-center w-[400px]'>
            <LiaCommentSlashSolid className=' text-black text-[60px] p-3 rounded-full bg-white'/>
            <h1 className='text-white text-[24px] font-poppins tracking-wider'> No Commitment </h1>
          </div>

          <div className='flex space-x-4 items-center w-[400px]'>
            <MdOutlineStarBorderPurple500 className=' text-black text-[60px] p-3 rounded-full bg-white'/>
            <h1 className='text-white text-[24px] font-poppins tracking-wider'> Most 5-Star Reviews </h1>
          </div>

          <div className='flex space-x-4 items-center w-[400px]'>
            <PiCookingPot className=' text-black text-[60px] p-3 rounded-full bg-white'/>
            <h1 className='text-white text-[24px] font-poppins tracking-wider'> Fresh and Affordable </h1>
          </div>

          <div className='flex space-x-4 items-center w-[400px]'>
            <PiFishThin className=' text-black text-[60px] p-3 rounded-full bg-white'/>
            <h1 className='text-white text-[24px] font-poppins tracking-wider'> No Skimpin Chicken! </h1>
          </div>
        </div>
      
      


      </div>
    </div>
  )
}

export default WhyGustoMeals
