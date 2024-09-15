import React from 'react'
import NavBar from '../components/NavBar'
import '../pages/css/background.css'
import foodPan from '../assets/foodpan.png'

const HomePage = () => {
  return (
    <div id='background' className='h-screen'>
      <NavBar/>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col justify-center items-center h-[80vh]'>
          <div>
            <h1 className='text-white font-poppins font-bold text-[80px]'> A Chef In Every <br/>
              Tasty Meal Box </h1>

            <h1 className='mt-[40px] text-white font-poppins font- text-[20px] tracking-wider'> 
              Get pre-portioned ingredients  for Savory Pack Meal Kits <br/>
              best recipes delivered direct to your door! </h1>
  
            <div className='flex space-x-8'>
             <button type="button" className='font-poppins tracking-wide text-[18px] text-white bg-primary p-4 px-6 mt-12 rounded-xl'> 
              Select Program </button> 
              <button type="button" className='font-poppins tracking-wide text-white bg-transparent p-4 text-[18px] px-12 mt-12 border-[1px] border-white rounded-xl'> 
              View Menu </button> 
            </div>
          </div>
        </div>

        <div className='relative'>
          <img src={foodPan} alt="Food Pan" className='absolute w-[1000px] drop-shadow-2xl' />
        </div>
      </div>
    </div>
  )
}

export default HomePage
