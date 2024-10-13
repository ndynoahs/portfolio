import React from "react";
import "../assets/styles.css";

import ProductList from "../components/productList/ProductList";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Experince from "../components/Experience";
const Homepage = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Experince />

      <section id="projects" className="">
        <ProductList />
        {/* <ProductListx /> */}
      </section>
      <section id="contact" className="contact">
        <div className="contact_items">
          <span>CONTACT</span>
          <h3>Don't be shy! Hit me up!👇</h3>
          <div class="contact__icons">
            <div class="contact__icon-box">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-map-search"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div class="contact__info">
                <h3>Location</h3>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
            <div class="contact__icon-box">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <div class="contact__info">
                <h3>Email</h3>
                <a href="mailto:ibenoahs@gmail.com">ibenoahs@gmail.com</a>
              </div>
            </div>
            {/* <div class="contact__icon-box">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28.314 28.323"
                  class="enable-background:new 0 0 28.314 28.323"
                  // xml:space="preserve"
                >
                  <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" />
                </svg>
              </span>
              <div class="contact__info">
                <h3>phone</h3>
                <a href="mailto:ibenoahs@gmail.com">07036294685</a>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
