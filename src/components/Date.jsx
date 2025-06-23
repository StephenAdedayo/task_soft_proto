import React from 'react'
import List from './List'

const Date = () => {

    const mock = [{day : "Mon", date:"26"}, {day : "Tue", date:"27"}, {day : "Wed", date:"28"}, {day : "Thur", date:"29"}, {day : "Fri", date:"30"}, {day : "Sat", date:"1"}, {day : "Sun", date:"2"},]

  return (
    <div className='p-5 bg-white shadow'>
      <div className='flex justify-between items-center'>
            <p className='text-[#1b1b1b] font-medium'>Calender</p>
            <p className='text-[#105EF5] underline font-medium'>See all</p>
        </div>

      <div className='mt-5 flex flex-col gap-1'>
        <p className='text-[12px]'>Today</p>
        <p className='text-[20px] font-medium'>Monday, 26 June 2023</p>
      </div>

      <div className='mt-5 grid 2xl:grid-cols-7 xl:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-2 '>
         {mock.map((moc, index) => (
            <div className={`${moc.day === "Mon" ? "bg-[#105EF5] text-white" : moc.day.includes('S') ? 'text-[#b4b4b4] border border-[#b4b4b4] ' : " border-[#105EF5] border " } p-3 rounded-lg grid place-items-center`}>
                <p>{moc.day}</p>
                <p>{moc.date}</p>
            </div>
         ))}
      </div>
    <div className='mt-5'>
        <List />

    </div>

    </div>
  )
}

export default Date
