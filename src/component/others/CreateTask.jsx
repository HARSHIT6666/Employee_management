import React from 'react'
import AllTask from './AllTask'

const CreateTask = () => {
  return (
    <div className='flex gap-10 ' >

        <div className='bg-black h-[90%] w-[30%] mt-5 rounded-3xl border-2 shrink-0 border-red-500'>
        <form className='p-8'>
          <h1 className='text-2xl font-semibold'>Task Title</h1>
          <input className='bg-white text-black border-2 w-full h-10 rounded' type="text" placeholder='Design a UI' />
          
           <h1 className='text-2xl font-semibold '>Description</h1>
           <textarea  className='bg-white text-black border-2 w-full h-30  rounded'name="" id="" placeholder='Add the description of your work'></textarea>

            <h1 className='text-2xl font-semibold '>Date</h1>
            <input className='bg-white text-black border-2 w-full h-10  rounded' type="date"  />

           <h1 className='text-2xl font-semibold '>Assign To</h1>
            <input className='bg-white text-black border-2 w-full h-10  rounded' placeholder='Employee name' type="text"  />

            <h1 className='text-2xl font-semibold '>Category</h1>
            <input className='bg-white text-black border-2 w-full h-10  rounded' placeholder='Desing ,Dev , etc' type="text"  />

            <button className='bg-red-500 text-2xl font-semibold text-white w-full h-[10%] rounded-2xl p-3 active:scale-90 mt-5'>Create Task</button>
            
        </form>

      </div>

        
        {/* Task */}
        <div className='flex gap-6 flex-wrap mt-5 justify-between '>
       
              <div className='h-80 w-70 bg-amber-300 rounded text-red-500 font-semibold text-2xl'> 
                <h1 className='flex justify-center'>Task</h1>
              
              </div>
      
             
         
          
              
              
        </div>
  
    </div>
  )
}

export default CreateTask
