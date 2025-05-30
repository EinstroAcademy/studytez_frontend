import { useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import CourseList from './Components/Course/CourseList';
import University from './Components/University/University';
import Study from './Components/Abroad/Study';
import CourseDetails from './Components/Course/CourseDetails';
import Blog from './Components/Blog/Blog';
import BlogDetails from './Components/Blog/BlogDetails';
import About from './Components/AboutPage/About';
import Student from './Components/Student/Student';
import ProfileInfo from './Components/Student/ProfileInfo';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const toastOptions = {
    loading: {
      duration: 3000,
      theme: {
        primary: "green",
        secondary: "black",
      },
      style: {
        background: "#363636",
        color: "#fff",
        width: "100%",
      },
    },
    success: {
      duration: 3000,
      theme: {
        primary: "green",
        secondary: "black",
      },
      style: {
        background: "#363636",
        color: "#fff",
        width: "100%",
      },
    },
    error: {
      duration: 3000,
      theme: {
        primary: "green",
        secondary: "black",
      },
      style: {
        background: "#363636",
        color: "#fff",
        width: "100%",
      },
    },
  };
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/course/list' element={<CourseList/>}/>
        <Route path='/university/:uniId' element={<University/>}/>
        <Route path="/destination/:id" element={<Study/>} />
        <Route path='/course/details/:id' element={<CourseDetails/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<BlogDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/student' element={<Student/>}>
          <Route path='profile' element={<ProfileInfo/>}/>
        </Route>
      </Routes>
      <Toaster
          position="bottom-center"
          reverseOrder={false}
          containerClassName=""
          toastOptions={toastOptions}
        />
    </BrowserRouter>
   
      
    </>
  )
}

export default App
