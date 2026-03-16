import React, { useEffect, useState } from 'react'

const List = () => {

  const [uiData, setUiData] = useState([])

  const getUiData =  async () =>{
    let listData = await  fetch("http://localhost:3000/tasks")
    listData =  await listData.json()
    console.log(listData)
    setUiData(listData)
  }

  useEffect(()=>{
    getUiData()
  },[])

  return (
    <div className=''>
      <h1 className='mt-9 flex justify-center items-center font-bold text-3xl underline'>List items</h1>
      
        <ul className='grid grid-cols-3 gap-3 p-4 mt-12 '>
          <li className='bg-gray-100 shadow text-gray-600 rounded-md px-2 py-1 font-bold text-lg'>S.no.</li>
          <li className='bg-gray-100 shadow text-gray-600 rounded-md px-2 py-1 font-bold text-lg'>Titile</li>
          <li className='bg-gray-100 shadow text-gray-600 rounded-md px-2 py-1 font-bold text-lg'>Descripiton</li>

          {uiData && uiData.map((item, index)=>(
            <>
             <li className='bg-gray-100 shadow text-gray-600 rounded-md px-2 py-1'>{index+1}</li>
             <li className='bg-gray-100 shadow text-gray-600 rounded-md px-2 py-1'>{item.title}</li>
             <li className='bg-gray-100 shadow text-gray-600 rounded-md px-2 py-1'>{item.description}</li>
            </>
          ))}
        </ul>
    
    </div>
  )
}

export default List

