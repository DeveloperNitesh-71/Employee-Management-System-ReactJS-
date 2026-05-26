import React from 'react'
import Navbar from '../EmployeeDashboardComponents/Navbar'
import CreateTask from '../AdminDashboardComponents/CreateTask'

const AdminDashboard = () => {
  return (
    <div className=''>
      <Navbar logo={"Ad"} name={"Admin"}/>
      <CreateTask/>
    </div>
  )
}

export default AdminDashboard