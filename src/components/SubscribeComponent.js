import React from 'react'

export const SubscribeComponent = () => {
  return (
    <div className='container mx-auto px-6  mt-6 mb-2 '>
        <div className='flex justify-center flex-col w-full md:px-0 px-2 gap-3 bg-cardWhite subscribe-shadow   py-12 items-center'>
        <div>
        <h2 className='text-2xl tracking-wide md:text-3xl font-semibold '>Get instant notifications on updated categories</h2>
        <p className='tracking-widest mb-8 font-semibold'>New products are always available , be the first to grab the <br /> opportunity by subscribing with your email address .</p>

        <form action="#" >
            <label htmlFor="email" className='font-semibold'>Email Address:</label>
                <div className='mt-3 flex justify-between md:gap-8 gap-2 md:flex-row flex-col'>
                    <input type="email" name="email" id="email" placeholder='Type in your email address' className='p-3 px-12 border-2 border-black outline-none  rounded-full md:w-2/3 w-full ' />
                    <button type='submit' className='py-4  rounded-full bg-purpleBg w-1/2 text-white text-xl'>Subscribe</button>
                </div>
        </form>
        </div>
        </div>
    </div>
  )
}
