import React from 'react'
import './explore.css'
import schoolStudent from '../../Images/home/schoolStudent.png'
import collegeStudent from '../../Images/home/collegeStudent.png'
import graduateStudent from '../../Images/home/graduateStudent.png'
import professionals from '../../Images/home/professional1.png'

function Explore() {
  return (
    <div className='container-fluid explore-bg'>
      <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-6'>
                    <h1 className='explore-head'>
                    Uncertain about your
                    future? We're here to help!
                    </h1>
                </div>
                <div className='col-6'>
                    <p className='explore-content'>
                    We understand that education is a journey of discovery. Our unique tests help school students, graduates, and professionals identify their strengths, personality, and interests. By matching these insights with the right careers, we help you navigate a path that’s truly your own.
                    </p>
                    <div className='my-5'>
                      <button className='explore-test-btn'>Take Test Now</button>
                    </div>
                </div>
            </div>

            <div className='row my-5'>
                <div className='col-3'>
                    <div className='explore-col'>
                        <h4 className='heading'>School Student</h4>
                        <div>
                          <button className='more'>Explore more</button>
                        </div>
                        <div>
                          <img src={schoolStudent} className='explore-img'/>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='explore-col'>
                        <h4 className='heading'>College Student</h4>
                        <div>
                          <button className='more'>Explore more</button>
                        </div>
                        <div>
                          <img src={collegeStudent} className='explore-img'/>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='explore-col'>
                        <h4 className='heading'>Graduates</h4>
                        <div>
                          <button className='more'>Explore more</button>
                        </div>
                        <div>
                          <img src={graduateStudent} className='explore-img'/>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='explore-col'>
                        <h4 className='heading'>Working Professionals</h4>
                        <div>
                          <button className='more'>Explore more</button>
                        </div>
                        <div>
                          <img src={professionals} className='explore-img'/>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Explore