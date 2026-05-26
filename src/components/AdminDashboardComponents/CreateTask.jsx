import React from "react";

const CreateTask = () => {
  return (
    <div className="mt-">
      <form className="flex items-center justify-between p-5 h-[400px] border">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col items-start">
            <label htmlFor="Title">Task Title</label>
            <input type="text" id="Title" placeholder="Enter Task Title" className="border w-[400px] px-2 py-1 rounded outline-none cursor-pointer"/>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="Date">Date</label>
            <input type="date" id="Date" placeholder="dd/mm/yyyy" className="border w-[400px] px-2 py-1 rounded outline-none cursor-pointer"/>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="Assign-to">Assign To</label>
            <input type="text" id="Assign-to" placeholder="Employee Name" className="border w-[400px] px-2 py-1 rounded outline-none cursor-pointer"/>
          </div>
          <div className="flex flex-col items-start"> 
            <label htmlFor="Catagory">Catagory</label>
            <input type="text" id="Catagory" placeholder="design, dev, etc." className="border w-[400px] px-2 py-1 rounded outline-none cursor-pointer"/>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start">
          <label htmlFor="Description">Description</label>
          <textarea type="text" id="Description" placeholder="Description" className="border w-[400px] px-2 py-1 rounded outline-none cursor-pointer" rows={8} cols={30}/>
          </div>
          <button className='bg-green-700 text-white font-medium p-1 rounded px-2'>Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
