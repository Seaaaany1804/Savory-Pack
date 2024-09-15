import React from 'react'
import tomato from '../assets/tomato.png'
import dash from '../assets/dash.png'
import firstFood from '../assets/firstFood.png'

function MenuPage() {
  return (
    <div className='h-screen bg-white'>
      <div>
        <div className='relative'>
            <img src={tomato} alt="error" className='absolute top-[20px] drop-shadow-md' />
        </div>

        <div className='pt-[90px]'>
            <h1 className='text-center text-[48px] font-dm-serif font-semibold tracking-wider'> Favorite Meals </h1>
            <div className='flex justify-center'>
                <img src={dash} alt="error" className='w-[450px]' />
            </div>
        </div>

        <div className='flex space-x-8 justify-center mt-12'> 
           <div>
              <button type="button" className='hover:bg-primary hover:text-white hover:font-semibold hover:border-0 w-[180px] text-[16px] text-lightgray font-poppins tracking-widest rounded-xl bg-white border-2 border-lightgray p-4 '> 
                All Categories </button> 
            </div>
            <div>
              <button type="button" className='hover:bg-primary hover:text-white hover:font-semibold hover:border-0 w-[180px] text-[16px] text-lightgray font-poppins tracking-widest rounded-xl bg-white border-2 border-lightgray p-4 '> 
                Ketogenic </button> 
            </div>    
            <div>
              <button type="button" className='hover:bg-primary hover:text-white hover:font-semibold hover:border-0 w-[180px] text-[16px] text-lightgray font-poppins tracking-widest rounded-xl bg-white border-2 border-lightgray p-4 '> 
                Low Carb </button> 
            </div>    
            <div>
              <button type="button" className='hover:bg-primary hover:text-white hover:font-semibold hover:border-0 w-[180px] text-[16px] text-lightgray font-poppins tracking-widest rounded-xl bg-white border-2 border-lightgray p-4 '> 
                Low Calorie </button> 
            </div>    
            <div>
              <button type="button" className='hover:bg-primary hover:text-white hover:font-semibold hover:border-0 w-[180px] text-[16px] text-lightgray font-poppins tracking-widest rounded-xl bg-white border-2 border-lightgray p-4 '> 
                Plant Based </button> 
            </div>    
            <div>
              <button type="button" className='hover:bg-primary hover:text-white hover:font-semibold hover:border-0 w-[180px] text-[16px] text-lightgray font-poppins tracking-widest rounded-xl bg-white border-2 border-lightgray p-4 '> 
                Trendy </button> 
            </div>        
        </div>

        <div className='flex space-x-8 justify-center mt-[50px]'>
            <div className='bg-[#FFF] p-[25px] pt-[60px] rounded-2xl drop-shadow-md'>
                <div>
                    <img src={firstFood} alt="error" />
                </div>
                <h1 className='p-4 text-center text-[24px] font-dm-serif font-semibold'> Grilled <br/> Chicken Parmesan </h1>
            </div>

            <div className='bg-[#FFF] p-[25px] pt-[60px] rounded-2xl drop-shadow-md'>
                <div>
                    <img src={firstFood} alt="error" />
                </div>
                <h1 className='p-4 text-center text-[24px] font-dm-serif font-semibold'> Grilled <br/> Chicken Parmesan </h1>
            </div>

            <div className='bg-[#FFF] p-[25px] pt-[60px] rounded-2xl drop-shadow-md'>
                <div>
                    <img src={firstFood} alt="error" />
                </div>
                <h1 className='p-4 text-center text-[24px] font-dm-serif font-semibold'> Grilled <br/> Chicken Parmesan </h1>
            </div>

            <div className='bg-[#FFF] p-[25px] pt-[60px] rounded-2xl drop-shadow-md'>
                <div>
                    <img src={firstFood} alt="error" />
                </div>
                <h1 className='p-4 text-center text-[24px] font-dm-serif font-semibold'> Grilled <br/> Chicken Parmesan </h1>
            </div>
        </div>

        <div className='flex justify-center mt-12'>
              <button type="button" className='bg-primary text-white font-semibold w-[220px] text-[16px] font-poppins tracking-widest rounded-xl p-4 '> 
                View Full Menu </button> 
            </div>  



      </div>
    </div>
  )
}

export default MenuPage
