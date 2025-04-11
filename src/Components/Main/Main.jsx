import React from "react";
import Home from "../Home/Home";
import Journey from "../Journey/Journey";
import About from "../About/About";
import Explore from "../Explore/Explore";
import Services from "../Services/Services";
import KnowUs from "../KnowUs/KnowUs";
import Layout from "../Layout/Layout";
import Touch from "../Touch/Touch";
import Media from "../Media/Media";

function Main() {
  return (
    <>
      <Layout>
        <Home />
        <Journey />
        <About />
        <Explore />
        <Services />
        <Media/>
        <KnowUs />
        <Touch/>
      </Layout>
    </>
  );
}

export default Main;
