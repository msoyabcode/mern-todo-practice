import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import AddTask from './components/AddTask'
import List from './components/List'

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<List/>} />
        <Route path='/add' element={<AddTask/>} />
      </Routes>
    </div>
  )
}

export default App
