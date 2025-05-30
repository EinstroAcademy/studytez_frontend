import React, { useEffect, useState } from "react";
import "./university.css";
import Layout from "../Layout/Layout";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import request, { NodeURL } from "../../api/api";

import college from '../../Images/icons/college1.png'
import globe from '../../Images/icons/global.png'
import graph from '../../Images/icons/graph.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from "swiper/modules";



export const countryOptions = [
  { label: "United Kingdom", value: "UK" },
  { label: "USA", value: "USA" },
  { label: "Canada", value: "Canada" },
  { label: "Germany", value: "Germany" },
  { label: "Ireland", value: "Ireland" },
  { label: "Australia", value: "Australia" },
  { label: "France", value: "France" },
];


function University() {
  const navigate = useNavigate()
  const params = useParams()
   const [activeTab, setActiveTab] = useState("1");
   const [universityCourse,setUniversityCourse] = useState([])
   const [universityDetail,setUniversityDetail] = useState({})
   const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const getUniversityDetails = ()=>{
    request({
      url:'/client/university/details',
      method:"POST",
      data:{universityId:params.uniId}
    }).then((res)=>{
      if(res.status===1){
        setUniversityDetail(res.response)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  const fetchUniversityList = () =>{
    request({
      url:'/client/university/course/list',
      method:"POST",
      data:{universityId:params.uniId}
    }).then((res)=>{
      if(res.status===1){
        setUniversityCourse(res.courseList)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    if(params.uniId){
      fetchUniversityList()
    }
  },[params.uniId])

  useEffect(()=>{
    if(params.uniId){
      getUniversityDetails()
    }
  },[params.uniId])

  console.log(universityDetail)

  return (
    <Layout>
      <div className="container">
        <div className="">
          <div className="university-img-box">
          {
              universityDetail?.images?.length>0 && <div>
                <Swiper className="university-img-swiper"
                  modules={[Autoplay, EffectFade]}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  loop
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
             
              >
                {
                  universityDetail?.images?.map((imgs,indx)=>{
                    return  <SwiperSlide key={indx}>
                      <img src={`${NodeURL}/${imgs}`}/>
                    </SwiperSlide>
                  })
                }
              </Swiper>
            </div>
            }
          </div>
          <div className="d-flex">
            <div>
              <h5 className="university-name">{universityDetail.name}</h5>
              <div className="uni-loc">
                <u onClick={() => navigate(`/destination/${universityDetail.country}`)}>
                  {countryOptions.find((list)=>list.value===universityDetail?.country)?.label}
                </u>{" "}
                <span>Express Offer</span>
              </div>
            </div>
          </div>
          <div className="mt-5 uni-box">
            <div className="row">
              <div className="col-7">
                <div className="uni-details">
                  <div className="text-center uni-content">
                    <img  src={college}/>
                    <div className="uni-ans">{universityDetail?.students}</div>
                    <div className="text-muted">International Students</div>
                  </div>
                  <div className="text-center uni-content">
                    <img  src={globe}/>
                    <div className="uni-ans">{universityDetail?.rank}</div>
                    <div className="text-muted">Ranking</div>
                  </div>
                  <div className="text-center uni-content">
                    <img  src={graph}/>
                    <div className="uni-ans">65%</div>
                    <div className="text-muted">Acceptance Rate</div>
                  </div>
                </div>
                <div className="uni-option">
                  <Nav id="universityTabs" tabs>
                    <NavItem>
                      <NavLink
                        className={`${activeTab === "1" ? "active" : ""}`}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Course
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={`${activeTab === "2" ? "active" : ""}`}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        About
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={`${activeTab === "3" ? "active" : ""}`}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Scholarship
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={`${activeTab === "4" ? "active" : ""}`}
                        onClick={() => {
                          toggle("4");
                        }}
                      >
                        Requirements
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <section>
                  <div className="container p-0 mt-5">
                    <div className="container">
                      <div className="row mobile-row">
                        <div className="">
                          <TabContent
                            activeTab={activeTab}
                            className="study_tab_content"
                          >
                            <TabPane className="study_tab_pane" tabId="1">
                              <div className="container">
                                <div className="row">
                                  {
                                      universityCourse?.map((list)=>{
                                        return <div className="col-6 p-2" onClick={()=>navigate(`/course/details/${list.courseId}`)}>
                                        <div className="university-course-card">
                                          <div>
                                            <h5 className="course-name">
                                             {list?.title}
                                            </h5>
                                            <div className="text-end mb-3">
                                              <span className="offer">
                                                {" "}
                                                Express Offer
                                              </span>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-6">
                                              <div className="course-details">
                                                <h6>{list?.fees}</h6>
                                                <div>Fee</div>
                                              </div>
                                            </div>
                                            <div className="col-6">
                                              <div className="course-details">
                                                <h6>{list?.duration}</h6>
                                                <div>Duration</div>
                                              </div>
                                            </div>
                                            <div className="col-6">
                                              <div className="course-details">
                                                <h6>'</h6>
                                                <div>Next Intake</div>
                                              </div>
                                            </div>
                                            <div className="col-6">
                                              <div className="course-details">
                                                <h6>{list?.qualification}</h6>
                                                <div>Study Level</div>
                                              </div>
                                            </div>
                                          </div>
                                          <div>
                                              <div className="d-flex justify-content-between mt-3">
                                              <button class="apply-btn">
                                                View Details
                                              </button>
                                              <button class="apply-btn">
                                                Apply Now
                                                <svg
                                                  fill="currentColor"
                                                  viewBox="0 0 24 24"
                                                  class="icon"
                                                >
                                                  <path
                                                    clip-rule="evenodd"
                                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                                    fill-rule="evenodd"
                                                  ></path>
                                                </svg>
                                              </button>
                                              </div>
                                          </div>
                                        </div>
                                      </div>
                                      })
                                  }
                                  
                                </div>
                              </div>
                            </TabPane>
                            <TabPane
                              className="study_tab_pane"
                              tabId="2"
                            >
                              <div dangerouslySetInnerHTML={{__html:universityDetail?.details}}>

                              </div>
                            </TabPane>
                            <TabPane
                              className="study_tab_pane"
                              tabId="3"
                            ></TabPane>
                            <TabPane
                              className="study_tab_pane"
                              tabId="4"
                            ></TabPane>
                          </TabContent>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-5">
                <div>
                  <div class="card">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <div className="d-flex justify-content-between">
                          <span>Upcoming Intake</span>
                          <span>Sep 2025</span>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div className="d-flex justify-content-between">
                          <span>Tution Fee</span>
                          <span>Starts from 23,500 GBP</span>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div className="d-flex justify-content-between">
                          <span>English Requirement</span>
                          <span>IELTS, TOEFL</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default University;
