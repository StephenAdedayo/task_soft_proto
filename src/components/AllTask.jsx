import React from 'react'
import placeholder from '../assets/placeholder t.png'
import { assets } from '../assets/assets'

const AllTask = () => {

    const tasks = [{name :"Ui placement on Fitness App", time: "11:00am", sum : "Fitness App", placeholder: placeholder}, {name :"Ui placement on Fitness App", time: "11:00am", sum : "Fitness App", placeholder: placeholder}, {name :"Ui placement on Fitness App", time: "11:00am", sum : "Fitness App", placeholder: placeholder}, {name :"Ui placement on Fitness App", time: "11:00am", sum : "Fitness App", placeholder: placeholder}, {name :"Ui placement on Fitness App", time: "11:00am", sum : "Fitness App", placeholder: placeholder},  ]

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
                <img className='' src={assets.chart_pie} alt="" />
                </div>
                <div className='pl-8.5 mt-2 flex items-center justify-between'>
                   <div className='flex items-center gap-3'>
                    <img className='w-[20px]' src={assets.calender} alt="" />
                    <p className='text-[12px]'>Today till {task.time}</p>
                   </div>
                   <img src={task.placeholder} alt="" />
                </div>
            </div>
         ))}
        </div>
         <div className='flex justify-end mt-5'>
            <img src={assets.pagination} alt="" />
         </div>
    </div>
  )
}

export default AllTask
