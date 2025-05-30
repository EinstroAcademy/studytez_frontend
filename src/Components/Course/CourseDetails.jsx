import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import request from '../../api/api';

import student from '../../Images/course/student1.png'
import EnquiryForm from '../floatingMenu/EnquiryForm';

function CourseDetails() {
    const params = useParams()
    const navigate = useNavigate()
    const [isEnquiry,setIsEnquiry] = useState(false)
    const [courseDetails,setCourseDetails]=useState({})

    const fetchCourseDetails=()=>{
        request({
            url: "/client/get/course/detail",
            method: "POST",
            data: {courseId:params.id},
          }).then((res)=>{
            if(res.status===1){
                setCourseDetails(res.response)
            }
            if(res.status===0){
                toast.error('Course not found')
            }
          })
    }

    useEffect(()=>{
        if(params.id){
            fetchCourseDetails()
        }
    },[params])

    const onView=(university)=>{
        if(university._id){
            navigate(`/university/${university.uniId}`)
        }
    }

  return (
   <Layout>
     <div className="container my-5">
      <div className="subject-detail-head">
        <div>
        <h1>{courseDetails?.title}</h1>
        <h5>at <span className="university-link" onClick={()=>onView(courseDetails?.universityId)}>{courseDetails?.universityId?.name}</span></h5>
        <div>
        <div className="py-2">
              <button class="learn-more" onClick={()=>setIsEnquiry(!isEnquiry)}>
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Apply now</span>
              </button>
            </div>
        </div>
        </div>
        <div>
            <img src={student} className='std-img'/>
        </div>
       </div>
      <hr/>
      <div className="eligibility-details">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
            <div>
              <h6>Location</h6>
              <h5>{courseDetails?.country}</h5>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
            <div>
              <h6>Qualification</h6>
              <h5>{courseDetails?.qualification}</h5>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
            <div>
              <h6>Fees</h6>
              <h5>{courseDetails?.universityId?.currency?.symbol} {courseDetails?.fees}</h5>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
            <div>
              <h6>Duration</h6>
              <h5>{courseDetails?.duration}</h5>
            </div>
          </div>
          {
            courseDetails?.nextIntake && <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
            <div>
              <h6>Next intake</h6>
              <h5></h5>
            </div>
          </div>
          }
         
          <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
            <div>
              <h6>Entry Score</h6>
              <h5>{courseDetails?.score}</h5>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="subject-course-details">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
            <p className="subject-content" dangerouslySetInnerHTML={{__html:courseDetails?.description}}></p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <div className="subject-enquiry-card">
              <h5>
                Unsure about your options? Our experienced counsellors are here
                to guide you every step of the way
              </h5>
              <p>
                Having trouble choosing the right university and course? Our
                dedicated counsellors are ready to assist and guide you at every
                step of your study abroad journey. Contact us today!
              </p>
              <div>
                <button className="meet-btn" onClick={()=>setIsEnquiry(!isEnquiry)}>Meet a Councellor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <EnquiryForm isEnquiry={isEnquiry} setIsEnquiry={setIsEnquiry}/>
   </Layout>
  );
}

export default CourseDetails