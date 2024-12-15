import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar5 from '../components/navbar5'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Puzzled Light Gazelle</title>
        <meta property="og:title" content="Puzzled Light Gazelle" />
      </Helmet>
      <Navbar5
        text={
          <Fragment>
            <span className="home-text10">Aryaman Agrawal</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text11">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text12">About Us</span>
          </Fragment>
        }
        link1Url="#home"
      ></Navbar5>
      <div id="home" className="home-container2">
        <div className="home-container3">
          <span className="home-text13">Aryaman Agrawal</span>
          <span className="home-text14">
            <span>Hey 👋 Welcome to my corner of the Internet!</span>
            <br></br>
            <span>
              I&apos;m extremely passionate about engineering and startups.
              I&apos;m currently at Georgia Tech, getting my BS &amp; MS in
              Computer Science. I love hacking on projects and building cool
              things 🚀
            </span>
            <br></br>
            <span>
              Previously, I worked on engineering/product at Coinbase, Mercury,
              Avenue, NCR&apos;s Innovation Lab, and Untapped 👷
            </span>
            <br></br>
            <span>
              I&apos;m passionate about Fintech, Crypto, B2B SaaS, Logistics,
              and AI/ML. Ages ago, I hosted a podcast - Capercast 🎙️
            </span>
            <br></br>
            <span>
              Outside of tech, I enjoy traveling, driving, and eating out.
              Recently, I&apos;ve been diving into scuba and going to concerts
              🤿🎶
            </span>
          </span>
        </div>
        <img
          alt="Aryaman Agrawal Mechanical Engineer"
          src="/whatsapp_image_2024-12-14_at_09.55.52_70754051-removebg-preview-1200w.png"
          loading="eager"
          className="home-image1"
        />
      </div>
      <div id="experience" className="home-container4">
        <div className="home-container5">
          <img alt="image" src="/tesla_logo-200h.png" className="home-image2" />
          <span>Text</span>
        </div>
        <div className="home-container6">
          <img
            alt="image"
            src="/inverted-logo-200h.webp"
            className="home-image3"
          />
          <span>Text</span>
        </div>
        <div className="home-container7">
          <img alt="image" src="/logo-l-200h.png" className="home-image4" />
          <span>Text</span>
        </div>
        <div className="home-container8">
          <img alt="image" src="/images-200h.png" className="home-image5" />
          <span>Text</span>
        </div>
        <div className="home-container9">
          <img alt="image" src="/tesla_logo-200h.png" className="home-image6" />
          <span>Text</span>
        </div>
      </div>
    </div>
  )
}

export default Home
