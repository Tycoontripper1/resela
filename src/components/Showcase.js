import React from 'react'
import { Data } from '../Assets/Data'


export const Showcase = () => {
  return (
    <div className='container mx-auto px-6 mt-6 md:mb-12 '>
        <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4  justify-center items-center w-full gap-4 py-12 px-6 bg-showCaseBg rounded-lg drop-shadow-lg'>
           {
            Data.map((item)=>{
                return(
                    <div key={item.id} className=' p-2 w-32 h-auto flex flex-col items-center'>
                    <img src={item.imageUrl} alt="showcase img" />
                    <p className='text-base'>{item.name}</p>
                </div>
                )
            })
           }
        </div>
    </div>
  )
}
