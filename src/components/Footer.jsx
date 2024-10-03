import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid primary-color'>
        <div className="container footer-div d-flex p-4">
            {/* this is the first column */}
            <div className="d-flex flex-column justify-content-between me-5">
                <h3 className='text-light'><span className='text-color'>Front-End</span>Developer</h3>
                <p className='secondary-text-color'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel rerum ipsum nihil deleniti et eligendi quidem culpa aut voluptatum soluta?</p>
                <div className="footer-email-div d-flex align-items-center">
                <input className='p-2' type="email" name="email" id="email" placeholder='Enter your email address'/>
                <button className='outline-none px-4 border-0 fill-btn' type='button' style={{padding: '10px'}}>Enquire</button>
                </div>

            </div>
            {/* this is the second column */}
                <div className=" d-flex menu-column mx-5 secondary-text-color">
                    <div className="d-flex footer-link-div flex-column mx-5 ">
                        <NavLink className='footer-links' to='/'>Home</NavLink>
                        <NavLink className='footer-links' to='/experience'>Experience</NavLink>
                        <NavLink className='footer-links' to='/education'>Education</NavLink>
                    </div>
                    <div className="d-flex footer-link-div flex-column mx-5">
                        <NavLink className='footer-links' to='/services'>Services</NavLink>
                        <NavLink className='footer-links' to='/about'>About Me</NavLink>
                        <NavLink className='footer-links' to='/contact'>Contact Me</NavLink>
                    </div>
                </div>
            {/* this is the third column */}
            <div className="d-flex flex-column secondary-text-color">
                <h4 className='text-color'>SUSANTA BISWAS</h4>
                <p>East Vivekananda Pally, Hemanta Mukherjee Sarani, Siliguri, West Bengal, India</p>
                <p>susantabiswas8116@gmail.com</p>
                <p>+91 8927236850</p>
                <div className="social-links-div border-top pt-2">
                <a href="https://github.com/Susanta2001/"><i className="bx bxl-github me-4 p-1 rounded-circle"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100094540388346"><i className="bx bxl-facebook me-4 p-1 rounded-circle "></i></a>
                <a href="https://www.linkedin.com/in/susanta-biswas/"><i className="bx bxl-linkedin me-4 p-1 rounded-circle "></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
