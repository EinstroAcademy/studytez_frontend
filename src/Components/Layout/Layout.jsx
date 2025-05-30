import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './layout.css'

function Layout(props) {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
      <main>
        <Navbar></Navbar>
        <div className="">
          <section className="main-section">{props.children}</section>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </main>
    </>
  );
}

export default Layout