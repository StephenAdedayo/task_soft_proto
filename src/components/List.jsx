import React from 'react'

const List = () => {

    const tasks = [ {name: "Task Planing", time: "08:00am", detail: "Review daily plans and set priorities"}, {name: "Do not disturb", time: "09:05am", detail: "Work on my daily task"}, {name: "Daily catch-up with design team", time: "11:20am", detail: "New app design and development"}, {name: "Lunch break", time: "12:30am", detail: ""}, {name: "Team brainstorm", time: "01:40am", detail: "New app design and development"}, ]

  return (
    <div className='flex w-full flex-col gap-7 '>
      {tasks.map((task, index) => (
        <div className='flex gap-2 w-full'>
            <div className='flex flex-col gap-2'>
                <p className='text-[#105EF5] text-[14px]'>{task.time}</p>
                <div className='flex justify-center items-center'>
                  <div className='w-0.5 h-16 bg-[#E3F5FF]'>
                   
                </div>
                </div>
                
            </div>

           <div className='border-l-4 border-l-[#105EF5] w-full bg-[#E3F5FF]  flex flex-col justify-center gap-2 p-3 rounded-md'>
               <p className='text-[14px] w-full font-[600]'>{task.name}</p>
               <p className='text-[14px] w-full font-medium'>{task.detail}</p>
           </div>

        </div>
      ))}
    </div>
  )
}

export default List
