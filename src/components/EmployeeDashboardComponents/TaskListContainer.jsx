import React from 'react'
import TaskListCard from './TaskListCard'

const TaskListContainer = ({loggedInUserNow}) => {
  return (
    <div className='grid gap-4 grid-cols-2 lg:grid-cols-3 p-5 w-full flex-wrap'>
        {loggedInUserNow.employee.tasks.map((task) => {
          return<TaskListCard key={task.taskTitle} taskDate={task.taskDate} taskTitle={task.taskTitle} taskDescription={task.taskDescription} category={task.category}/>
        })}
    </div>
  )
}

export default TaskListContainer