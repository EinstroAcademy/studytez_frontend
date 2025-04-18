import React, { useEffect, useState } from "react";
import "./course.css";
import Layout from "../Layout/Layout";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import request from "../../api/api";
import Select from "react-select";
import {Button, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader} from 'reactstrap'

import globe from '../../Images/icons/globe.png'
import location from '../../Images/icons/location.png'
import college from '../../Images/icons/college.png'

function CourseList() {
  const location = useLocation();
  const [counts, setCounts] = useState({});
  const [isFilter,setIsFilter] = useState(false)
  const [reqData, setReqData] = useState({
    search: location?.state?.search ??'',
    filterBy: "",
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
  }, [location?.state?.search,reqData]);

  console.log(location)

  const noResults =
    searchResult.courses.length === 0 && searchResult.universities.length === 0;

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
            <div class="col-9">
              <div class="top">
                <h5>
                  Search result for{" "}
                  <span className="search-words">
                    {location?.state?.search}
                  </span>
                </h5>

                <div className="search-result-counts">
                  <span>{counts.total} Results</span>
                  <span
                    onClick={() =>
                      setReqData({ ...reqData, filterBy: "courses" })
                    }
                  >
                    {counts.courses} Courses
                  </span>
                  <span
                    onClick={() =>
                      setReqData({ ...reqData, filterBy: "subjects" })
                    }
                  >
                    {counts.subjects} Subjects
                  </span>
                  <span
                    onClick={() =>
                      setReqData({ ...reqData, filterBy: "universities" })
                    }
                  >
                    {counts.universities} Universities
                  </span>
                </div> 
                <button class="filter-btn mt-3" onClick={()=>setIsFilter(!isFilter)}>Filter</button>
              </div>
            </div>

            <div class="col-3">
              <div class="reset">Reset all filters</div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          {searchResult.courses.length > 0 && (
            <>
              <h5>Courses</h5>
              {searchResult.courses.map((course) => {
                return (
                  <div className="col-6">
                    <div class="card my-4">
                      <div class="row ">
                        <div class="col-6">
                          <h5 class="card-title ">{course.title}</h5>
                          <div class="card-subtitle">
                            {course?.universityId?.name}
                          </div>
                          <div class="apply-link">
                            <a href="#"> Apply Now</a>
                          </div>
                        </div>

                        <div class="col-3 ">
                          <div class="info-title">{course.duration}</div>
                          <div class="info-sub">Durations</div>
                        </div>

                        <div class="col-3">
                          <div class="info-title">
                            {course?.universityId?.currency?.symbol}{" "}
                            {course.fees}
                          </div>
                          <div class="info-sub">Average Fees</div>
                          <a href="#" class="compare-link d-block mt-2">
                            {" "}
                            Add to compare
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>

        <div className="row">
          {searchResult.universities.length > 0 && (
            <>
              <h5>Universities</h5>
              {searchResult.universities.map((university) => {
                return (
                  <div className="col-6">
                    <div class="card my-4">
                      <div class="row ">
                        <div class="col-6">
                          <h5 class="card-title ">{university?.name}</h5>
                          <div class="card-subtitle">{university?.country}</div>
                          <div class="apply-link">
                            <a href="#"> Apply Now</a>
                          </div>
                        </div>

                        <div class="col-3 ">
                          <div class="info-title">{university.rank}</div>
                          <div class="info-sub">Rank</div>
                        </div>

                        <div class="col-3">
                          <div class="info-title">{university.location}</div>
                          <div class="info-sub">Location</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>

        {noResults && <div>No results found.</div>}
      </div>

      <Offcanvas direction="end" isOpen={isFilter} toggle={()=>setIsFilter(!isFilter)}>
        <OffcanvasHeader toggle={()=>setIsFilter(!isFilter)}>
          Filters
        </OffcanvasHeader>
        <OffcanvasBody>
            <FiltersPanel/>
        </OffcanvasBody>
      </Offcanvas>
    </Layout>
  );
}

export default CourseList;


const FiltersPanel = () => {
  return (
    <div className="p-4 filter-container">
      {/* Destination */}
      <div className="mb-4">
        <Label className="form-label fw-semibold"><img src={globe} width={20}/> Destination</Label>
        <Select />
      </div>

      {/* City */}
      <div className="mb-4">
        <Label className="form-label fw-semibold"><img src={location} width={20}/> City</Label>
        <Select />
        <small className="text-muted">You can select up to 5</small>
      </div>

      {/* Institution */}
      <div className="mb-4">
        <Label className="form-label fw-semibold"><img src={college} width={20}/> Institution</Label>
        <Select />
        <small className="text-muted">You can select up to 5</small>
      </div>

      {/* Study Level */}
      <div className="mb-4">
        <Label className="form-label fw-semibold">🎓 Study level</Label>
        <Select />
      </div>

      {/* Subject */}
      <div className="mb-4">
        <Label className="form-label fw-semibold">📚 Subject</Label>
        <Select />
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

      {/* Bottom Buttons */}
      <div className="d-flex justify-content-between align-items-center">
        <Button color="light" className="rounded-pill border px-4">
          Reset
        </Button>
        <Button color="primary" className="rounded-pill px-4 fw-bold">
          Show 61319 Results
        </Button>
      </div>
    </div>
  );
};
