import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Tasks from './components/Tasks'
import Calendar from './components/Calendar'

const App = () => {
  return (
    <>
      <main className='flex overflow-hidden'>

       <div className='flex-[20%]  hidden lg:block '>
        <Sidebar />
       </div>
     
     <div className='flex-[80%]'>
       <Navbar />

       <div className='bg-[#F9FCFE] h-full sm:p-5 p-4 flex flex-col gap-10 lg:flex-row'>
        <div className='lg:flex-[55%]'>
        <Tasks />
        </div>

        <div className='lg:flex-[45%]'>
          <Calendar />
        </div>
       
       </div>
            </div>


       {/* <div className='flex-[30%]'>
        <Calendar />
       </div> */}

      </main>
    </>
  )
}

export default App
