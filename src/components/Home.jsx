import React from "react";
import { Link } from "react-router-dom";
import hero from "../Images/hero.png";
import alufab from '../Images/Portfolio/alufab.webp'
import textUtils from '../Images/Portfolio/text.webp'
import manoj from '../Images/Portfolio/manoj.webp'
import htmlIcon from '../Images/Icons/html.png'
import cssIcon from '../Images/Icons/css.png'
import jsIcon from '../Images/Icons/javascript.png'
import mongoIcon from '../Images/Icons/mongodb.png'
import expressIcon from '../Images/Icons/express.png'
import reactIcon from '../Images/Icons/react.png'
import nodeIcon from '../Images/Icons/node-js.png'
import wordpressIcon from '../Images/Icons/wordpress.png'
import xamppIcon from '../Images/Icons/96018_xampp_icon.png'
import bootstrapIcon from '../Images/Icons/bootstrap.png'
import figmaIcon from '../Images/Icons/figma.png'
import githubIcon from '../Images/Icons/github.png'
import jquerryIcon from '../Images/Icons/jquery.png'
import resume from '../Assets/resume.pdf'
function Home() {
  return (
    <>
      {/* hero-section */}
      <div
        className="container pb-5 border-bottom my-1 d-flex justify-content-between align-items-center"
        id="hero-section"
      >
        <div
          id="text-box"
          className="w-50 text-light d-flex flex-column justify-content-start"
        >
          <h1>Hii, There</h1>
          <h1>
            I'm <span className="text-color">Susanta Biswas</span>
          </h1>
          <p className="pe-5 secondary-text-color">
            I am a UI developer with a strong foundation in front-end web technologies. My journey began with a fascination for how design and code come together to shape the digital world.
          </p>
          <div className="social-icons-div d-flex justify-content-start">
            <a href="https://www.linkedin.com/in/susanta-biswas/">
              <i className="bx bxl-linkedin me-4 p-2 rounded-circle box-shadow"></i>
            </a>
            <a href="https://github.com/Susanta2001/">
              <i className="bx bxl-github me-4 p-2 rounded-circle box-shadow"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094540388346">
              <i className="bx bxl-facebook me-4 p-2 rounded-circle box-shadow"></i>
            </a>
            <a href="https://www.instagram.com/_._.kacchan._.__/">
              <i className="bx bxl-instagram me-4 p-2 rounded-circle box-shadow"></i>
            </a>
          </div>
          <div className="hero-button-div d-flex justify-content-start mt-4 me-3">
            <button className="btn fill-btn px-4 me-3 box-shadow">
              Hire Me
            </button>
            <a href={resume} download="resume.pdf"><button className="btn trans-btn px-4 box-shadow">
              Download CV
            </button></a>

          </div>
        </div>
        <div
          id="img-box"
          className="w-50 overflow-hidden d-flex justify-content-center align-items-center"
        >
          <img src={hero} alt="hero" className="w-100 h-100 object-fit-cover" />
        </div>
      </div>
      {/* services-section */}
      <div className="container d-flex flex-column justify-content-center -align-items-center my-2 py-5" id="services-container">
        <h1 className=" header-text text-center text-color my-3">My Services</h1>
        <div className="row">
          {/* front end Development */}
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="card m-3 p-4 rounded-4 border-color text-light">
              <i className="border-0 bx bx-code-alt box-shadow rounded-circle p-2"></i>
              <h4>Front End Web Development</h4>
              <p className="secondary-text-color">
                I craft visually appealing, responsive, and user-friendly websites, ensuring seamless functionality across all devices and platforms.
              </p>
              <div
                className="btn text-light text-start p-0"
                id="services-read-link-div"
              >
                <Link
                  to="/services"
                  className="services-link text-light text-decoration-none border-bottom pb-2"
                >
                  Read More <span className="html-entity text-color">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
          {/* seo services */}
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="card m-3 p-4 rounded-4 border-color text-light">
              <i className="border-0 bx bx-search-alt box-shadow rounded-circle p-2"></i>
              <h4>SEO Audit and Optimization</h4>
              <p className="secondary-text-color">
                I provide comprehensive SEO audits and optimize websites to improve search engine rankings, increase organic traffic, and boost visibility.
              </p>
              <div
                className="btn text-light text-start p-0"
                id="services-read-link-div"
              >
                <a
                  href="/services"
                  className=" services-link text-light text-decoration-none border-bottom pb-2"
                >
                  Read More <span className="html-entity text-color">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
          {/* youtube seo services */}
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="card m-3 p-4 rounded-4 border-color text-light">
              <i className="border-0 bx bxl-youtube box-shadow rounded-circle p-2"></i>
              <h4>YouTube SEO and Optimization</h4>
              <p className="secondary-text-color">
                I optimize YouTube channels for better search ranking, enhance video visibility, and guide monetization strategies to maximize revenue.
              </p>
              <div
                className="btn text-light text-start p-0"
                id="services-read-link-div"
              >
                <a
                  href="/services"
                  className="services-link text-light text-decoration-none border-bottom pb-2"
                >
                  Read More <span className="html-entity text-color">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a className=" text-center my-3 text-decoration-none" href="/services">
          <button className="btn trans-btn px-4 box-shadow" id="services-btn">
            Show More
          </button>
        </a>
      </div>
      {/* career-section */}
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-5" id="career-container">

        <h1 className="header-text text-center text-color my-3">My Career</h1>
        <div className="container d-flex text-light">
          <div className="container d-flex flex-column text-end">
            {/* left side first node */}
            <div className="left-first left-career-box">
              <h3 className="text-color">2008</h3>
              <p>I started my school life at Lincolns High School <br></br> directly promoted to class 2 from nursery.</p>
            </div>
            <div className="left-third left-career-box">
              <h3 className="text-color">2019</h3>
              <p>I completed my ISC Board from Lincolns High School<br></br> with an aggregrate of 68% with PCMB & Computer</p>
            </div>
          </div>
          <div className="container" style={{ borderLeft: '1px solid white' }}>
            <div className="right-second right-career-box">
              <h3 className="text-color">2017</h3>
              <p>I completed my 10th Examination with an <br></br>aggregrate of 78% ICSE Board</p>
            </div>
            <div className="right-third right-career-box">
              <h3 className="text-color">2023</h3>
              <p>I completed my graduation with B.Tech <br></br>Information Technology from Siliguri Insititure of <br></br>Technology with an aggregrate of 8.07 CGPA</p>
            </div>
          </div>
        </div>
        <Link className=" text-center my-3 text-decoration-none" to="/about">
          <button className="btn trans-btn px-4 box-shadow" id="services-btn">
            Show More
          </button>
        </Link>
      </div>
      {/* portfolio section */}
      <div id="carouselExampleCaptions" className="carousel slide container py-5">
        <h1 className="header-text text-center text-color mb-5">Portfolio</h1>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner pb-3">
          <div className="carousel-item active">
            <img src={alufab} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block bg-dark">
              <h5 className="text-color">Alufab India</h5>
              <p className="secondary-text-color">Technologies used <span>WordPress</span></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={textUtils} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block bg-dark">
              <h5 className="text-color">Text Utils</h5>
              <p className="secondary-text-color">Technologies used <span>React JS & Node JS</span></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={manoj} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block bg-dark">
              <h5 className="text-color">Manoj Jhawar</h5>
              <p className="secondary-text-color">Technologies used <span>PHP & HTML, CSS, JS</span></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon position-absolute border-4" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* My skills section */}
      <h1 className="header-text text-center text-color my-5">My Skills</h1>
      <div className="container image-slidder">
        <div className="slidder-inner py-5 d-flex">
          <div className="slidder-item">
            <img src={htmlIcon} alt="" />
          </div>
          <div className="slidder-item">
            <img src={cssIcon} alt="" />
          </div>
          <div className="slidder-item">
            <img src={jsIcon} alt="" />
          </div>
          <div className="slidder-item">
            <img src={mongoIcon} alt="" />
          </div>
          <div className="slidder-item">
            <img src={expressIcon} alt="" />
          </div>
          <div className="slidder-item">
            <img src={reactIcon} alt="" />
          </div>
          <div className="slidder-item">
            <img src={nodeIcon} alt="" />
          </div>
          <div className="slidder-item">
            <img src={wordpressIcon} alt="" />
          </div>
          <div className="slidder-item">
            <img src={xamppIcon} alt="" />
          </div>
          <div className="slidder-item">
            <img src={bootstrapIcon} alt="" />
          </div>
          <div className="slidder-item">
            <img src={jquerryIcon} alt="" />
          </div>
          <div className="slidder-item">
            <img src={githubIcon} alt="" />
          </div>
          <div className="slidder-item">
            <img src={figmaIcon} alt="" />
          </div>

        </div>
      </div>
      {/* contact me section */}
      <div className="container-fluid py-5" id="contact-section">
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <h1 className="header-text text-center text-color my-3">Contact Me</h1>

          <form className="text-light w-50 border rounded-3 p-3">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">Full Name</label>
              <input type="text" name="name" className="form-control" id="exampleInputName" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
              <input type="password" name="number" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 d-flex">
              <button type="submit" className="btn fill-btn mx-auto">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
