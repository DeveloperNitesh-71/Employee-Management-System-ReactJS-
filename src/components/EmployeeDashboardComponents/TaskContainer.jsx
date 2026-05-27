import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'

const TaskContainer = ({ loggedInUserNow }) => {
  const [active, setActive] = useState(0)
  const [completed, setCompleted] = useState(0)
  const [failed, setFailed] = useState(0)
  const [accepted, setAccepted] = useState(0)

  const countTask = () => {

    let activeTaskCount = 0
    let completedTaskCount = 0
    let acceptedTaskCount = 0
    let failedTaskCount = 0

    let tasks = loggedInUserNow.employee?.tasks || []
    tasks.forEach((task) => {
      if (task.active) {
        acceptedTaskCount++;
        
      }
      if (task.completed) {
        completedTaskCount++;
      }
      if (task.failed) {
        failedTaskCount++;
      }
      if (task.newTask) {
        activeTaskCount++;
      }
      
    })
    setActive(activeTaskCount)
    setAccepted(acceptedTaskCount)
    setFailed(failedTaskCount)
    setCompleted(completedTaskCount)
  }
  
  useEffect(() => {
    countTask()
  }, [loggedInUserNow])

  return (
    <div className='w-full grid grid-cols-2 gap-4 p-5 md:grid-cols-4'>
      <TaskCard TaskContainerType={"New Task"} NumberOfTasks={active} />
      <TaskCard TaskContainerType={"Complete Task"} NumberOfTasks={completed} />
      <TaskCard TaskContainerType={"Accepted Task"} NumberOfTasks={accepted} />
      <TaskCard TaskContainerType={"Failed Task"} NumberOfTasks={failed} />
    </div>
  )
}

export default TaskContainer