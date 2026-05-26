import React from "react";

const TaskListCard = ({taskDate, taskTitle, taskDescription, category}) => {
  
  return (
    <div className="h-max  border rounded-lg p-3 shadow-md flex flex-col gap-2 shrink-0" >
      <div className="flex items-center justify-between">
        <span className="bg-red-700 text-white font-medium px-1 rounded">{category}</span>
        <span className="font-medium">{taskDate}</span>
      </div>
      <div className="w-full">
        <p className="text-xl font-bold">{taskTitle}</p>
        <p className="w-full">
         {taskDescription}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button className="rounded border-none bg-green-600 text-white font-medium px-1">Mark as Completed</button>
        <button className="rounded border-none bg-red-600 text-white font-medium px-1">Mark as Failed</button>
      </div>
    </div>
  );
};

export default TaskListCard;
