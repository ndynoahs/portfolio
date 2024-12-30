import React from "react";
import image6 from "../../assets/images/workspace.webp";
import spiningImage from "../../assets/images/spining-image.svg";
import workingEmoji from "../../assets/images/working-emoji.png";

const index = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about_img_box">
          <img className="about_img" src={image6} alt="about " />
          <img className="about_spinner ring" src={spiningImage} alt="icon" />
          <img className="about_emoji" src={workingEmoji} alt="icon" />
        </div>
        <div className="about_text">
          <p className="title">ABOUT ME</p>
          <p className="sub-title">
            {" "}
            Front-end Developer
            <br />
            based in Lagos, Nigeria 📍
          </p>
          <p className="sub-text">
            Hey, my name is Kingsley, and I'm a Frontend Developer. My passion
            is to create and develop a clean UI/UX for my users.
          </p>
          <p className="sub-text">
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and TypeScript. And I also work with Nodejs express and
            mongodb.
          </p>
          {/* <p className="sub-text">
            As a Mid-Sinior Front-End Developer, I possess an impressive arsenal
            of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS.{" "}
            <br />
            I excel in designing and maintaining responsive websites <br /> that
            offer a smooth user experience. My expertise lies in crafting
            dynamic, engaging interfaces through writing clean and optimized
            code and utilizing cutting-edge development tools and techniques. I
            am also a team player who thrives in collaborating with
            cross-functional teams to produce outstanding web applications.
          </p> */}
          {/* 
              <div div class="about__buttons">
                      <a download="" href={cv} class="btn">
                          Download CV <i class="fa fa-download"></i>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"  class="w-2 h-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>

                      </a>
              </div> */}
        </div>
      </div>
    </section>
  );
};

export default index;
