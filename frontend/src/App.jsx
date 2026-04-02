import React from 'react'
import { Route, Routes } from "react-router"

import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from 'react-hot-toast'
import HomePage from './pages/HomePage'


const App = () => {
  return (
    <div  className="relative h-full w-full" data-theme="forest" >
      {/* <div className='aboslute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradent(
      125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]' /> */}
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24
       [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#63e_100%)]"></div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
