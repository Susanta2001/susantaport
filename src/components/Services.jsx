import React from 'react'
import servicesImage from '../Images/Services/servicesHero.png'
import frontendImg from '../Images/Services/frontend.jpg'
import seoImg from '../Images/Services/seo.jpg'
import youtubeImg from '../Images/Services/youtube.jpg'
import apiImg from '../Images/Services/api.jpg'
import contentImg from '../Images/Services/content.jpg'
import reactjsImg from '../Images/Services/reactjs.jpg'
import mernImg from '../Images/Services/mern.png'
import wordpressImg from '../Images/Services/wordpress.webp'
function Services() {
  return (
    <>
      <div className="services-hero-banner">
        <img src={servicesImage} alt="" rel='preload' />
      </div>
      <div className="about-section d-flex justify-content-center align-item-center">
        <div className="about-inner container my-5">
          <h1 className='header-text text-color text-center'>My Services</h1>
          <div className="services my-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="services-card d-flex justify-content-center align-items-center">
                  <img src={frontendImg} alt="..." />
                  <p>Get your designs web ready by me, with highly curated HTML5, CSS3 & Javascript codes. I offer Front-End Development using different CSS and JS frameworks like Bootstrap and JavaScript. You can even opt for some changes.</p>
                  <p className="services-card-head-text">Front-End Development</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="services-card d-flex justify-content-center align-items-center">
                  <img src={reactjsImg} alt="..." />
                  <p>Every one is now ready to switch to React JS. This JS Framework provides better component handling. I'm one of the guy who can help you build your website with React JS effeciently and effectively. What you need is all here!</p>
                  <p className="services-card-head-text">React JS Development</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="services-card d-flex justify-content-center align-items-center">
                  <img src={mernImg} alt="..." />
                  <p>Besides developing your Front-End I can also help you build your website backend, where you can configure your web application's function effectively with Mongo DB. My offer is MERN stack with all latest techn involved.</p>
                  <p className="services-card-head-text">MERN Stack Development</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="services-card d-flex justify-content-center align-items-center">
                  <img src={apiImg} alt="..." />
                  <p>Not every thing can hardcoded for back-end. You will need some API to make some calls from third-party websites. I'll help you with that too. If required I can even help you build your own API using Express JS and Node JS.</p>
                  <p className="services-card-head-text">API Development</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="services-card d-flex justify-content-center align-items-center">
                  <img src={wordpressImg} alt="..." />
                  <p>If not React or MERN, perhaps you would like a WordPress website. I even develop WordPress website using less amount of plugins so it doesn't effects your site interactivity and loading time with the end-point users.</p>
                  <p className="services-card-head-text">WordPress Development</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="services-card d-flex justify-content-center align-items-center">
                  <img src={seoImg} alt="..." />
                  <p>After your web app is fully ready and funcitonal, you will surely want it to rank higher on Google. For which you need SEO. As a Tech SEO master and over 4 years of experience with managing and optimsing websites, I can help you with your online presence. </p>
                  <p className="services-card-head-text">SEO Optimization</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 ms-auto">
                <div className="services-card d-flex justify-content-center align-items-center">
                  <img src={contentImg} alt="..." />
                  <p>If you are doing SEO you will obviously need an experienced writer. Who can be better if your SEO manager is handling all the content writing part. Hire me to  write your content using keywords strategies. Service starts from 0.4 rupees per word.</p>
                  <p className="services-card-head-text">Content Writing</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 me-auto">
                <div className="services-card d-flex justify-content-center align-items-center">
                  <img src={youtubeImg} alt="..." />
                  <p>Now that your website is set, don't want more viewers to know you on other platforms? And what can be better than YouTube. Hire me to increase your online presence with well-managed videos and YouTube video optimzation.</p>
                  <p className="services-card-head-text">YouTube Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
