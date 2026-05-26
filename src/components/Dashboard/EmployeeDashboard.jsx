import React from 'react'
import Navbar from '../EmployeeDashboardComponents/Navbar'
import TaskContainer from '../EmployeeDashboardComponents/TaskContainer'
import TaskListContainer from '../EmployeeDashboardComponents/TaskListContainer'
const EmployeeDashboard = ({loggedInUserData}) => {
    let loggedInUserNow = JSON.parse(localStorage.getItem("loggedInUser"))
    return (
        <div>
            <Navbar logo={loggedInUserNow.employee.logo} name={loggedInUserNow.employee.name}/>
            <TaskContainer loggedInUserNow={loggedInUserNow}/>
            <TaskListContainer loggedInUserNow={loggedInUserNow}/>
        </div>
    )
}

export default EmployeeDashboard