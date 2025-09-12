import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AddCake from './pages/cake_management/AddCake'
import CakeList from './pages/cake_management/CakeList'
import Login from './pages/Login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
    <div className ='app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/addcake' element={<AddCake/>} />
        <Route path='/cakelist' element={<CakeList/>} />
      </Routes>
    </div>
    <ToastContainer />
    </>
  )
}

export default App
