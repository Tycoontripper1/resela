import React from 'react'
import { Header } from '../components/Header'
import { Showcase } from '../components/Showcase'
import { PopularProduct } from '../components/popular product/PopularProduct'
import { SubscribeComponent } from '../components/SubscribeComponent'
import { Footer } from '../components/Footer'

export const MarketPlace = () => {
  return (
    <div className='w-full'>
          <Header /> 
          <Showcase />
          <PopularProduct />
          <SubscribeComponent />
          <Footer />
    </div>
  )
}
