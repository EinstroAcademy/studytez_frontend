import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../Images/home/nav-logo.png";
import logoWhite from "../../Images/logo/Einstro-footer-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import request from "../../api/api";

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSearch, setIsSearch] = useState(false);
    const [searchResult, setSearchResult] = useState({
      subjects: [],
      universities: [],
      courses: [],
    });
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);

      if (scrollPosition < 720) {
        setNavRed("");
      } else if (scrollPosition >= 720 && scrollPosition < 2300) {
        setNavRed("nav-red");
      } else {
        setNavRed("nav-red");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


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
    <div className="container-fluid nav-bar-position">
      <div className="container">
        <nav className={`navbar ${""}`}>
          <div className="logo-container">
            <img src={logo} alt="Einstro Logo" className=" logo"  onClick={()=>navigate('/')}/>
          </div>
          {
            location.pathname==='/course/list' && <div className="search-container">
            <input
              type="text"
              placeholder="Search your Dream University, Program, or Courses"
              className="search-input"
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
          }
          

          <div className="nav-links">
            
            <div class="subnav">
            <button className="subnavbtn explore">Explore ▾</button>
              <div class="subnav-content">
                <div class="sub-menu">
            <div class="row bg-light p-4 rounded shadow  sub-menu-item" >
            <div class="col-md-4">
              <h5 class="fw-bold">For Masters</h5>
              <ul class="list-unstyled">
                <li>Masters (MS) in Electrical Engineering Abroad</li>
                <li>Masters in Economics Abroad</li>
                <li>Masters in Business Administration</li>
                <li>Masters in Telecommunication</li>
                <li>Masters in Journalism Abroad</li>
                <li>Masters (MS) in Accounting Abroad</li>
                <li class="text-primary" >View all</li>
              </ul>
            </div>

            <div class="col-md-4">
              <h5 class="fw-bold">For Bachelors</h5>
              <ul class="list-unstyled">
                <li>Bachelors in Mathematics Abroad</li>
                <li>Bachelors in Data Science Abroad</li>
                <li>Bachelors in Political Science Abroad</li>
                <li>Bachelors in Graphic Design Abroad</li>
                <li>Bachelors in Engineering Physics Abroad</li>
                <li>Bachelors in Finance Abroad</li>
                <li>Bachelors in Chemical Engineering Abroad</li>
                <li class="text-primary" >View all</li>
              </ul>
            </div>

            <div class="col-md-4">
              <h5 class="fw-bold">Universities</h5>
              <ul class="list-unstyled">
                <li>Universities in UK</li>
                <li>Universities in USA</li>
                <li>Universities in Canada</li>
                <li>Universities in Australia</li>
                <li>Universities in New Zealand</li>
                <li>Universities in Germany</li>
                <li class="text-primary">View all</li>
              </ul>
            </div>
          </div>
            </div>
              </div>
            </div>
            <span className="separator">|</span>
            <Link to={"/login"}>
              <button className="nav-button">Log in</button>
            </Link>

            <Link to={"/signup"}>
              <button>
                <div class="default-btn">
                  <span>Sign Up</span>
                </div>
                <div class="hover-btn">
                  <span>Sign Up</span>
                </div>
              </button>
            </Link>
            
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
