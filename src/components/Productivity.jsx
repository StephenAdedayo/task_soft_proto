import React from 'react'
import rocket from '../assets/rocket.png'
import check from '../assets/check.png'
import users from '../assets/users.png'
import calender from '../assets/calender2.png'
import { assets } from '../assets/assets'


const Productivity = () => {

    const tivits = [ {name: "Today's productivity", score: "10/8", percent :"55", img: rocket}, {name: "Monthly productivity", score: "620/598", percent :"95", img: calender}, {name: "Meetings attended", score: "85/85", percent :"100", img: users}, {name: "Tasks done weekly", score: "29/30", percent :"101", img: check}, ]

  return (
    <div className='w-full'>

        <div className='grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-10'>
         {tivits.map((tivit, index) => (
            <div className='bg-white rounded-lg p-5 flex items-center shadow justify-between'>
                 <div className='flex flex-col gap-2'>
                    <p className='text-[#b4b4b4] text-[12px]'>{tivit.name}</p>
                    <div className='flex gap-1 items-center'>
                        <p>{tivit.score}</p>
                        <p className='text-[#48BB78] text-[14px]'>+{tivit.percent}%</p>
                    </div>
                 </div>

                 <div className='flex justify-center items-center rounded-lg bg-[#E3F5FF] p-4'>
                    <img src={tivit.img} alt="" />
                 </div>
            </div>
         ))}
        </div>
      
    </div>
  )
}

export default Productivity
