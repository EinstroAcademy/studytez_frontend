import React, { useEffect, useState } from "react";
import "./study.css";
import IETS from "../../Images/country/iets-4.png";
import suleka from "../../Images/service/suleka.png";
import google from "../../Images/service/google.png";
import justdial from "../../Images/service/justdial.png";
import urban from "../../Images/service/urban.png";
import check from "../../Images/icons/check-1.png";
import check2 from "../../Images/icons/check-2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import australiaData from "../StudyJsonData/australia.json";
import ukData from "../StudyJsonData/uk.json";
import canadaData from "../StudyJsonData/canada.json";
import usaData from "../StudyJsonData/usa.json";
import germanyData from "../StudyJsonData/germany.json";
import irelandData from "../StudyJsonData/ireland.json";
import franceData from "../StudyJsonData/france.json";
import { useNavigate, useParams } from "react-router-dom";
import { Nav, NavItem, NavLink, TabContent, TabPane, Table } from "reactstrap";
import Testimonial from "../Testimonial/Testimonial";
import Layout from "../Layout/Layout";
import request, { NodeURL } from "../../api/api";
import EnquiryForm from "../floatingMenu/EnquiryForm";

function Study() {
  const navigate = useNavigate()
  const [studyData, setStudyData] = useState({});
  const [isEnquiry, setIsEnquiry] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [countryUni,setCountryUni] = useState([])
  const params = useParams();

  useEffect(() => {
    if (params.id === "Australia") {
      setStudyData(JSON.parse(JSON.stringify(australiaData)));
    }
    if (params.id === "UK") {
      setStudyData(JSON.parse(JSON.stringify(ukData)));
    }
    if (params.id === "Canada") {
      setStudyData(JSON.parse(JSON.stringify(canadaData)));
    }
    if (params.id === "USA") {
      setStudyData(JSON.parse(JSON.stringify(usaData)));
    }
    if (params.id === "Germany") {
      setStudyData(JSON.parse(JSON.stringify(germanyData)));
    }
    if (params.id === "Ireland") {
      setStudyData(JSON.parse(JSON.stringify(irelandData)));
    }
    if (params.id === "France") {
      setStudyData(JSON.parse(JSON.stringify(franceData)));
    }
    window.scrollTo(0, 0);
  }, [params]);

  const { part1, part2, universities, courses } = studyData;

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const getCountryUni =()=>{
    request({
      url:'/client/country/university/list',
      method:'POST',
      data:{country:params.id}
    }).then((res)=>{
      if(res.status===1){
        setCountryUni(res.response)
      }
      if(res.status===0){
        console.log(res.message)
      }
    })
  }

  useEffect(()=>{
    if(params.id){
      getCountryUni()
    }
  },[])

  return (
    <>
    <Layout>
    <div className="container p-0">
          <div className="study-part-1">
            <div className="study-part-left">
              <h1 className="px-2">{part1?.title}</h1>
              <h4 className="px-2">{part1?.subtitle}</h4>
              <div className="d-flex my-3 study-content">
                <span className="px-2">
                  <img className="check-icon" src={check2} loading="lazy"/>
                </span>

                <div className="px-2">{part1?.services?.join(" | ")}</div>
              </div>
              <div>
                <button
                  className="enroll-btn"
                  onClick={() => setIsEnquiry(!isEnquiry)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="study-part-right">
              <img src={part1?.images?.url} loading="lazy"/>
            </div>
          </div>
          <div className="study-part-2">
            <div className="text-center">
              <h1 className="study-part2-heading">{part2?.title}</h1>
            </div>
            <div
              className={
                part2?.imagePlace === "left"
                  ? "study-part-2-main"
                  : "study-part-2-main reverse"
              }
            >
              <div className="study-part-2-left">
                <img src={part2?.images?.url} loading="lazy"/>
              </div>
              <div className="study-part-2-right">
                <p className="right-2-content">{part2?.introduction}</p>
                <div className="study-2-list">
                  <div className="list-head">
                    Here are 5 key benefits of studying abroad in {params?.id}:
                  </div>
                  <ul className="">
                    {part2?.benefits?.map((list) => {
                      return (
                        <li className="d-flex">
                          <img src={check2} className="check-icon" loading="lazy"/>
                          <span className="px-2">{list?.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="study-part-3">
            <div className="text-center">
              <h1 className="study-part3-heading">Explore Universities</h1>
            </div>
            <div className="container">
              <div className="study-explore-uni">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  slidesPerView={"auto"}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={{ clickable: true }}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="mySwiper"
                >
                  {countryUni?.map((list) => {
                    return (
                      <SwiperSlide className="swiper-slide-uni" onClick={()=>navigate(`/university/${list?.uniId}`)}>
                        <img src={`${NodeURL}/${list?.images[0]}`} className="uni-img" loading="lazy"/>
                        <div>
                          <h5 className="uni-name">{list.name}</h5>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {courses?.title && (
          <div className="container-fluid study-part-4 ">
            <div className="container study-part-4 ">
              <div className="text-center">
                <h1 className="study-part3-heading">{courses?.title}</h1>
              </div>
              <div className=" course-bg">
                <div className="row study-4-course">
                  {courses?.categories?.map((list) => {
                    return (
                      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 study-4-col">
                        <div className="study-col">
                          <h6 className="study-col-head">{list.category}</h6>
                        </div>
                        <div className="study-col-list">
                          <ul>
                            {list?.courses?.map((deg) => {
                              return (
                                <li className="study-list-deg">
                                  <div className="d-flex">
                                    <img src={check} className="check-icon" loading="lazy"/>
                                    <span className="px-2">{deg}</span>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
               
              </div>
            </div>
          </div>
        )}

        {studyData?.sub_nav && (
          <section>
            <div className="container p-0 mt-5">
              <Nav id="studyTabs" tabs>
                <NavItem>
                  <NavLink
                    className={`${activeTab === "1" ? "active" : ""}`}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Admission Requirement
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`${activeTab === "2" ? "active" : ""}`}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Intake
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`${activeTab === "3" ? "active" : ""}`}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Cost
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`${activeTab === "4" ? "active" : ""}`}
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    Visa Requirements
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`${activeTab === "5" ? "active" : ""}`}
                    onClick={() => {
                      toggle("5");
                    }}
                  >
                    Scholarship
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`${activeTab === "6" ? "active" : ""}`}
                    onClick={() => {
                      toggle("6");
                    }}
                  >
                    Post-Study Work Visa
                  </NavLink>
                </NavItem>
              </Nav>
              <div className="container">
                <div className="row mobile-row">
                  <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                    <TabContent
                      activeTab={activeTab}
                      className="study_tab_content"
                    >
                      <TabPane className="study_tab_pane" tabId="1">
                        <div className="container mt-5">
                          {studyData?.admission_requirements?.course?.map(
                            (list) => {
                              return (
                                <>
                                  <h6>{list?.name}</h6>
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: list?.details,
                                    }}
                                  ></p>
                                </>
                              );
                            }
                          )}
                          {studyData?.admission_requirements?.exams_required
                            .description && (
                            <h6>
                              Exams Required to Study at {params.id}{" "}
                              Universities
                            </h6>
                          )}

                          <p>
                            {
                              studyData?.admission_requirements?.exams_required
                                ?.description
                            }
                          </p>
                          <h6 className="ps-3">
                            {
                              studyData?.admission_requirements?.exams_required
                                ?.title
                            }
                          </h6>
                          <ul className="">
                            {studyData?.admission_requirements?.exams_required?.list?.map(
                              (list) => {
                                return (
                                  <li className="d-flex">
                                    <img src={check2} className="check-icon" loading="lazy"/>
                                    <span className="px-2">{list}</span>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </TabPane>
                      <TabPane className="study_tab_pane" tabId="2">
                        <div className="container mt-5">
                          {studyData?.intake?.map((list) => {
                            return (
                              <>
                                <h6>{list?.name}</h6>
                                <ul className="">
                                  {list?.details?.map((item) => {
                                    return (
                                      <li className="d-flex">
                                        <img
                                          src={check2}
                                          className="check-icon"
                                          loading="lazy"
                                        />
                                        <span className="px-2">{item}</span>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </>
                            );
                          })}
                        </div>
                      </TabPane>
                      <TabPane className="study_tab_pane" tabId="3">
                        <div className="container mt-5">
                          <h6>Cost</h6>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: studyData?.cost?.description,
                            }}
                          ></p>
                          <div>
                            <Table bordered className="text-center">
                              <thead>
                                <tr>
                                  {studyData?.cost?.table_headings.map(
                                    (list) => {
                                      return <th>{list}</th>;
                                    }
                                  )}
                                </tr>
                              </thead>
                              <tbody>
                                {studyData?.cost?.cost_per_year?.map((list) => {
                                  return (
                                    <tr>
                                      <td>{list.degree}</td>
                                      <td>{list.costInGBP}</td>
                                      {list.costInINR && (
                                        <td>{list?.costInINR}</td>
                                      )}
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane className="study_tab_pane" tabId="4">
                        <div className="container mt-5">
                          {/* <h6>{params.id} Student VISA Requirement:</h6> */}
                          <p
                            dangerouslySetInnerHTML={{
                              __html: studyData?.visa_requirements?.description,
                            }}
                          ></p>
                          <ul className="">
                            {studyData?.visa_requirements?.list?.map((item) => {
                              return (
                                <li className="d-flex">
                                  <img src={check2} className="check-icon" loading="lazy"/>
                                  <span className="px-2">{item}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </TabPane>
                      <TabPane className="study_tab_pane" tabId="5">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: studyData?.scholarship?.content,
                          }}
                        ></div>
                        {studyData?.scholarship?.scholarship_table?.length >
                          0 && (
                          <div>
                            <Table bordered className="text-center">
                              <thead>
                                <tr>
                                  {studyData?.scholarship?.scholarship_table?.map(
                                    (list) => {
                                      return <th>{list}</th>;
                                    }
                                  )}
                                </tr>
                              </thead>
                              <tbody>
                                {studyData?.scholarship?.scholarship_details?.map(
                                  (list) => {
                                    return (
                                      <tr>
                                        <td>{list.name}</td>
                                        <td>{list.amount}</td>
                                      </tr>
                                    );
                                  }
                                )}
                              </tbody>
                            </Table>
                          </div>
                        )}
                      </TabPane>
                      <TabPane className="study_tab_pane" tabId="6">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: studyData?.post_study?.description,
                          }}
                        ></div>
                        <div>
                          <Table bordered className="text-center">
                            <thead>
                              <tr>
                                <th>Sector</th>
                                <th>Median Annual Salary</th>
                              </tr>
                            </thead>
                            <tbody>
                              {studyData?.post_study?.jobs?.map((list) => {
                                return (
                                  <tr>
                                    <td>{list.jobTitle}</td>
                                    <td>{list.averageAnnualSalaryGBP}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>
                        </div>
                      </TabPane>
                    </TabContent>
                  </div>
                  <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 text-center mt-5">
                    <img src={studyData?.reqImage} className="req_image" loading="lazy"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="container-fluid study-part-5">
          <div className="container">
            <div className="text-center">
              <h1 className="study-part3-heading">
                One-stop solution for Study Abroad
              </h1>
            </div>
            <div className="row my-5">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <img src={IETS} className="img-fluid" loading="lazy"/>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-2 ps-5">
                <div className="d-flex py-2  align-items-start study-part-iets">
                  <div className="mx-4">
                    <h1 className="number-iets">1</h1>
                  </div>
                  <div>
                    <h4 className="iets-content">
                      IELTS Test Preparation Academic and General Training
                    </h4>
                  </div>
                </div>
                <div className="d-flex py-2 align-items-start study-part-iets">
                  <div className="mx-3">
                    <h1 className="number-iets">2</h1>
                  </div>
                  <div>
                    <h4 className="iets-content">
                      IELTS Test Registration Get free support for booking your
                      exams
                    </h4>
                  </div>
                </div>
                <div className="d-flex py-2 align-items-start study-part-iets">
                  <div className="mx-3">
                    <h1 className="number-iets">3</h1>
                  </div>
                  <div>
                    <h4 className="iets-content">
                      Get Free Counselling for Admissions in Top Universities -
                      UK, USA, Canada etc
                    </h4>
                  </div>
                </div>
                <div className="d-flex py-2 align-items-start study-part-iets-last">
                  <div className="mx-3">
                    <h1 className="number-iets">4</h1>
                  </div>
                  <div>
                    <h4 className="iets-content py-3">Visa Assistance</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonial />
        <div className="container-fluid">
          <div className="container">
            <div className="text-center">
              <h3 className="study-part6-heading">
                Our study abroad program has transformed numerous students'
                lives. They enjoy learning with us because...
              </h3>
            </div>
            <div className="container my-5 py-5">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 my-3">
                  <div className="d-flex align-items-center justify-content-evenly study-rating-card">
                    <div className="study-rating-head">
                      <h3 className="study-rating">4.6 Rating</h3>
                    </div>
                    <div className="study-rating-img">
                      <img src={suleka} loading="lazy"/>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 my-3">
                  <div className="d-flex align-items-center justify-content-evenly study-rating-card">
                    <div className="study-rating-head">
                      <h3 className="study-rating">4.9 Rating</h3>
                    </div>
                    <div className="study-rating-img">
                      <img src={google} loading="lazy"/>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 my-3">
                  <div className="d-flex align-items-center justify-content-evenly study-rating-card">
                    <div className="study-rating-head">
                      <h3 className="study-rating">4.7 Rating</h3>
                    </div>
                    <div className="study-rating-img">
                      <img src={justdial} loading="lazy"/>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 my-3">
                  <div className="d-flex align-items-center justify-content-evenly study-rating-card">
                    <div className="study-rating-head">
                      <h3 className="study-rating">5.0 Rating</h3>
                    </div>
                    <div className="study-rating-img">
                      <img src={urban} loading="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center my-5">
                  <button
                    className="book-btn"
                    onClick={() => setIsEnquiry(!isEnquiry)}
                  >
                    Get Free Counselling
                  </button>
                </div>
            </div>
          </div>
        </div>
        <EnquiryForm isEnquiry={isEnquiry} setIsEnquiry={setIsEnquiry} />
    
    </Layout>
       </>
  );
}

export default Study;
