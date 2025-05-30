import React, { useEffect, useState } from "react";
import "./about.css";
import tellus from "../../Images/home/7.png";
import guidence from "../../Images/home/8.png";
import support from "../../Images/home/9.png";
import { useInView } from 'react-intersection-observer';

import check2 from "../../Images/icons/check-2.png";

function About() {
  const [activeImage, setActiveImage] = useState(tellus);

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView1) setActiveImage(tellus);
    else if (inView2) setActiveImage(guidence);
    else if (inView3) setActiveImage(support);
  }, [inView1, inView2, inView3]);
  
  return (
    <div className="container about-main">
      <div>
        <h1 className="about-head">
        Turning Ambitions into Admissions Seamlessly
        </h1>
      </div>
      <div className="about-container">
        <div className="about-left">

          <div className="about-left-content" ref={ref1}>
            <h3 className="d-flex align-items-center"><span className="count">1</span>Share your dream course and destination!</h3>
            <p>
            <img src={check2} width={'20px'} className="me-2"/>At Studytez, we’ll guide you step-by-step to make your study abroad journey a reality.
              Our expert counsellors provide personalised support, helping you choose the right university, course, and country, ensuring a smooth and successful transition to your global future.

            </p>
          </div>
          <div className="about-left-content" ref={ref2}>
            <h3 className="d-flex align-items-center"><span className="count">2</span> Student Application Preparation & Submission</h3>
            <p>
            <img src={check2} width={'20px'} className="me-2"/>We assist you in preparing and submitting your university applications with care and precision. Our team verifies your academic credentials, ensures eligibility, and helps you choose the best course and university based on your goals and preferred destination.
             </p>
             <p>
             <img src={check2} width={'20px'} className="me-2"/>We guide you to take the required standardised tests, such as IELTS, TOEFL, GRE, or GMAT, depending on your chosen program and country. We also provide coaching support to help you score well.
              </p>
              
              <p>
              <img src={check2} width={'20px'} className="me-2"/>We handle the entire application process, submit it on your behalf, and ensure you receive your Offer or Admission Letter. Throughout the journey, we offer continuous support to make your study abroad dream a smooth and successful reality.
              </p>
             
          </div>
          <div className="about-left-content" ref={ref3}>
            <h3 className="d-flex align-items-center"><span className="count">3</span> Acceptance, Fees, Visa & Financial Support</h3>
            <p>
            <img src={check2} width={'20px'} className="me-2"/> Accept the Offer & Finalize Enrollment: Once you receive your Offer Letter, we help you accept the offer and complete all university enrollment formalities.
            </p>
            <p>
            <img src={check2} width={'20px'} className="me-2"/> Education Loan Assistance: We assist in securing education loans from leading Banks and NBFCs, with or without collateral. Our team guides you through the documentation and application process to ensure timely approval and disbursement.
            </p>
            <p>
            <img src={check2} width={'20px'} className="me-2"/> Apply for Your Student Visa: We help you prepare visa documents, submit your application, and attend visa interviews confidently — ensuring you meet all immigration requirements.
            </p>
            <p>
            <img src={check2} width={'20px'} className="me-2"/> Prepare for Departure: Our support includes travel planning, accommodation arrangements, and other pre-departure logistics to help you start your overseas journey stress-free.
            </p>
          </div>
        </div>
        <div className="about-right">
          <div className="about-right-child">
          <img src={activeImage} alt="Scroll Image" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
