import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Sidebar from './Sidebar'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
    <div className='p-5 bg-white shadow flex justify-between items-center'>
      <p className='font-medium'>Home</p>

      <div className='flex items-center gap-5'>
        <div className='p-1 rounded-full border hidden  border-[#1b1b1b] lg:flex items-center gap-3'>
          <img src={assets.search} alt="" />
          <input type="text" className='flex-1 outline-none' placeholder='Search'/>
        </div>
        
        <img className='w-[20px]' src={assets.plus_circle} alt="" />
        <img src={assets.bell} alt="" />
         <img className='lg:hidden block' src={assets.search} alt="" />
        <img src={assets.chart_pie} alt="" />
        <div onClick={() => setIsMenuOpen(true)} className='block lg:hidden'>
          <img className='w-[25px]' src="https://cdn-icons-png.freepik.com/256/11693/11693720.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid" alt="" />
        </div>

      </div>
    </div>

    {/* sidebar for smaller screens */}
    <div className={`${isMenuOpen ? "w-[70%]" : "w-0"} block lg:hidden fixed top-0 left-0 transition-all overflow-hidden ease-in-out duration-500 delay-75 z-50 h-full`}>
      <Sidebar />
    </div>

    <div onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"} w-full h-full top-0 fixed right-0 left- bottom-0 transition-opacity lg:hidden block duration-500 delay-75 ease-in-out z-40 bg-opacity-800 bg-gray-200 backdrop-blur-2xl blur-2xl`}>

    </div>
    </>
  )
}

export default Navbar
