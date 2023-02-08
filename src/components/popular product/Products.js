import React from 'react'
import {FaBookmark} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'

export const Products = ({item}) => {
  return (
    <div className=' flex  items-center  border rounded-md border-black flex-col justify-center '>
    <img src={item.imageUrl} alt="" className=' p-4 object-fit md:h-64 h-32' />
    <div className='flex flex-col w-full p-2 text-sm bg-purpleBg text-white   relative'>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <AiFillStar className='text-yellow-400' />
              <AiFillStar className='text-yellow-400' />
              <AiFillStar className='text-yellow-400' />
              
            </div>
            <p className='-mt-10'>Save</p>
        </div>
        <div className='absolute right-1 w-10 h-10 p-1 -top-4 product bg-cardWhite rounded-full '>
           <div className='flex items-center justify-center h-full'>
           <FaBookmark className='text-center text-gray-400 text-xl' />
           </div>
        </div>
    </div>
</div>
  )
}
