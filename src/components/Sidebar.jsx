import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='bg-white h-full shadow  p-5 relative'>
      <div className='flex justify-between items-center'>
                  <img src={assets.logo} alt="" />


        <div className='flex items-center lg:hidden gap-3'>
         <img className='w-[20px]' src={assets.plus_circle} alt="" />
           <img className='w-[20px]' src={assets.search} alt="" />
        <img className=' w-[20px]' src={'https://cdn-icons-png.freepik.com/256/11047/11047140.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid'} alt="" />      
        </div>
      </div>

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
        <p className='xl:text-[14px] text-[12px]'>Kanban Board</p>
       </div>
       <p className='xl:text-[14px] text-[12px]'>24</p>
       </div>

        <div className='pl-5 pr-2 py-2 flex justify-between items-center'>
       <div className='flex items-center gap-3'>
         <img src={assets.credit} alt="" />
        <p className='xl:text-[14px] text-[12px]'>Design</p>
       </div>
       <p className='xl:text-[14px] text-[12px]'>24</p>
       </div>

        <div className='pl-5 pr-2 py-2 flex justify-between items-center'>
       <div className='flex items-center gap-2'>
         <img src={assets.credit} alt="" />
        <p className='xl:text-[14px] text-[12px]'>Development</p>
       </div>
       <p className='xl:text-[14px] text-[12px]'>24</p>
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



      <div className='flex p-2 mt-10 items-center bottom-2 absolute gap-3'>
        <img src={assets.logout} alt="" />
        <p className='text-[14px]'>Logout</p>
      </div>
    </div>
  )
}

export default Sidebar
