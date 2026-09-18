import React from 'react'


const TaskListNumber = () => {
  return (
    <div className='flex mt-10 justify-between screen gap-10'>

      <div className=' bg-red-400 rounded-xl py-6 px-9 w-[40%]'>
      <h2 className='text-2xl'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3>    
      </div>

      <div className=' bg-green-400 rounded-xl py-6 px-9 w-[40%]'>
      <h2 className='text-2xl'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3> 
      </div>

      <div className=' bg-yellow-400 rounded-xl py-6 px-9  w-[40%]'>
      <h2 className='text-2xl'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3> 
      </div>

      <div className=' bg-blue-400 rounded-xl py-6 px-9 w-[40%]'>
      <h2 className='text-2xl'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3> 
      </div>

     

    </div>
  )
}

export default TaskListNumber
