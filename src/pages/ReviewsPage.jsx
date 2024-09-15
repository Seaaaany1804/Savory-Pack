import React from 'react'
import '../pages/css/background.css'
import dash from '../assets/dash.png'
import chili from '../assets/chili.png'
import firstProfile from '../assets/firstProfile.png'
import secondProfile from '../assets/secondProfile.png'
import { FaStar } from "react-icons/fa";
import { PiGreaterThanBold, PiLessThanBold  } from "react-icons/pi";

function ReviewsPage() {
  return (
    <div className='h-screen bg-[#FFF] relative'>
        <div className='relative'>
          <img src={chili} alt="" className='absolute right-[100px] top-[10px]' />
        </div>

        <div className='z-20 relative'>
            <div className='flex space-x-24 absolute right-[220px] top-[720px]'> 
                <button type="button" className='cursor-pointer hover:bg-primary hover:text-white hover:rounded-full p-2 text-[60px]'> <PiLessThanBold/> </button>
                <button type="button" className='cursor-pointer hover:bg-primary hover:text-white hover:rounded-full p-2 text-[60px]'> <PiGreaterThanBold/> </button>
            </div>
        </div>

        {/* Black Background */}
        <div className='flex items-center h-[100vh] relative'>
            {/* Testimonials */}
            
            <div className='z-10 flex space-x-4 right-0 mr-[10px] absolute'>
 
                <div className='pt-[50px] pl-[40px]  w-[450px] rounded-2xl drop-shadow-lg  h-[400px] bg-[#FFF]'>
                        <div className='flex items-center space-x-4'>
                            <div>
                                <img src={firstProfile} alt="error" className='w-[80px] rounded-full' />
                            </div>
                            <div className='flex items-center space-x-2'>
                            <FaStar className='text-primary text-[30px]'/>
                            <h1 className='font-poppins font-semibold mt-1 text-[20px]'> 4.9 </h1>
                            </div>
                        </div>

                        <h1 className='mt-4 font-bold text-[24px] font-poppins'> Terenz Jetcem Tuason </h1>
                        <h1 className='leading-[30px] mt-4 text-lightgray text-[20px] font-dm-serif'> " Your recipes are quick and easy to
                        follow... Thanks for giving my family 
                        the gift of a relaxed Mom and delicious food! "</h1>
                    </div>

                    <div className='pt-[50px] pl-[40px]  w-[450px] rounded-2xl drop-shadow-lg h-[400px] bg-[#FFF]'>
                        <div className='flex items-center space-x-4'>
                            <div>
                                <img src={secondProfile} alt="error" className='w-[80px] rounded-full' />
                            </div>
                            <div className='flex items-center space-x-2'>
                            <FaStar className='text-primary text-[30px]'/>
                            <h1 className='font-poppins font-semibold mt-1 text-[20px]'> 4.8 </h1>
                            </div>
                        </div>

                        <h1 className='mt-4 font-bold text-[24px] font-poppins'> James Eduard Sadaya </h1>
                        <h1 className='leading-[30px] mt-4 text-lightgray text-[20px] font-dm-serif'> " Wow! The uChef
                            meal kits have reduced so much of my stress! It's a pleasing not having to face the 
                            pressure of 'what to cook' and 'when to shop' "</h1>
                    </div>  
               </div>
   



            

            
        

          <div id='abackground' className='h-[80vh] w-4/6 relative'>
            <div>

            <div className='w-[900px] pl-[30px] flex flex-col justify-center items-center h-[80vh]'>
                
              {/* Title */}
              <div>
                <h1 className='text-white text-[48px] font-semibold tracking-wider font-dm-serif'>
                  What Our Clients Say?
                </h1>
                <div>
                  <img src={dash} alt="" className='pl-[60px]' />
                </div>
              </div>

              {/* Description */}
              <div className='mt-4'>
                <h1 className='text-lightgray tracking-widest font-dm-serif leading-[60px] text-[25px]'>
                  We provide you with complete meal prep - which includes <br />
                  the prepackaged necessary ingredients for a divine dinner <br />
                  as well as an easy-to-follow recipe guide in beautiful.
                </h1>
              </div>

              {/* Ratings */}
              <div className='w-[790px] flex justify-between'>
                <div>
                  <h1 className='text-[60px] font-semibold font-poppins text-primary'> 15k+</h1>
                  <h1 className='text-white tracking-wider font-poppins text-[24px]'> Happy Customers</h1>
                </div>

                <div>
                  <h1 className='text-[60px] font-semibold font-poppins text-primary'> 17+</h1>
                  <h1 className='text-white tracking-wider font-poppins text-[24px]'> Award Win </h1>
                </div>

                <div>
                  <h1 className='text-[60px] font-semibold font-poppins text-primary'> 30+</h1>
                  <h1 className='text-white tracking-wider font-poppins text-[24px]'> Food Menu </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsPage
