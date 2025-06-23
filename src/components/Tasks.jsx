import React from 'react'
import AllTask from './AllTask'
import AddTask from './AddTask'

const Tasks = () => {
  return (
    <div className='flex flex-col gap-10'>
      <AllTask />
      <AddTask />
    </div>
  )
}

export default Tasks
