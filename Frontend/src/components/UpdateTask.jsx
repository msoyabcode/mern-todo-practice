import React, { useEffect } from "react";
import { useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'

const UpdateTask = () => {

  const [editId , setEditId] = useState({})
  const navigate = useNavigate()
  const {id} = useParams()

  // jo data edit krna hai database se lana
  const editFunction = async (id) => {
    let editBtn = await fetch("http://localhost:3000/task/"+id)
    editBtn = await editBtn.json()
    if(editBtn){
      setEditId(editBtn)
    }
  }

useEffect(()=>{
  editFunction(id)
},[])

// jo data edit kra hai usko databse mein store krna
// updated data send krna
const handleAdd = async () =>{
  const response = await fetch("http://localhost:3000/update/"+id,{
    method: "PUT",
    body: JSON.stringify(editId),
    headers:{
      "Content-Type": "application/json"
    }   
  })
  const data  = await response.json()
  console.log(data)
  if(data){
    navigate("/")
    }
}

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-amber-100 rounded shadow-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">Edit your Task</h1>

      <div className="space-y-4">

        {/* Title Input */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="title">
            Title:
          </label>
          <input
          value={editId.title}
           onChange={(event)=>{setEditId({...editId, title: event.target.value})}}
            type="text"
            placeholder="Enter task title"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="description">
            Description:
          </label>
          <textarea
          value={editId.description}
          onChange={(event)=>{setEditId({...editId, description: event.target.value})}}
            id="description"
            placeholder="Enter task description"
            className="w-full p-2 border border-gray-300 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
         className="bg-amber-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-amber-600 transition" 
         onClick={handleAdd} >
          Update Task
        </button>

      </div>
    </div>
  );
};

export default UpdateTask;
