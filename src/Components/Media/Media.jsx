import React from 'react'
import './media.css'
import img1 from '../../Images/home/img133.jpg'
import img2 from '../../Images/home/img12.jpg'
import img3 from '../../Images/home/img14.webp'
import img4 from '../../Images/home/img15.jpg'

function Media() {
  return (
    <div class="container">
      <h3 class="text-center media">Media</h3>
      <div class="row">
        <div className="col-6 mt-5">
          <div className="d-flex">
            <div class="px-2">
              <img src={img1}  class="media-img" />
            </div>
            <div class="px-2">
              <p class="tag">News</p>
              <h5 class="card-title">Videysea bags $1 Mn in seed round</h5>
              <a href="#" class="learn-more-style">
                Learn More →
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 mt-5">
          <div className="d-flex">
            <div class="px-2">
              <img src={img2} class="media-img" />
            </div>
            <div class="px-2">
              <p class="tag">Blog</p>
              <h5 class="card-title">Videysea bags $1 Mn in seed round</h5>
              <a href="#" class="learn-more-style">
                Learn More →
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 mt-5">
          <div className="d-flex">
            <div class="px-2">
              <img src={img3} class="media-img"/>
            </div>
            <div class="px-2">
              <p class="tag">News</p>
              <h5 class="card-title">Videysea bags $1 Mn in seed round</h5>
              <a href="#" class="learn-more-style">
                Learn More →
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 mt-5">
          <div className="d-flex">
            <div class="px-2">
              <img src={img4} class="media-img" />
            </div>
            <div class="px-2">
              <p class="tag">Blog</p>
              <h5 class="card-title">Videysea bags $1 Mn in seed round</h5>
              <a href="#" class="learn-more-style">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-6">
          <div>
            <button class="view-btn">View all News</button>
          </div>
        </div>
        <div class="col-6">
          <div>
            <button class="view-btn">View all Blogs</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media