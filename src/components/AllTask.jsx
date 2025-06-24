import React from 'react'
import placeholder from '../assets/placeholder t.png'
import { assets } from '../assets/assets'

const AllTask = () => {

  const placeholders = 'https://cdn-icons-png.freepik.com/256/11047/11047140.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid'

    const tasks = [{name :"Ui placement on Fitness App", time: "Today till 11:00 am", sum : "Fitness App", placeholder: placeholder}, {name :"User flow update", time: "Today till 01:00 pm", sum : "Fitness App", placeholder: placeholder}, {name :"Prepare slides for the meeting", time: "Today till 04:00 pm", sum : "Cooperative", placeholder: placeholder}, {name :"Brain storm with team", time: "June 30", sum : "New App", placeholder: placeholder}, {name :"Sprint planing", time: "July 4", sum : "Team", placeholder: placeholder},  ]

  return (
    <div className='bg-white py-8 px-5 rounded shadow'>
        
        <div className='flex justify-between items-center'>
            <p className='text-[#1b1b1b] font-medium'>My Tasks</p>
            <p className='text-[#105EF5] underline font-medium'>See all</p>
        </div>

        <div className='mt-8'>
         {tasks.map((task, index) => (
            <div className='border-b p-2'>
                <div className='flex justify-between items-center'>
              <div className='flex items-center gap-3'>
                <img className='w-[20px]' src={assets.placeholder_c} alt="" />
                <p className='text-[14px]'>{task.name}</p>
              </div>
                <img className='w-[20px]' src={placeholders} alt="" />
                </div>
                <div className='pl-7.5 mt-2 flex items-center justify-between'>
                   <div className='flex items-center gap-3'>
                    <img className='w-[20px]' src={assets.calender} alt="" />
                    <p className='text-[12px]'>{task.time}</p>
                   </div>
                   <img className='w-[20px]' src={task.placeholder} alt="" />
                </div>
            </div>
         ))}
        </div>
         <div className='flex justify-end mt-8'>
            <img src={assets.pagination} alt="" />
         </div>
    </div>
  )
}

export default AllTask
