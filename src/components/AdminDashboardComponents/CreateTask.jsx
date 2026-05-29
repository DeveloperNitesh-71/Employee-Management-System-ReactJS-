import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { LuGoal } from "react-icons/lu";
import { getLocalStorage, setLocalStorage } from "../../utils/LocalStorage"
const CreateTask = ({ AuthData }) => {



  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')


  const usersData = useContext(AuthContext)



  const handleSubmit = (e) => {
    e.preventDefault()


    const newTask = {
      taskDescription,
      category,
      taskTitle,
      taskDate,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    }

    let assignedEmployees = usersData.employeeData
    assignedEmployees.forEach((assignedEmployee) => {
      if (assignedEmployee.name == assignTo) {
        assignedEmployee.tasks = [newTask, ...assignedEmployee.tasks]
        localStorage.setItem("employees", JSON.stringify(usersData.employeeData))
        localStorage.setItem("admin", JSON.stringify(usersData.adminData))
      }
    })

    setTaskTitle('')
    setAssignTo('')
    setTaskDate('')
    setTaskDescription('')
    setCategory('')
  }



  return (
    <div className="">
      <form className="grid lg:grid-cols-2 grid-cols-1 lg:place-items-end items-center  p-5 h-max border" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col items-start">
            <label htmlFor="Title">Task Title</label>
            <input type="text" id="Title" placeholder="Enter Task Title" className="border w-[400px] px-2 py-1 rounded outline-none cursor-pointer" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="Date">Date</label>
            <input type="date" id="Date" placeholder="dd/mm/yyyy" className="border w-[400px] px-2 py-1 rounded outline-none cursor-pointer" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="Assign-To">Assigne To</label>
            <select className="border" name="Assigne-To" onChange={(e) => {setAssignTo(e.target.value)}}>
              {usersData.employeeData.map((names) => {
                return (<option key={names.name} value={names.name} className="outline-none w-full border">{names.name}
                </option>
                )
              })}
            </select>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="Catagory">Catagory</label>
            <input type="text" id="Catagory" placeholder="design, dev, etc." className="border w-[400px] px-2 py-1 rounded outline-none cursor-pointer" value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start">
            <label htmlFor="Description">Description</label>
            <textarea type="text" id="Description" placeholder="Description" className="border min-w-[400px] max-w-[400px] min-h-[210px] max-h-[210px]
           px-2 py-1 rounded outline-none cursor-pointer"  value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
          </div>
          <button className='bg-green-700 text-white font-medium p-1 rounded px-2 w-[400px]'>Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
