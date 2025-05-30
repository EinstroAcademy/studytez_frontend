import React, { useState } from 'react'
import './signup.css'
import loginImg from '../../Images/home/login.png'
import { Link, useNavigate } from 'react-router-dom'
import eye from '../../Images/icons/eye.png'
import closedEye from '../../Images/icons/closed_eye.png'
import request from '../../api/api'
import toast from 'react-hot-toast'

function Signup() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [newUser,setNewUser] = useState({
    fullName:'',
    mobile:'',
    email:"",
    password:''
  })

  const handleChange = (name,event) =>{
    setNewUser({...newUser,[name]:event})
  }

  const createNewUser = ()=>{
    const {
      fullName,
      mobile,
      email,
      password
    } = newUser

    request({
      url:'/user/signup',
      method:'POST',
      data:{
        fullName,
        mobile,
        email,
        password
      }
    }).then((res)=>{
        if(res.status===1){
            navigate('/login')
            toast.success("Successfully Submitted")
        }
        if(res.status===0){
          toast.error(res.message)
        }
    })
  }
  return (
    <div className="container-fluid ">
      {/* <div>
         <div class="wave"></div>
         <div class="wave"></div>
         <div class="wave"></div>
      </div> */}
      <div className="container my-5 login-second-bg">

        <div className="row justify-content-between align-items-center pt-5">
          <div className="col-6">
            <div>
              <img src={loginImg} className="login-left-img" />
            </div>
          </div>
          <div className="col-6">
            <div className="right-form-box">
              <div className='mb-4'>
                <div class="flex-column">
                  <label>Full Name</label>
                </div>
                <div class="inputForm">
                  <input type="text" class="input" placeholder="Enter Full Name"  onChange={(e)=>handleChange('fullName',e.target.value)}/>
                </div>
                <div className='text-black'>
                  As per your passport or ID proof
                </div>
              </div>
              <div className='mb-4'>
                <div class="flex-column">
                  <label>Mobile</label>
                </div>
                <div class="inputForm">
                  <input type="tel" class="input" placeholder="Enter Mobile" onChange={(e)=>handleChange('mobile',e.target.value)}/>
                </div>
              </div>

              <div className='mb-4'>
                <div class="flex-column">
                  <label>Email </label>
                </div>
                <div class="inputForm">
                  <svg
                    height={"20"}
                    viewBox={"0 0 32 32"}
                    width={"20"}
                    xmlns={"http://www.w3.org/2000/svg"}
                  >
                    <g id="Layer_3" data-name="Layer 3">
                      <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                    </g>
                  </svg>
                  <input type="text" class="input" placeholder="Enter your Email" onChange={(e)=>handleChange('email',e.target.value)}/>
                </div>
              </div>

              <div className='mb-4'>
                <div class="flex-column">
                  <label>Password </label>
                </div>
                <div class="inputForm">

                  <input
                    type={ showPass ? "text" :"password"}
                    class="input"
                    placeholder="Enter your Password"
                    onChange={(e)=>handleChange('password',e.target.value)}
                  />
                  {
                    showPass ? <img src={eye} className='password-eye' onClick={() => setShowPass(!showPass)} /> : <img src={closedEye} className='password-eye' onClick={() => setShowPass(!showPass)} />
                  }

                </div>
              </div>
              <p class="p line">By clicking sign up, you agree to our Terms of Service and Privacy Policy.</p>
              <button class="button-submit" onClick={()=>createNewUser()}>Sign Up</button>
              <p class="p">
                Already have an account? <Link to={'/login'}><span class="span">Sign in</span></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup