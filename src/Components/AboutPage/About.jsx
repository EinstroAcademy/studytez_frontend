import React, { useEffect, useState } from "react";
import "./about.css";
import work from "../../Images/logo/work2.png";
import mission from "../../Images/icons/mission1.png";
import vision from "../../Images/icons/vision1.png";
import value from "../../Images/icons/values1.png";
import contact from "../../Images/icons/contactus2.png";
import { Input, Label } from "reactstrap";
import send from "../../Images/icons/send.png";
import map from "../../Images/icons/map.jpg";
import since from "../../Images/icons/since.jpeg";
import student from "../../Images/icons/student1.png";
import country from "../../Images/icons/country.jpeg";
import teacher from "../../Images/icons/teacher.png";
import Layout from "../Layout/Layout";

function About() {
  const [isContact, setIsContact] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      
        <div className="container-fluid p-0 about-main-bg">
          <div className="container px-2">
            <section id="whoWeAre">
              <div className="about-heads">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 xol-xxl-6">
                    <div className="about-content">
                      <h1 className="">Who we are</h1>
                      <p>
                        Einstro Study Abroad is a business unit of Einstro
                        Technical Services Private Limited. Founded in 2014.
                        Einstro was started with a simple goal to help
                        professionals and students navigate the complexities of
                        studying abroad and find jobs abroad to make their
                        dreams a reality. Over the years, we have grown into a
                        trusted name in the industry, assisting thousands of
                        students in finding the perfect study abroad
                        opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 xol-xxl-6">
                    <div className="">
                      <img src={work} className="work-img" loading="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="container my-5">
              <div className="about-ratio">
                <div className="row justify-content-center">
                  <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 my-2">
                    <div className="text-center">
                      <img src={since} className="about-ico" loading="lazy"/>
                      <h4>Since 2014</h4>
                      {/* <h6>10 Years of Excellence</h6> */}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 my-2">
                    <div className="text-center">
                      <img src={country} className="about-ico" loading="lazy"/>
                      <h4>20+ Countries</h4>
                      {/* <h6>Students from allover the world</h6> */}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 my-2">
                    <div className="text-center">
                      <img src={student} className="about-ico" loading="lazy"/>
                      <h4>10K+ Students</h4>
                      {/* <h6>Benefited from Einstro Academy</h6> */}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 my-2">
                    <div className="text-center">
                      <img src={teacher} className="about-ico" loading="lazy"/>
                      <h4>Highly-Qualified experts</h4>
                      {/* <h6>India's best teachers on our platform</h6> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container  px-2">
            <section id="whatWeDo">
              <div className="about-second">
                <div className="about-sec-head">
                  <h1 className="py-2">What we Do</h1>
                </div>
                <div className="container about-sec-content">
                  <div className="row align-items-start">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                      <div className="about-sec-circle">
                        <img src={mission} className="circle-img" loading="lazy"/>
                      </div>
                      <div className="about-sec-box">
                        <h3>Our Mission</h3>
                        <p>
                          Our mission is to make international education
                          accessible to all students by providing expert
                          guidance, personalized support, and comprehensive
                          services that ensure a smooth and enriching study
                          abroad experience.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                      <div className="about-sec-circle">
                        <img src={vision} className="circle-img" loading="lazy"/>
                      </div>
                      <div className="about-sec-box">
                        <h3>Our Vision</h3>
                        <p>
                          We envision a world where every student has the
                          opportunity to broaden their horizons, gain a global
                          perspective, and achieve their fullest potential
                          through international education.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                      <div className="about-sec-circle">
                        <img src={value} className="circle-img" loading="lazy"/>
                      </div>
                      <div className="about-sec-box">
                        <h3>Our Values</h3>
                        <p>
                          Excellence, Integrity and Commitment. We strive for
                          the highest standards and conduct our business with
                          honesty, transparency, and building trust with
                          students, parents and partner institutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="container py-2">
            <div className="contact-country">
              <h1>
                Einstro Study Abroad has assisted over 10,000 students in test
                preparation and admission counseling from all over the world.
              </h1>
              <p>
                We have changed the lives of students by providing high-quality
                education and fulfilled their dreams.
              </p>
              <div>
                <img src={map} loading="lazy"/>
              </div>
            </div>
          </div>

          <div className="container  px-2 my-5">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className="contact-content">
                  <h1>Join Us</h1>
                  <p>
                    Are you ready to embark on your study abroad adventure?
                    Contact Einstro Study Abroad today and let us help you make
                    your dreams come true.
                  </p>
                </div>
                {!isContact && (
                  <div className="text-center py-2">
                    <button
                      onClick={() => setIsContact(!isContact)}
                      className="contact-btn"
                    >
                      Contact
                    </button>
                  </div>
                )}

                {isContact && (
                    <div className="container w-50">
                      <div className="py-2">
                        <Input placeholder="Name" />
                      </div>
                      <div className="py-2">
                        <Input placeholder="Email" />
                      </div>
                      <div className="py-2">
                        <Input placeholder="Queries" />
                      </div>
                      <div className="text-center py-2">
                        <button
                          onClick={() => setIsContact(!isContact)}
                          className="contact-btn-send"
                        >
                          <img src={send} loading="lazy"/>
                          Send
                        </button>
                      </div>
                    </div>
                )}
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className="contact-head">
                  <img src={contact} className="contact-img" loading="lazy"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default About;
