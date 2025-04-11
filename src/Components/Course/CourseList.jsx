import React from "react";
import "./course.css";
import Layout from "../Layout/Layout";
import { Helmet } from "react-helmet";

function CourseList() {
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
                <h1>List of Masters</h1>
                <p>Found 2062 colleges</p>
                <p>Fine tune suggestions</p>
                <button class="filter-btn mt-3">Filter</button>
              </div>
            </div>

            <div class="col-3">
              <div class="reset">Reset all filters</div>
            </div>
          </div>
        </div>

        <hr />

        <div class="card my-4">
          <div class="row ">
            <div class="col-6">
              <h5 class="card-title ">
                BS in Computer Science and Engineering
              </h5>
              <div class="card-subtitle">
                Massachusetts Institute of Technology
              </div>
              <div class="apply-link">
                <a href="#"> Apply Now</a>
              </div>
            </div>

            <div class="col-3 ">
              <div class="info-title">3 Years</div>
              <div class="info-sub">Durations</div>
            </div>

            <div class="col-3">
              <div class="info-title">INR 6 lakhs</div>
              <div class="info-sub">Average Fees</div>
              <a href="#" class="compare-link d-block mt-2">
                {" "}
                Add to compare
              </a>
            </div>
          </div>
        </div>

        <div class="card my-4">
          <div class="row ">
            <div class="col-6">
              <h5 class="card-title ">MS in Computer Science</h5>
              <div class="card-subtitle">Columbia University</div>
              <div class="apply-link">
                <a href="#"> Apply Now</a>
              </div>
            </div>

            <div class="col-3 ">
              <div class="info-title">3 Years</div>
              <div class="info-sub">Durations</div>
            </div>

            <div class="col-3">
              <div class="info-title">INR 6 lakhs</div>
              <div class="info-sub">Average Fees</div>
              <a href="#" class="compare-link d-block mt-2">
                {" "}
                Add to compare
              </a>
            </div>
          </div>
        </div>

        <div class="card my-4">
          <div class="row ">
            <div class="col-6">
              <h5 class="card-title ">MS in Computer Science</h5>
              <div class="card-subtitle">Stanford University</div>
              <div class="apply-link">
                <a href="#"> Apply Now</a>
              </div>
            </div>

            <div class="col-3 ">
              <div class="info-title">3 Years</div>
              <div class="info-sub">Durations</div>
            </div>

            <div class="col-3">
              <div class="info-title">INR 6 lakhs</div>
              <div class="info-sub">Average Fees</div>
              <a href="#" class="compare-link d-block mt-2">
                {" "}
                Add to compare
              </a>
            </div>
          </div>
        </div>

        <div class="card my-4">
          <div class="row ">
            <div class="col-6">
              <h5 class="card-title ">MS in Computer Science</h5>
              <div class="card-subtitle">
                University of California, Berkeley
              </div>
              <div class="apply-link">
                <a href="#"> Apply Now</a>
              </div>
            </div>

            <div class="col-3 ">
              <div class="info-title">3 Years</div>
              <div class="info-sub">Durations</div>
            </div>

            <div class="col-3">
              <div class="info-title">INR 6 lakhs</div>
              <div class="info-sub">Average Fees</div>
              <a href="#" class="compare-link d-block mt-2">
                {" "}
                Add to compare
              </a>
            </div>
          </div>
        </div>

        <div class="card my-4">
          <div class="row ">
            <div class="col-6">
              <h5 class="card-title ">MS in Computer Science</h5>
              <div class="card-subtitle">
                University of California, Berkeley
              </div>
              <div class="apply-link">
                <a href="#"> Apply Now</a>
              </div>
            </div>

            <div class="col-3 ">
              <div class="info-title">3 Years</div>
              <div class="info-sub">Durations</div>
            </div>

            <div class="col-3">
              <div class="info-title">INR 6 lakhs</div>
              <div class="info-sub">Average Fees</div>
              <a href="#" class="compare-link d-block mt-2">
                {" "}
                Add to compare
              </a>
            </div>
          </div>
        </div>

        <div class="card my-4">
          <div class="row ">
            <div class="col-6">
              <h5 class="card-title ">MS in Computer Science</h5>
              <div class="card-subtitle">
                University of California, BerkeleyMassachusetts Institute of
                Technology
              </div>
              <div class="apply-link">
                <a href="#"> Apply Now</a>
              </div>
            </div>

            <div class="col-3 ">
              <div class="info-title">3 Years</div>
              <div class="info-sub">Durations</div>
            </div>

            <div class="col-3">
              <div class="info-title">INR 6 lakhs</div>
              <div class="info-sub">Average Fees</div>
              <a href="#" class="compare-link d-block mt-2">
                {" "}
                Add to compare
              </a>
            </div>
          </div>
        </div>

        <div class="card my-4">
          <div class="row ">
            <div class="col-6">
              <h5 class="card-title ">MS in Computer Science</h5>
              <div class="card-subtitle">
                University of California, Berkeley
              </div>
              <div class="apply-link">
                <a href="#"> Apply Now</a>
              </div>
            </div>

            <div class="col-3 ">
              <div class="info-title">3 Years</div>
              <div class="info-sub">Durations</div>
            </div>

            <div class="col-3">
              <div class="info-title">INR 6 lakhs</div>
              <div class="info-sub">Average Fees</div>
              <a href="#" class="compare-link d-block mt-2">
                {" "}
                Add to compare
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CourseList;
