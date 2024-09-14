import React from 'react'
import leftPlant from '../assets/leftPlant.png'
import foodBackground from '../assets/foodbackground.png'
import foodBowl from '../assets/foodBowl.png'

function AboutPage() {
  return (
    <div className='h-screen bg-gray'>
      <div className='grid grid-cols-2'>
        <div>
        <div className='relative'>
            <img src={leftPlant} alt="Left Plant" className='absolute' />
            <img src={foodBackground} alt="" className='absolute rounded-l-full brightness-[0.1] right-[110px] top-[220px] w-[500px] h-[500px]'/>
            <img src={foodBowl} alt="Left Plant" className='absolute right-[7px] top-[170px]' />
          </div>

          
        </div>

        <div className='flex ml-24 items-center h-[100vh]'>
          <div>
            <h1 className='text-black font-poppins font-bold text-[50px]'> We Deliver Anywhere <br/> 
            in the Tri-State Area</h1>
            <h1 className='mt-[20px] text-[#b0acac] font-poppins text-[20px] tracking-wider'> Each Fresh meal is perfectly sized for 1 person to enjoy <br/>
            at 1 sitting. Our fully-prepared meals are delivered<br/>
            fresh, and ready to eat in 3 minutes.</h1>

            <div className='mt-6 flex space-x-8'>
              <button type="button" className='font-poppins tracking-wide text-[18px] text-white bg-primary p-4 px-6 rounded-xl'> 
                Contact Us </button>
              <button type="button" className='font-poppins tracking-wide text-[18px] text-black bg-[#FFFFFF] border-[1px] border-black p-4 px-6 rounded-xl'> 
                View Menu </button>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default AboutPage
