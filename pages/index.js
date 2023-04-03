import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import Homecontent from "../components/homecontent";
import FirstSection from "../components/firstsection";
import SecondSection from "../components/secondsection";
import SectionFour from "../components/sectionfour";
import SectionFive from "../components/sectionfive";
import ThirdSection from "../components/thirdsection";
import SectionSix from "../components/sectionsix";

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Feedbox mobile app</title>
          <meta property="og:title" content="Feedbox mobile app" />
        </Head>
        <Navbar></Navbar>
        <main className="home-main">
          <div className="section-container">
            <div className="home-max-width max-content-container">
              <Homecontent />
              <div className="home-image-container">
                <img
                  alt="image"
                  src="/playground_assets/hero%20image-1200w.png"
                  className="home-image"
                />
              </div>
            </div>
          </div>
          <div className="home-section-one section-container">
            <FirstSection />
          </div>
          <div className="section-container">
            <SecondSection />
          </div>
          <div className="section-container">
            <ThirdSection />
          </div>
          <div className="home-section-four section-container">
            <SectionFour />
          </div>
          <div className="section-container">
            <SectionFive />
          </div>
          <div className="home-section-six section-container">
            <SectionSix />
          </div>
        </main>
        <Footer></Footer>
        <Copyright></Copyright>
      </div>
    </>
  );
};

export default Home;
