import React from 'react'
import { assets } from '../assets/assets'

const AddTask = () => {
    
    const projects = [{name : "Fitness App", sign: "App development #1", detail: "App for a better way to work out, effective training programs, seamless workout tracking", img : "https://img.freepik.com/premium-photo/gym-training-16_1032298-2599.jpg?ga=GA1.1.2728068.1744452084&semt=ais_hybrid&w=740"}, {name : "Saas Dashboard", sign: "WebApp Development #2", detail: "Automated payment collections, flexible pricing models and outstanding customer support", img: 'https://img.freepik.com/premium-photo/designer-holding-smartphone-design-applications-with-test-performance-before-sending-customers-concept-working-online-system_2034-2182.jpg?ga=GA1.1.2728068.1744452084&semt=ais_hybrid&w=740'}]

  return (
    <div className='bg-white rounded py-8 px-5 shadow'>
      <div className='flex justify-between items-center'>
            <p className='text-[#1b1b1b] font-medium'>Projects</p>
            <p className='text-[#105EF5] underline font-medium'>See all</p>
        </div>

      <div className='mt-8 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
          {projects.map((project, index) => (
            <div className='rounded-lg shadow'>
                <img className='w-full rounded-lg' src={project.img} alt="" />
                <div className='p-3 space-y-2'>
                  <p className='text-[#105EF5] text-[10px]'>{project.sign}</p>
                  <p className='text-[14px]'>{project.name}</p>
                  <p className='text-[10px]'>{project.detail}</p>
                  <div className='flex items-center justify-between'>
                    <p className='px-4 py-2 border border-[#105EF5] text-[14px] text-[#105EF5] rounded-lg'>View all</p>
                    <img className='w-[30px]' src={assets.avatar} alt="" />
                  </div>
                </div>
            </div>
          ))}
           <div className='rounded-lg shadow bg-[#E3F5FF] gap-2 p-2 flex w-full h-full flex-col justify-center items-center'>
                   <p className='text-[34px] text-[#105EF5]'>+</p>
                   <p className='text-[#105EF5] text-center'>Create new project</p>
           </div>
      </div>

    </div>
  )
}

export default AddTask
