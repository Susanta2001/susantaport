import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`navigation-bar ${scrolled ? 'scrolled' : ''}`}>
        <nav className="container px-0 navbar navbar-expand-lg">
          <div className="container-fluid">
            <p className='navbar-brand text-light'><span className='text-color'>Front-End</span> Developer</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link secondary-text-color p-2 fs-5" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link secondary-text-color p-2 fs-5" to="/about">About Me</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link secondary-text-color p-2 fs-5" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link secondary-text-color p-2 fs-5" to="/portfolio">Portfolio</NavLink>
                </li>
              </ul>
              <div>
                <NavLink to="/contact"><button className='btn trans-btn box-shadow px-2'>Contact Me</button></NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
