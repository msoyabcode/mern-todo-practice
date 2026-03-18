import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import AddTask from './components/AddTask'
import List from './components/List'
import UpdateTask from './components/UpdateTask'

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<List/>} />
        <Route path='/add' element={<AddTask/>} />
        <Route path='/update/:id' element={< UpdateTask />} />
      </Routes>
    </div>
  )
}

export default App
