import React, { useEffect, useState } from "react";
import "./course.css";
import Layout from "../Layout/Layout";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import request from "../../api/api";
import Select from "react-select";
import {Button, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader} from 'reactstrap'

import globe from '../../Images/icons/globe.png'
import location from '../../Images/icons/location.png'
import college from '../../Images/icons/college.png'
import { countryOptions } from "../University/University";
import { useSelector } from "react-redux";


export const studyLevels = [
  {
    label: "Doctorate",
    value: "Doctorate",
  },
  {
    label: "Postgraduate",
    value: "Postgraduate",
  },
  {
    label: "Undergraduate",
    value: "Undergraduate",
  },
];

function CourseList() {
  const navigate = useNavigate()
  const location = useLocation();
  const token = useSelector((state)=>state.auth.token)
  const [counts, setCounts] = useState({});
  const [isFilter,setIsFilter] = useState(false)
  const [isLoading,setIsLoading] = useState(true)
  const [reqData, setReqData] = useState({
    search: location?.state?.search ?? '',
    filterBy: "",
    limit:3
  });
  const [searchResult, setSearchResult] = useState({
    subjects: [],
    universities: [],
    courses: [],
  });

  const handleSearch = () => {
    const value = location?.state?.search.trim();
    if (value === "") {
      setSearchResult({ subjects: [], universities: [], courses: [] });
      return;
    }

    request({
      url: "/client/main/search/details",
      method: "POST",
      data: reqData,
    }).then((res) => {
      if (res.status === 1) {
        setIsLoading(false)
        const updatedResult = {
          courses: res?.response?.courses ?? [],
          universities: res?.response?.universities ?? [],
          subjects: res?.response?.subjects ?? [],
        };
        setCounts(res?.response?.count);
        setSearchResult(updatedResult);
      } else {
        alert(res.message);
      }
    });
  };

  useEffect(() => {
    if (location?.state?.search !== "") {
      handleSearch();
    }
  }, [reqData]);

  useEffect(()=>{
    setReqData((prev) => ({
      ...prev,
      search: location?.state?.search ?? '',
    }));
  },[location?.state?.search,])

  console.log(location)

  const noResults =
    searchResult.courses.length === 0 && searchResult.universities.length === 0;

  const onViewAll =(filter)=>{
    if(token){
      setReqData({...reqData,filterBy:filter,limit:50})
    }else{
      navigate('/login')
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>Explore Study Abroad Courses | Studytez Abroad</title>

        <meta
          name="description"
          content="Browse a wide range of study abroad courses offered in countries like the UK, USA, Canada, Australia, and Europe. Choose your dream program today with Einstro."
        />

        <meta
          name="keywords"
          content="study abroad courses, international programs, bachelor's abroad, master's abroad, Einstro, overseas education, course list, study programs, UK USA Canada Australia courses"
        />

        <link
          rel="canonical"
          href="https://www.einstrostudyabroad.com/courses"
        />

        <meta
          property="og:title"
          content="Explore Study Abroad Courses | Studytez"
        />
        <meta
          property="og:description"
          content="Discover the perfect international course for your future. Find bachelor's and master's programs in top countries like the UK, USA, Canada, and more."
        />
        <meta
          property="og:image"
          content="https://www.einstrostudyabroad.com/assets/courses-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://www.einstrostudyabroad.com/courses"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Explore Study Abroad Courses | Einstro"
        />
        <meta
          name="twitter:description"
          content="Browse top international courses and start your study abroad journey with Einstro."
        />
        <meta
          name="twitter:image"
          content="https://www.einstrostudyabroad.com/assets/courses-banner.jpg"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="robots" content="index, follow" />
      </Helmet>
      <div class="container course-container">
        <div class="topbar">
          <div class="row">
            <div class="col-12">
              <div class="top">
                <h5>
                  Search result for{" "}
                  <span className="search-words">
                    {location?.state?.search ? location?.state?.search : "All"}
                  </span>
                </h5>

                <div className="search-result-counts">
                  <div>
                    <span>{counts.total} Results</span>
                    <span>{counts.courses} Courses</span>
                    <span>{counts.subjects} Subjects</span>
                    <span>{counts.universities} Universities</span>
                  </div>
                  <div>
                    <button title="filter" class="filter" onClick={()=>setIsFilter(!isFilter)}>
                      <svg viewBox="0 0 512 512" height="1em">
                        <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          {isLoading ? (
            <>
              <div class="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </>
          ) : (
            <>
              {searchResult.courses.length > 0 && (
                <>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Courses</h5>
                    <div>
                      <div class="btn-conteiner">
                        <a class="btn-content" onClick={()=>onViewAll('courses')} >
                          <span class="btn-title">View All</span>
                          <span class="icon-arrow">
                            <svg
                              width="20px"
                              height="20px"
                              viewBox="0 0 66 43"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <g
                                id="arrow"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  id="arrow-icon-one"
                                  d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                  fill="#FFFFFF"
                                ></path>
                                <path
                                  id="arrow-icon-two"
                                  d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                  fill="#FFFFFF"
                                ></path>
                                <path
                                  id="arrow-icon-three"
                                  d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                  fill="#FFFFFF"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {searchResult.courses.map((course) => {
                    return (
                      <div className="col-4">
                        <div class="card my-4 course-card">
                          <div className="d-flex justify-content-between align-items-center">
                            <h5 class="card-title fs-6" onClick={()=>navigate(`/course/details/${course?.courseId}`)}>{course.title}</h5>
                          </div>
                          <h5 class="card-subtitle fs-6 py-2">
                            {" "}
                            <span onClick={()=>navigate(`/university/${course?.universityId?.uniId}`,{state:{uniId:course?.universityId?._id}})}>{course?.universityId?.name}</span>
                          </h5>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <div class="info-sub">Durations</div>
                              <div class="info-title">{course.duration}</div>
                            </div>
                            <div>
                              <div class="info-sub">Average Fees</div>
                              <div class="info-title">
                                {course?.universityId?.currency?.symbol}{" "}
                                {course.fees}
                              </div>
                            </div>
                          </div>
                          <div class="apply-link">
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
                    );
                  })}
                </>
              )}
            </>
          )}
        </div>
        {isLoading ? (
          <> 
            <div class="loader"></div>
          </>
        ) : (
          <>
            <div className="row">
              {searchResult.universities.length > 0 && (
                <>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Universities</h5>
                    <div>
                      <div class="btn-conteiner">
                        <a class="btn-content" href="#" onClick={()=>onViewAll('universities')}  >
                          <span class="btn-title">View All</span>
                          <span class="icon-arrow">
                            <svg
                              width="20px"
                              height="20px"
                              viewBox="0 0 66 43"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <g
                                id="arrow"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  id="arrow-icon-one"
                                  d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                  fill="#FFFFFF"
                                ></path>
                                <path
                                  id="arrow-icon-two"
                                  d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                  fill="#FFFFFF"
                                ></path>
                                <path
                                  id="arrow-icon-three"
                                  d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                  fill="#FFFFFF"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {searchResult.universities.map((university) => {
                    return (
                      <div className="col-4" >
                        <div class="card my-4 course-card">
                          <div className="d-flex justify-content-between align-items-center">
                            <h5 class="card-title" onClick={()=>navigate(`/university/${university.uniId}`,{state:{uniId:university?.uniId}})}>{university?.name}</h5>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <div class="info-sub">Rank</div>
                              <div class="info-title">{university.rank}</div>
                            </div>
                            <div>
                              <div class="info-sub">Country</div>
                              <div class="info-title" onClick={()=>navigate(`/destination/${university.country}`,{state:{uniId:university?.country}})}>{university.country}</div>
                            </div>
                            <div>
                              <div class="info-sub">Location</div>
                              <div class="info-title">
                                {university.location}
                              </div>
                            </div>
                          </div>
                          <div class="apply-link">
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
                    );
                  })}
                </>
              )}
            </div>
          </>
        )}

        {noResults && <div>No results found.</div>}
      </div>

      <Offcanvas
        direction="end"
        isOpen={isFilter}
        toggle={() => setIsFilter(!isFilter)}
        zIndex={'99990'}
      >
        <OffcanvasHeader toggle={() => setIsFilter(!isFilter)}>
          Filters
        </OffcanvasHeader>
        <OffcanvasBody>
          <FiltersPanel  reqData={reqData} setReqData={setReqData}/>
        </OffcanvasBody>
      </Offcanvas>
    </Layout>
  );
}

export default CourseList;


const FiltersPanel = ({reqData,setReqData}) => {
  const [subjects,setSubjects] = useState([])

   const getAllSubjects = () => {
      request({
        url: "/client/course/get/subject",
        method: "POST",
      }).then((res) => {
        if (res.status === 1) {
          setSubjects(
            res.response.map((list) => {
              return {
                label: list.name,
                value: list._id,
              };
            })
          );
        } else if (res && +res.status === 0) {
          setSubjects([]);
          console.log(res);
        }
      });
    };

    useEffect(()=>{
      getAllSubjects()
    },[])
  return (
    <div className="p-4 filter-container">
      {/* Destination */}
      <div className="mb-4">
        <Label className="form-label fw-semibold"><img src={globe} width={20}/> Destination</Label>
        <Select options={countryOptions} onChange={(e)=>setReqData({...reqData,destination:e.value})}/>
      </div>

      

      {/* Study Level */}
      <div className="mb-4">
        <Label className="form-label fw-semibold">🎓 Study level</Label>
        <Select options={studyLevels} onChange={(e)=>setReqData({...reqData,qualification:e.value})}/>
      </div>

      {/* Subject */}
      <div className="mb-4">
        <Label className="form-label fw-semibold">📚 Subject</Label>
        <Select options={subjects} onChange={(e)=>setReqData({...reqData,subjectId:e.value})}/>
        <small className="text-muted">You can select up to 5</small>
      </div>

      {/* Duration */}
      <div className="mb-4">
        <Label className="form-label fw-semibold">⏳ Duration</Label>
        <div className="d-flex flex-wrap gap-2">
          {[
            "Less than 1 year",
            "1 - 2 years",
            "2 - 3 years",
            "3 - 4 years",
            "4 - 5 years",
            "More than 5 years",
          ].map((label, index) => (
            <Button key={index} color="light" className="rounded-pill border w-auto">
              {label}
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <Label className="form-label fw-semibold">📅 Start Year</Label>
        <div className="d-flex flex-wrap gap-2">
          {Array.from(
            { length: 5 },
            (_, i) => new Date().getFullYear() + i
          ).map((year, index) => (
            <Button key={index} color="light" className="rounded-pill border w-auto">
              {year}
            </Button>
          ))}
        </div>
      </div>

      
    </div>
  );
};
