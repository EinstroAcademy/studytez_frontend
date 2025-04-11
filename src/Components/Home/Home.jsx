import React from 'react'
import './home.css'
import degree from '../../Images/home/degree3.png'
import {Helmet} from "react-helmet";

function Home() {
  return (
   
    <div className="container-fluid">
       <Helmet>
       <title>Home</title>
       <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="home-container">
        <div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-6">
            <div className="home-left-content">
              <h1 className="home-main-content">
                Find your Unique Academic Path
              </h1>
              <div className="my-4">
                <button className="home-journey-btn">Start your Journey</button>
              </div>
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="home-first-img">
              <img src={degree} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home