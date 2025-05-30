import React, { useState } from "react";
import "./touch.css";
import student from "../../Images/home/student.png";
import { useNavigate } from "react-router-dom";
import EnquiryForm from "../floatingMenu/EnquiryForm";

function Touch() {
   const [isEnquiry,setIsEnquiry] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="container touch-container">
      <div class="box ">
        <div class="row align-items-center">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="left-text">
              Ready to turn your <br /> dream into reality? <br />
              Get in touch with us <br />
            </div>
            <div>
            <button class="learn-more" onClick={()=>setIsEnquiry(!isEnquiry)} >
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Know More</span>
              </button>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="left-image">
              <img src={student} class="touch-img" />
            </div>
          </div>
        </div>
      </div>
      
      <EnquiryForm isEnquiry={isEnquiry} setIsEnquiry={setIsEnquiry} />
    </div>
  );
}

export default Touch;
