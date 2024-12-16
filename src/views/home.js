import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar5 from '../components/navbar5'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
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
            <span className="home-text12">
              <span>Experience</span>
              <br></br>
            </span>
          </Fragment>
        }
        link1Url="#home"
        link2Url="#experience"
      ></Navbar5>
      <div id="home" className="home-container11">
        <div className="home-container12">
          <span className="home-text15">Aryaman Agrawal</span>
          <span className="home-text16">
            <span>Hey 👋 Welcome to my corner of the Internet!</span>
            <br></br>
            <span>
              I’m a mechanical engineering student at Georgia Tech, passionate
              about innovation and problem-solving. With hands-on experience at
              Tesla, Rivian, and other cutting-edge organizations, I’ve worked
              on everything from designing battery components to creating
              advanced manufacturing processes. 🚗🔋
            </span>
            <br></br>
            <br></br>
            <span>
              I love tackling challenges that blend engineering with creativity,
              like prototyping dynamic systems or designing hybrid vehicle
              components. Outside of work, I enjoy mentoring as a Prototyping
              Instructor at the Invention Studio and leading impactful teams,
              from robotics competitions to space settlement design challenges.
            </span>
            <br></br>
            <br></br>
            <span>
              When I’m not engineering, you can find me exploring new tech,
              building things, or diving into exciting projects that push the
              boundaries of what’s possible. Let’s create something
              extraordinary together! 🚀
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
      <div id="experience" className="home-container13">
        <div className="home-container14">
          <div className="home-container15">
            <img
              alt="image"
              src="/inverted-logo-200h.png"
              className="home-image2"
            />
          </div>
          <span className="home-text26">
            <span>Designed and engineered an</span>
            <br></br>
            <span> enclosing case for</span>
            <br></br>
            <span>
              the battery management system
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>for increasing its durability.</span>
          </span>
        </div>
        <div className="home-container16">
          <img alt="image" src="/logo-l-200h.png" className="home-image3" />
          <span className="home-text34">
            <span>Researched and learnt about</span>
            <br></br>
            <span>the internal combustion engine,</span>
            <br></br>
            <span>calibration, on board diagnostics</span>
            <br></br>
            <span> and vehicle emissions for 120+ hours</span>
          </span>
        </div>
        <div className="home-container17">
          <img alt="image" src="/images-200h.png" className="home-image4" />
          <span className="home-text42">
            <span>Redesigned manufacturing processes,</span>
            <br></br>
            <span>developed prototypes, and commissioned</span>
            <br></br>
            <span>equipment to enhance assembly</span>
            <br></br>
            <span>line efficiency and ergonomics.</span>
          </span>
        </div>
        <div className="home-container18">
          <img alt="image" src="/tesla_logo-200h.png" className="home-image5" />
          <span className="home-text50">
            <span>Developed cost-saving</span>
            <br></br>
            <span>battery </span>
            <span>components, optimized</span>
            <br></br>
            <span>protective </span>
            <span>strategies, and</span>
            <br></br>
            <span>prototyped sealing </span>
            <span>solutions</span>
            <br></br>
            <span>with custom PCB designs</span>
            <br></br>
            <span>to enhance performance</span>
            <br></br>
            <span>and reliability.</span>
          </span>
        </div>
      </div>
      <div className="home-container19"></div>
    </div>
  )
}

export default Home
