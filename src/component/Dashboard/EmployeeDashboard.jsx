import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen text-white'>
     <Header />
    <TaskListNumber/>
    < Tasklist/>
    </div>
  )
}

export default EmployeeDashboard
