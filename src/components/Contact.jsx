import React from 'react'

function Contact() {
  return (
    <>
      <div className="container-fluid contact-hero"></div>
      <div className="container-fluid contact-hero-next"></div>
      {/* this is the main div */}
      <div className="container main-contact-div d-flex flex-column position-absolute ">
        <div className="contact-div d-flex p-5">
          <div className="form-div box-shadow text-light bg-light text-dark w-75 d-flex flex-column">
            <div className="container p-4">
              <h4 className='text-color'>Send me a message !</h4>
              <div className="row contact-row my-3">
                <div className="col d-flex flex-column contact-col">
                  <label className='contact-label' htmlFor="name">Name</label>
                  <input type="text" className='contact-input' id='name' name='name' placeholder='Your name' required />
                </div>
                <div className="col d-flex flex-column contact-col">
                  <label className='contact-label' htmlFor="email">Email</label>
                  <input type="email" className='contact-input' id='email' name='email' placeholder='Your email' required />
                </div>
              </div>
              <div className="row contact-row my-3">
                <div className="col d-flex flex-column contact-col">
                  <label className='contact-label' htmlFor="phone">Phone Number</label>
                  <input type="tel" className='contact-input' id='phone' name='phone' placeholder='Phone #' required />
                </div>
                <div className="col d-flex flex-column contact-col">
                  <label className='contact-label' htmlFor="company">Company Name</label>
                  <input type="text" className='contact-input' id='company' name='text' placeholder='Company name' required />
                </div>
              </div>
              <div className="row contact-row my-3">
                <div className="col contact-col">
                  <label className='contact-label' htmlFor="message">Message</label> <br />
                  <textarea name="message" className='contact-input' id="message"  rows="4" cols="70"></textarea>
                </div>
              </div>
              <button type='button' className='btn rounded-0 fill-btn px-5 ms-2'>Send Message</button>
            </div>
          </div>
          <div className="contact-details-div  p-4">
            <h4>Contact Information</h4>
            <p className='py-3' style={{fontSize:'18px', fontWeight:'500'}}>Let's connect together to get on a call and discuss the services and the terms you need.</p>
            <p><i class='bx bx-current-location'></i> East Vivekananda Pally, Hemanta Mukherjee Sarani, Siliguri, West Bengal, India</p>
            <p><i class='bx bx-phone-call' ></i> +91 892 723 6850</p>
            <p><i class='bx bx-envelope' ></i> susantabiswas8116@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
