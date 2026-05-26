import React from 'react'

const TaskCard = ({TaskContainerType, NumberOfTasks}) => {
  return (
    <div className='h-40 rounded-lg p-4 shadow-md border'>
        <span className='font-medium text-4xl '>{NumberOfTasks}</span>
        <p className='text-gray-500 text-xl font-medium'>{TaskContainerType}</p>
    </div>
  )
}

export default TaskCard