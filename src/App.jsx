import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import Home from './component/Home'
import Blog from './component/Blog'
import Courses from './component/Courses'
import Contact from './component/Contact'
import FAQ from './component/FAQ'
import SingleCourse from './pages/SingleCourse'
import SingleBlog from './pages/SingleBlog'
import Login from './component/Login'
import Signup from './component/SignUp'

function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  index path='/' element={<Home/>} />
        <Route   path='/blog' element={<Blog/>} />
        <Route   path='/courses' element={<Courses/>} />
        <Route   path='/contact' element={<Contact/>} />
        <Route   path='/faq' element={<FAQ/>} />
        <Route   path='/singleCourse/:id' element={<SingleCourse/>} />
        <Route   path='/SingleBlog/:id' element={<SingleBlog/>} />
        <Route   path='/login' element={<Login/>} />
        <Route   path='/signup' element={<Signup/>} />
        
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
