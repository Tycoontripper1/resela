import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { MarketPlace } from './pages/MarketPlace'
import { ProductPlace } from './pages/ProductPlace'


export const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<MarketPlace />} />
          <Route path='shops' element={<ProductPlace />} />
      </Routes>

    </div>
  )
}
