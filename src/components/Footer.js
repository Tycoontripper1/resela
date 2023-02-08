import React from 'react'
import Logo from '../Assets/img/logo.png'
import {FiPhoneCall} from 'react-icons/fi'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer className='bg-black mt-6'>
        <div className='container mx-auto px-6 py-12'>
            <div className='flex w-full md:flex-row flex-col md:gap-0 gap-3 md:items-start justify-between items-center'>
                {/* LOGO */}
                <div className=''><img src={Logo} alt="logo"  className='w-32'/></div>
                {/*PRODUCT SELLERS  */}
                <div class="flex flex-col items-center md:items-start">
                    <p className='text-white font-semibold'>Product Sellers</p>
                   
                    <a href="#" class="hover:text-brightRed text-gray-200">Product Sellers</a>
                    <a href="#" class="hover:text-brightRed text-gray-200">Product Sellers</a>
                    <a href="#" class="hover:text-brightRed text-gray-200">Product Sellers</a>
                    <a href="#" class="hover:text-brightRed text-gray-200">Product Sellers</a>
               </div>
                    {/* Branding Resources */}
               <div class="flex flex-col items-center md:items-start">
                    <p className='text-white font-semibold'>Branding Resources</p>
                   
                    <a href="#" class="hover:text-brightRed text-gray-200">Product Sellers</a>
                    <a href="#" class="hover:text-brightRed text-gray-200">Product Sellers</a>
                    <a href="#" class="hover:text-brightRed text-gray-200">Product Sellers</a>
               </div>

                            {/* Tips and Tools to build 
                your Business */}   
                  <div class="flex flex-col items-center md:items-start  ">
                        <div className='flex flex-col items-center md:items-start'>
                        <p className='text-white font-semibold'>Tips and Tools to build your Business</p>
                    
                    <a href="#" class="hover:text-brightRed  text-gray-200">Product Sellers</a>
                    <a href="#" class="hover:text-brightRed text-gray-200">Product Sellers</a>
                        </div>

                        <div className='flex text-white mt-12 gap-2 justify-between items-center'>
                            <FiPhoneCall />
                            <div>
                                <h2>Call a <span className='text-xl text-linkColor'>RESELA</span> Agent :</h2>
                                <p>(+234) - 070-695-503-72</p>
                            </div>
                        </div>

                        <div className='text-white gap-5 py-12 flex justify-center items-center text-4xl '>
                            <AiOutlineFacebook className='' />
                            <BsInstagram />
                            <AiFillTwitterSquare />
                        </div>
               </div>

            </div>

            <div class=" text-center mt-6  text-white ">
          Copyrights &copy; 2022, All Rights Reserved
          </div>
        </div>
    </footer>
  )
}
