import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../Images/home/nav-logo.png";
import logoWhite from "../../Images/logo/Einstro-footer-logo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  const [navRed, setNavRed] = useState("");
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
  return (
    <div className="container-fluid nav-bar-position">
      <div className="container">
        <nav className={`navbar ${""}`}>
          <div className="logo-container">
            <img src={logo} alt="Einstro Logo" className=" logo"  onClick={()=>navigate('/')}/>
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search your Dream University, Program, or Courses"
              className="search-input"
            />
          </div>

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
                <li class="text-primary" onClick={()=>navigate(`/course/list/master`)}>View all</li>
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
                <li class="text-primary" onClick={()=>navigate(`/course/list/bachelors`)}>View all</li>
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
                <li class="text-primary" onClick={()=>navigate(`/course/list/university`)}>View all</li>
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
