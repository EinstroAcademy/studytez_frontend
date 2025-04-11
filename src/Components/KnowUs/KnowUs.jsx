import React from 'react'
import knowus from '../../Images/home/knowus.png'
import './know.css'

function KnowUs() {
  return (
    <div className="container know-container">
      <div className="row align-items-center">
        <div className="col-6">
          <div className="know-left">
            <h1 className="py-2 know-head">Get to Know Us</h1>
            <h4 className="py-2">
              Your dreams need more than just promises—they deserve unwavering
              support. That’s exactly what we’re here to provide.
            </h4>
            <p className="py-2 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              itaque omnis saepe impedit dolorum, praesentium neque cumque
              dignissimos, minima quasi officia velit minus? Quaerat ipsa, unde
              sunt quam dignissimos laboriosam veritatis earum magnam soluta
              quisquam.
            </p>
            <div className="py-2">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Know More</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="text-center know-right">
            <img src={knowus} className="know-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowUs