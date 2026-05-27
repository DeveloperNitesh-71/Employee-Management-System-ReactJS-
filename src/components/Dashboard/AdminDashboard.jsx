import React from 'react'
import Navbar from '../EmployeeDashboardComponents/Navbar'
import CreateTask from '../AdminDashboardComponents/CreateTask'

const AdminDashboard = ({logoutUser, AuthData}) => {
  return (
    <div className=''>
      <Navbar logo={"Ad"} name={"Admin"} logoutUser={logoutUser}/>
      <CreateTask AuthData={AuthData}/>
    </div>
  )
}

export default AdminDashboard