import React from 'react'
import Logo from '../Assets/img/logo.png'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'

export const Header = () => {
  return (
    <section className=' header-bg w-full bg-gradient-to-br from-orange-400 to-orange-500'>
         <nav className='container  mx-auto px-6 flex justify-between items-center  pt-6 '>
            <img src={Logo} alt="logo"  className='w-32'/>
            <ul className='md:flex hidden  items-center gap-8 '>
            <li className='text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Features</li>
                <li className='text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                <li className='text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Start For Free</li>
                <li className='text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Log In</li>
            </ul>
        </nav>
        <div className='flex container mx-auto px-6 py-6 '>
            <div className='text-white border-none flex items-center gap-4 bg-catBg px-4 py-2 rounded-l-full w-2/5'>
                <h3>Browse Categories</h3>
                <MdOutlineKeyboardArrowDown />

            </div>
            <input type="text" className='w-4/5 py-2 px-4  border-none outline-none' placeholder='Search Products, Businesses, Categories...' />
            <div className='bg-black w-[10%]  flex items-center border-none  rounded-r-full '>
                <AiOutlineSearch className='text-white mx-auto ' />
            </div>
        </div>
    </section>
   
    
  )
}
