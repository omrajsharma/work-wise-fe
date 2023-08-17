import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginUserPage from './pages/LoginUserPage'
import RegisterUserPage from './pages/RegisterUserPage'
import UserProfilePage from './pages/UserProfilePage'
import MainLayout from './layouts/MainLayout'
import JobCreatePage from './pages/JobCreatePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginUserPage />} />
        <Route path='/register' element={<RegisterUserPage />} />
        <Route path='/profile' element={<UserProfilePage />} />
        <Route path='/create-job' element={<JobCreatePage />} />
      </Route>
    </Routes>
  )
}

export default App
