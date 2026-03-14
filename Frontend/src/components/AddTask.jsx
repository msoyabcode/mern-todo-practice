import React from 'react'

const AddTask = () => {
  return (
    <div className='max-w-xl mx-auto mt-16 p-6 bg-amber-100 rounded shadow-lg'>
      <h1 className='text-2xl font-semibold mb-6 text-center'>Add New Task</h1>
      
      <div className='space-y-4'>
        {/* Title Input */}
        <div>
          <label className='block mb-1 font-medium' htmlFor="title">Title:</label>
          <input 
            id="title"
            type="text" 
            placeholder='Enter task title' 
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400'
          />
        </div>

        {/* Description Input */}
        <div>
          <label className='block mb-1 font-medium' htmlFor="description">Description:</label>
          <textarea 
            id="description"
            placeholder='Enter task description' 
            className='w-full p-2 border border-gray-300 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400'
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className='bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition'>
          Add Task
        </button>
      </div>
    </div>
  )
}

export default AddTask