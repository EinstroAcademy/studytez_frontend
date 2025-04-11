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
        <Route path='/course/list/:courseId' element={<CourseList/>}/>
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
