import React from 'react'
import { PopularProductData } from '../../Assets/Data'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Products } from './Products'


export const PopularProduct = () => {
  return (
    <div className='container mx-auto px-6'>
        <h2 className='my-6'>Popular Product</h2>
        <div className='grid items-center  grid-cols-2 w-full justify-center lg:grid-cols-4 md:grid-cols-3 gap-8 lg:gap-16 '>
         {
            PopularProductData.map((item)=>{
                return(
                 <Products key={item.id} item={item} />
                )
            })
         }
        </div>
        <div className='flex justify-end items-center py-4'>
            <p><a href="#" className='text-black'>more products <AiOutlineArrowRight className='inline' /></a></p>
        </div>
    </div>
    
  )
}
