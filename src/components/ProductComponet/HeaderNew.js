import React from 'react'
import Logo from '../../Assets/img/logo.png'
import {FiPhoneCall} from 'react-icons/fi'




export const HeaderNew = () => {
  return (
    <div>
         <section className=' header-bg w-full bg-gradient-to-br from-orange-400 to-orange-500'>
         <nav className='container  mx-auto px-6 flex justify-between items-center  py-6 '>
            <img src={Logo} alt="logo"  className='w-32'/>

            <div className='md:flex hidden text-white  gap-2 justify-between items-center'>
                            <FiPhoneCall className='text-4xl' />
                            <div>
                                <h2>Call a <span className='text-xl text-linkColor'>RESELA</span> Agent :</h2>
                                <p>(+234) - 070-695-503-72</p>
                            </div>
                        </div>
           
        </nav>

    </section>
    </div>
  )
}
