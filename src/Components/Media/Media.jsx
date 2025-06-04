import React, { useEffect, useState } from 'react'
import './media.css'
import img1 from '../../Images/home/img133.jpg'
import img2 from '../../Images/home/img12.jpg'
import img3 from '../../Images/home/img14.webp'
import img4 from '../../Images/home/img15.jpg'
import request, { NodeURL } from '../../api/api'
import { useNavigate } from 'react-router-dom'

function Media() {
  const navigate = useNavigate()

  const [blogList,setBlogList] = useState([])

  const getBlogList = ()=>{
    request({
      url:'/client/blog/list',
      method:'POST',
      data:{
        skip:0,
        limit:2
      }
    }).then((res)=>{
      if(res.status===1){
        setBlogList(res.response.result)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getBlogList()
  },[])

  return (
    <div class="container">
      <h3 class="text-center media">Media</h3>
      <div class="row">
        <div className="col-6 mt-5">
          <div className='row'>
            <div className='col-12 mt-5'>
              <div className="d-flex">
                <div class="px-2">
                  <img src={img1} class="media-img" />
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
            <div className='col-12 mt-5'>
              <div className="d-flex">
                <div class="px-2">
                  <img src={img2} class="media-img" />
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
          </div>
        </div>
        <div className="col-6 mt-5">
          <div className='row'>
            {
              blogList.length > 0 ? blogList.map((blog) => {
                return <div className='col-12 mt-5' onClick={()=> navigate(`/blog/${blog?.routeId}`,{state:{rowId:blog?._id}})}>
                  <div className="d-flex">
                    <div class="px-2">
                      <img src={`${NodeURL}/${blog.image}`} class="media-img" />
                    </div>
                    <div class="px-2">
                      <p class="tag">Blog</p>
                      <h5 class="card-title">{blog.title}</h5>
                      <a href="#" class="learn-more-style">
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              }) : <>
                <div className='col-12 mt-5'>
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
                <div className='col-12 mt-5'>
                  <div className="d-flex">
                    <div class="px-2">
                      <img src={img3} class="media-img" />
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
              </>
            }

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
            <button class="view-btn" onClick={()=>navigate('/blog')}>View all Blogs</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media