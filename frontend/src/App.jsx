import { useState } from 'react'
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom'
import './App.css'
import {SignupPage} from './Routes.js'
import { LoginPage } from './Routes.js'

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/sign-up' element={<SignupPage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App

