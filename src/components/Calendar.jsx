import React from 'react'
import Productivity from './Productivity'
import Date from './Date'

const Calendar = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Productivity />
      <Date />
    </div>
  )
}

export default Calendar
