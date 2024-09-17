import React from 'react'
import sLogo from '../assets/savorypack-logo.png'
import { CiShoppingCart,CiSearch, CiUser   } from "react-icons/ci";

function NavBar() {
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Menu", path: "menu" },
    { link: "How it works", path: "how it works" },
    { link: "About", path: "about" },
    { link: "FAQs", path: "fAQs" },
    { link: "Contact", path: "contact" },
  ]

  return (
    <div>
      <div className='flex justify-center space-x-[280px] items-center h-1/6 px-[120px]'>
        <div>
          <img src={sLogo} alt="Savory Pack Logo" className='w-[150px]'/>
        </div>
        

          {/* Links */}
        <div className='flex justify-center'>
          <ul className='flex space-x-14'>
            {navItems.map((item, index) => (
                <li key={index}>
                  <a href={`#${item.path}`} className='text-white text-xl font-poppins tracking-wider'> {item.link} </a>
                </li>
              ))}
          </ul>
        </div>

        <div className='flex space-x-4'>
        <CiSearch className='text-white text-4xl'/>
        <CiShoppingCart className='text-white text-4xl'/>
        <CiUser className='text-white text-4xl'/>
        </div>
      </div>
    </div>
  )
}

export default NavBar
