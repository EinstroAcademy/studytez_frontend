import React from "react";
import "./touch.css";
import student from "../../Images/home/student.png";

function Touch() {
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
            <button class="learn-more">
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
    </div>
  );
}

export default Touch;
