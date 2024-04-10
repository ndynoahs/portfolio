import React from 'react'
import  "../assets/styles.css"

import ProductList from "../components/productList/ProductList"
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar'
import Home from "../components/Home"
import About from "../components/About"
const Homepage = () => {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <About />
      <section id='projects' className=''>
        {/* <h3>PORTFOLIO</h3>
        <h3>Each project is a unique piece of development 🧩</h3> */}

        <ProductList />
        {/* <ProductListx /> */}

        {/* <div className='project-card'>
          <div className='project-card-img'>
            img
          </div>
          <div className='project-card-text'> 
            <h3>Car Rental (February 2023) 🚗</h3>
            <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
            <div>
              <div> React</div>
              <div>CSS</div>
            </div>
            <div>
              <p>Code</p>
              <p>Live Demo</p>
            </div>
          </div>
        </div> */}
      </section>
      <section id='contact' className='contact'>
        <div className='contact_items'> 
          <span>CONTACT</span>
          <h3>Don't be shy! Hit me up!👇</h3>
          <div class="contact__icons">
            <div class="contact__icon-box">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div class="contact__info">
                <h3>Location</h3><p>Lagos, Nigeria</p>
              </div>
            </div>
            <div class="contact__icon-box">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
              </span>
              <div class="contact__info">
                <h3>Email</h3><a href="mailto:ibenoahs@gmail.com">ibenoahs@gmail.com</a>
              
              </div>
            </div>
          </div>
          </div>
      </section>

      <Footer />
    </div>
  )
}

export default Homepage
