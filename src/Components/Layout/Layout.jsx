import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Layout(props) {
  return (
    <>
    <main>
        <Navbar></Navbar>
        {props.children}
        <div>
            <Footer></Footer>
        </div>
    </main>
    </>
  )
}

export default Layout