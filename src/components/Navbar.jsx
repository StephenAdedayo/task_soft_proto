import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='p-5 bg-white shadow flex justify-between items-center'>
      <p className='font-medium'>Home</p>

      <div className='flex items-center gap-5'>
        <div className='p-1 rounded-full border border-[#1b1b1b] flex items-center gap-3'>
          <img src={assets.search} alt="" />
          <input type="text" className='flex-1 outline-none' placeholder='Search'/>
        </div>
        
        <img className='w-[20px]' src={assets.plus_circle} alt="" />
        <img src={assets.bell} alt="" />
        <img src={assets.chart_pie} alt="" />

      </div>
    </div>
  )
}

export default Navbar
