import React from 'react'
import { CiCircleMinus } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

function FAQsPage() {
  return (
    <div className='h-screen bg-[#FFF]'>
      {/* Title */}
      <div className='flex justify-center pt-[40px] space-x-24'>
        <div>
          <h1 className='font-dm-serif text-[60px] font-semibold tracking-wider'> Frequently <br/> Asked Questions</h1>
        </div>
        
        <div className='flex justify-between w-[100vh]'>
            <div className='mt-auto mb-4'>
                <h1 className='text-lightgray text-[24px] font-dm-serif tracking-wider'> Check out our frequently asked <br/>
                questions for answers.</h1>
            </div>

            <div className='mt-auto mb-4'>
                <button type="button" className='bg-primary p-4 text-white rounded-xl drop-shadow-lg text-[20px] px-[40px] font-poppins tracking-wider'> Contact Us </button>
            </div>
        </div>
      </div>

      {/* Questions Card View */}
      <div className='flex flex-col justify-center items-center mt-10'>
        
        {/* 1st View */}
        <div className='w-[82%] h-[200px] rounded-2xl bg-black'>
          <div className='flex justify-between py-[40px] px-[70px]'>
            <div>
              <h1 className='text-white text-[50px] font-poppins font-semibold'> 01 </h1>
            </div>

            <div className='w-[80%]'>
              <h1 className='text-white text-[35px] font-poppins font-semibold'> How does Savory meal kit delivery service work? </h1>
              <h1 className='text-lightgray text-[20px] font-dm-serif mt-2'> Our meal delivery service allows you to skip meal planning and grocery shopping 
                HelloFresh delivers <br/>
                step-by-step recipes and fresh, pre-portioned ingredients.
              </h1>
            </div>

            <div>
              <button type="button"> <CiCircleMinus className='text-[60px] text-white'/> </button>
            </div>            
          </div>          
        </div>

        {/* 2nd View */}
        <div className='w-[82%] h-[170px] bg-gray drop-shadow-lg'>
          <div className='flex justify-between items-center py-[40px] px-[70px]'>
            <div>
              <h1 className='text-lightgray text-[50px] font-poppins font-semibold'> 02 </h1>
            </div>

            <div className='w-[80%]'>
              <h1 className='text-black text-[35px] font-poppins font-semibold'> How much does Gusto cost? </h1>
            </div>

            <div>
              <button type="button"> <GoPlus className='text-[60px] text-black'/></button>
            </div>            
          </div>          
        </div>

        {/* 3rd View */}
        <div className='w-[82%] h-[170px] rounded-b-2xl bg-gray drop-shadow-lg'>
          <div className='flex justify-between items-center py-[40px] px-[70px]'>
            <div>
              <h1 className='text-lightgray text-[50px] font-poppins font-semibold'> 03 </h1>
            </div>

            <div className='w-[80%]'>
              <h1 className='text-black text-[35px] font-poppins font-semibold'> Why choose Gusto for your meal kit service? </h1>
            </div>

            <div>
              <button type="button"> <GoPlus className='text-[60px] text-black'/></button>
            </div>            
          </div>          
        </div>        
      </div>

    </div>
  )
}

export default FAQsPage
