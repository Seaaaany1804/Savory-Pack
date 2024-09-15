import React from 'react'
import '../pages/css/background.css'
import { TiSocialFacebook, TiSocialTwitter  } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaGooglePlay, FaAppleAlt  } from "react-icons/fa";

function ContactPage() {
  return (
    <div className='h-screen' id='background'>

    {/* Title */}
      <div className='pt-[100px] flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-center text-[44px] font-dm-serif font-semibold text-white tracking-wider'> Join Our Member and <br/>
            Get Discount Up to 50% </h1>
        </div>

        <div className='flex justify-center space-x-4 pt-4 w-[100%]'>
            <input type="email" name="Email" placeholder='Email' id="1"  
            className='bg-[#FFF] p-4 rounded-2xl text-[18px] w-[400px] text-black font-poppins relative'/>
            <button type="button" className='bg-primary text-white text-[20px] font-poppins font-semibold rounded-2xl w-[140px]'> Sign Up </button>
        </div>
      </div>

      {/* Company Details */}
      <div className='flex justify-center mt-[100px]'>
        <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr] px-[150px] w-full justify-items-center'>
          {/* Logo */}
          <div> 
            <div>
            <h1 className='text-white text-[20px] font-semibold font-poppins'> Savory Pack Meal Kits </h1>
            </div> 

            <h1 className='text-white text-[20px] mt-[60px] font-dm-serif'> Jalan Gatak, Tamantirto, Kasihan, <br/>
            Bantul, D. I. Yogyakarta 553183</h1>

            <div className='flex space-x-8 mt-8'>
              <TiSocialFacebook className='text-[52px] p-2 text-black bg-white rounded-full'/>
              <AiFillInstagram className='text-[52px] p-2 text-black bg-white rounded-full'/>
              <TiSocialTwitter className='text-[52px] p-2 text-black bg-white rounded-full'/>
            </div>
          </div>

          {/* Company */}
          <div className='flex flex-col'>
            <div>
              <h1 className='text-white text-[20px] font-semibold font-poppins'> Company </h1>
            </div>
            
            <div className='mt-[60px]'>
              <h1 className='text-lightgray text-[20px] font-poppins'> About Us </h1>
              <h1 className='text-lightgray text-[20px] font-poppins mt-4'> Certification </h1>
              <h1 className='text-lightgray text-[20px] font-poppins mt-4'> How It Works </h1>
              <h1 className='text-lightgray text-[20px] font-poppins mt-4'> Careers </h1>
            </div>
          </div>

          {/* Policy */}
          <div className='flex flex-col'>
            <div>
              <h1 className='text-white text-[20px] font-semibold font-poppins'> Policy </h1>
            </div>
            
            <div className='mt-[60px]'>
              <h1 className='text-lightgray text-[20px] font-poppins'> FAQ </h1>
              <h1 className='text-lightgray text-[20px] font-poppins mt-4'> Contact </h1>
              <h1 className='text-lightgray text-[20px] font-poppins mt-4'> Shipping </h1>
              <h1 className='text-lightgray text-[20px] font-poppins mt-4'> Privacy </h1>
            </div>
          </div>

          {/* Get In Touch */}
          <div className='flex flex-col'>
            <div>
              <h1 className='text-white text-[20px] font-semibold font-poppins'> Get In Touch </h1>
            </div>
            
            <div className='mt-[60px]'>
              <h1 className='text-lightgray text-[20px] font-poppins'> +1 0822 3498 1535 </h1>
              <h1 className='text-lightgray text-[20px] font-poppins mt-4'> Sales@Thechef.com </h1>
            </div>
          </div>

          {/* Discover Our App */}
          <div className='flex flex-col'>
            <div>
              <h1 className='text-white text-[20px] font-semibold font-poppins'> Discover Our App </h1>
            </div>
            
            <div className='flex space-x-4 mt-[60px]'>
              <FaGooglePlay className='text-[52px] p-3 text-black bg-white rounded-full'/>
              <FaAppleAlt className='text-[52px] p-3 text-black bg-white rounded-full'/>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[100px] flex justify-center'>
        <div className='border-[1px] w-[90%] border-[#FFF]'></div>
      </div>

      <div className='flex flex-col justify-center items-center h-[15%]'>
        <h1 className='text-white font-poppins tracking-widest text-[14px]'> © 2023 SAVORY PACK MEAL KITS | ALL RIGHTS RESERVED </h1>
        <h1 className='text-white font-poppins tracking-widest text-[14px]'> MADE BY SEAN DEXTER LAGMAY </h1>
      </div>
      

    </div>
  )
}

export default ContactPage
