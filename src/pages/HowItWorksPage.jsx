import React from 'react'
import dash from '../assets/dash.png'
import chooseMeals from '../assets/chooseMeals.png'
import weDeliver from '../assets/weDeliver.png'
import cookEnjoy from '../assets/cookEnjoy.png'

function HowItWorksPage() {
  return (
    <div className='h-screen bg-gray'>
      {/* Title */}
      <div className='flex flex-col justify-center w-full items-center'>
        <h1 className='text-center pt-24 text-[48px] font-semibold tracking-wider font-dm-serif'> Watch It Works</h1>
        <img src={dash} alt="Dash" className='w-[450px]'/>
      </div>

      <div className='flex justify-center space-x-40'> 
        {/* First Card View */}
        <div className='bg-[#FFFFFF] px-[30px] py-[70px] rounded-[25px] text-center flex flex-col items-center '>
          <img src={chooseMeals} alt="Choose Your Meals" className='w-[350px]' />
          <h1 className='text-[24px] font-semibold font-poppins'> Choose Your Meals </h1>
          <h1 className='mt-2 tracking-wider font-poppins text-[20px]'> 20+ menus to choose from </h1>
        </div>

        {/* Second Card View */}
        <div className='bg-[#FFFFFF] px-[30px] py-[100px] mt-20 rounded-[50px] text-center flex flex-col items-center'>
        <img src={weDeliver} alt="We Deliver" className='w-[300px] ' />
          <h1 className='text-[24px] font-semibold font-poppins'> We Deliver It To You </h1>
          <h1 className='mt-2 tracking-wider font-poppins text-[20px]'> Choose your dates for delivery </h1>
        </div>

        {/* Third Card View */}
        <div className='bg-[#FFFFFF] px-[30px] py-[100px] rounded-[50px] text-center  items-center'>
        <img src={cookEnjoy} alt="Cook Enjoy" className='w-[400px]' />
          <h1 className='text-[24px] font-semibold font-poppins'> Cook & Enjoy </h1>
          <h1 className='mt-2 tracking-wider font-poppins text-[20px]'> Eat your freshly cooked meal </h1>
        </div>

      </div>
    </div>
  )
}

export default HowItWorksPage
