import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='bg-white h-full drop-shadow-sm fixed w-[20%]  p-5'>
      <img src={assets.logo} alt="" />

      <div className='mt-10 space-y-5'>

       <div className='bg-[#E3F5FF] rounded-lg p-2 flex justify-between items-center'>
       <div className='flex items-center gap-3'>
         <img src={assets.icon1} alt="" />
        <p className='text-[#105EF5] text-[14px]'>Home</p>
       </div>
       <img src={assets.vector} alt="" />
       </div>

        <div className='p-2'>
       <div className='flex items-center gap-3'>
         <img src={assets.calender} alt="" />
        <p className='text-[14px]'>Calender</p>
       </div>
       {/* <img src={assets.vector} alt="" /> */}
       </div>

        <div className='p-2'>
       <div className='flex items-center gap-3'>
         <img src={assets.logo2} alt="" />
        <p className='text-[14px]'>Inbox</p>
       </div>
       {/* <img src={assets.vector} alt="" /> */}
       </div>

               <div className='p-2'>
       <div className='flex items-center gap-3'>
         <img src={assets.chart_pie} alt="" />
        <p className='text-[14px]'>Productivity</p>
       </div>
       {/* <img src={assets.vector} alt="" /> */}
       </div>

      </div>


      <div className='mt-14'>

        <div>

       
        <div className='p-2 flex justify-between items-center'>
       <div className='flex items-center gap-3'>
         <img src={assets.star_solid} alt="" />
        <p className='text-[14px]'>Favorite</p>
       </div>
       <img src={assets.arrow_up} alt="" />
       </div>
          
       <div className='mt-3 space-y-3'>
        
        <div className='pl-5 pr-2 py-2 flex justify-between items-center'>
       <div className='flex items-center gap-3'>
         <img src={assets.credit} alt="" />
        <p className='text-[14px]'>Kanban Board</p>
       </div>
       <p className='text-[14px]'>24</p>
       </div>

        <div className='pl-5 pr-2 py-2 flex justify-between items-center'>
       <div className='flex items-center gap-3'>
         <img src={assets.credit} alt="" />
        <p className='text-[14px]'>Design</p>
       </div>
       <p className='text-[14px]'>24</p>
       </div>

        <div className='pl-5 pr-2 py-2 flex justify-between items-center'>
       <div className='flex items-center gap-3'>
         <img src={assets.credit} alt="" />
        <p className='text-[14px]'>Development</p>
       </div>
       <p className='text-[14px]'>24</p>
       </div>



       </div>
      </div>
       
        <div className='p-2 mt-8 flex justify-between items-center'>
       <div className='flex items-center gap-3'>
         <img src={assets.rocket} alt="" />
        <p className='text-[14px]'>Work space</p>
       </div>
       <img src={assets.arrow_up} alt="" />
       </div>
      
      
      
      </div>



      <div className='flex p-2 mt-10 items-center gap-3'>
        <img src={assets.logout} alt="" />
        <p className='text-[14px]'>Logout</p>
      </div>
    </div>
  )
}

export default Sidebar
