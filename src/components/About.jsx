import React from 'react'
import school from '../Images/About/school.jpg'
import lhsk from '../Images/About/lhsk.jpg'
import millanpally from '../Images/About/millanpally.jpg'
import sit from '../Images/About/sit.jpg'
import blueminch from '../Images/About/blueminch.jpg'
import icytales from '../Images/About/icytales.jpg'
function About() {
  return (
    <>
      <div className="container">
        <h1 className="header-text text-center text-color py-5">About Me</h1>
        <div className="row my-2">
          <div className="col-lg-6 col-md-6 col-sm-12 border p-2">
            <img className='w-100 h-100 object-fit-cover' rel='preload' src={millanpally} alt="Visuals of lincolns High School" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-auto p-2 text-light">
            <h3>2008</h3>
            <p>I started my school life at Lincolns High School in 2008 and since then I have been enrolled at this school in MillanPally, Siliguri for about 8 years until appearing for my 10th Board Examinations. During this period, though being a kid, I was able to grasp things very quickly and for which reason, I was one of the toppers during my childhood days. </p>
            <p>My childhood life at Lincolns High School is very special and achieved many things and lifelong friends. I was good at sports and was always awareded with an medal whenever participated. Besides this, I was also good at other extra curicullar activities, like debates, design competition and many other things.</p>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-lg-6 col-md-6 col-sm-12 my-auto p-2 text-light">
            <h3>2017</h3>
            <p>This was the time when life changed for me. The actualy teen life to adulthood started for me around this time. I switched from MillanPally, Siliguri, Lincolns High School to Karaibari Siliguri, Lincolns High School. And for this very reason I lost all my friends and was completely scouting my way through a new path.</p>
            <p>With a few family problems I had a tough time preparing for my BOARDS Examination. I was able to accumulate 78% aggregrate in my ICSE Examination. Scoring 94 out of 100 in Computer Science I was very much sure, that a life in tech and coding is the ultimate heaven for me.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 border p-2">
            <img className='w-100 h-100 object-fit-cover' rel='preload' src={school} alt="Visuals of lincolns High School" />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-lg-6 col-md-6 col-sm-12 border p-2">
            <img className='w-100 h-100 object-fit-cover' rel='preload' src={lhsk} alt="Visuals of lincolns High School" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-auto p-2 text-light">
            <h3>2019</h3>
            <p>Around this time I started learning coding extensively. I mastered Basic Java skills along with a few other advanced in Java. Since I was coding in Java since class 8 most of my class in 11th and 12th standard was just a basic revision for me.</p>
            <p>I was very well versed with the technology of Java and was able to gather 90 marks out of 100 in Computer Science alone. However, I was unable to accumulate marks in other subjects with included Physics, Chemistry, Biology, and English.</p>
            <p>With only 68% in my ISC 12th Board Examination I graudated from junior college in 2019 and never regretted any of my actions or results from my school life.</p>
            <p>Later in end of 2019 I joined Siiguri Institute of Technology pursuing Information Technology with Bachelors of Technology degree. However, my college days were never happier like my school days, like the old saying.</p>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-lg-6 col-md-6 col-sm-12 my-auto p-2 text-light">
            <h3>2021</h3>
            <p>My work career started in 2021 when it was peak lockdown and I had to do something for my family. I joined <a href="/" target='_blank'>Icy Tales</a> as a content writing intern. I wrote articles for Icy Health and USA Tales initially but later transitioned to other websites of the same company.</p>
            <p>I worked on different niche which mostly includes Canadian lifestyle as the website belongs to Canada.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 border p-2">
            <img className='w-100 h-100 object-fit-cover' rel='preload' src={icytales} alt="Visuals of lincolns High School" />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-lg-6 col-md-6 col-sm-12 border p-2">
            <img className='w-100 h-100 object-fit-cover' rel='preload' src={sit} alt="Visuals of lincolns High School" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-auto p-2 text-light">
            <h3>2023</h3>
            <p>In July 2023 I graudated from my college which is from Siliguri Institute of Technology as mentioned above, with an aggregrate of 8.7 CGPA without any backlogs. For our final year projects, I created an eCommerce project named Live-in-Green, where I mostly worked on the Fornt-End of the projects.</p>
            <p>We were working on a team, and our project mainly focused on the front-end dynamics of the project. As for technologies used in this project, we utilized XAMPP for web hosting, HTML, CSS & Javascript and Bootstrap.</p>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-lg-6 col-md-6 col-sm-12 my-auto p-2 text-light">
            <h3>2024</h3>
            <p>As mentioned above, I started my career as an SEO Manager at Icy Tales, I later realised that my passion lies in developing websites. Be it with React, MERN, JS vanilaa, or WordPress. I like when clients or the company likes the development.</p>
            <p>So i decided to switch my job, and join what I was studying for. I joined Blue Minch as a Junior Web Developer, and have been working for them, developing websites using WordPress.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 border p-2 mb-5">
            <img className='w-100 h-100 object-fit-cover' rel='preload' src={blueminch} alt="Visuals of lincolns High School" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
