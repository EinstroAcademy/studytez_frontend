import React, { useState } from 'react'
import './home.css'
import degree from '../../Images/home/students.png'
import {Helmet} from "react-helmet";
import request from '../../api/api';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  const [isSearch, setIsSearch] = useState(false);
  const [searchResult, setSearchResult] = useState({
    subjects: [],
    universities: [],
    courses: [],
  });

  const handleSearch = (e) => {
    const value = e.target.value.trim();
    if (value === '') {
      setIsSearch(false);
      setSearchResult({ subjects: [], universities: [], courses: [] });
      return;
    }

    setIsSearch(true);

    request({
      url: '/client/main/search/details',
      method: 'POST',
      data: { search: value }
    }).then((res) => {
      if (res.status === 1) {
        const updatedResult = {
          courses: res.response.courses ?? [],
          universities: res.response.universities ?? [],
          subjects: res.response.subjects ?? [],
        };
        setSearchResult(updatedResult);
      } else {
        alert(res.message);
      }
    });
  };

  const noResults =
    searchResult.courses.length === 0 &&
    searchResult.subjects.length === 0 &&
    searchResult.universities.length === 0;


  const handleResultChange = (e) => {
    navigate('/course/list',{state:{search:e}})
  }

  return (
    <div className="container-fluid">
      <Helmet>
        <title>Home | Studytez | Study in UK, USA, Canada, Australia & Europe</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div className="home-container">
        <div className="row align-items-center justify-content-between">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="home-left-content">
              <h1 className="home-main-content">
                Your guide to <span>studying abroad</span> all in one spot!
              </h1>

              <div className="my-4">
                <div className="input-wrapper">
                  <svg
                    className="search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>

                  <input
                    type="text"
                    className="home-search-input"
                    placeholder="Search..."
                    onChange={handleSearch}
                  />
                  {isSearch && (
                  <div className="search-result p-3 border rounded bg-white mt-2">
                    {noResults && <div>No results found.</div>}

                    {searchResult.courses.length > 0 && (
                      <>
                        <h6 className="my-2 search-head">Courses</h6>
                        {searchResult.courses.map((course, index) => (
                          <div className="my-2 search-title" key={`course-${index}`} onClick={()=>handleResultChange(course.title)}>
                            {course.title}
                          </div>
                        ))}
                      </>
                    )}

                    {searchResult.subjects.length > 0 && (
                      <>
                        <h6 className="my-2 search-head">Subjects</h6>
                        {searchResult.subjects.map((subject, index) => (
                          <div className="my-2 search-title" key={`subject-${index}`} onClick={()=>handleResultChange(subject.name)}>
                            {subject.name}
                          </div>
                        ))}
                      </>
                    )}

                    {searchResult.universities.length > 0 && (
                      <>
                        <h6 className="my-2 search-head">Universities</h6>
                        {searchResult.universities.map((university, index) => (
                          <div className="my-2 search-title" key={`university-${index}`} onClick={()=>handleResultChange(university.name)}>
                            {university.name}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                )}
                </div>

                
              </div>
            </div>
          </div>

          <div className="col-6 text-end">
            <div className="home-first-img">
              <img src={degree} alt="degree" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home