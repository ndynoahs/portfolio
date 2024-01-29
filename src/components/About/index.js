import React from 'react'
import image6 from "../../assets/images/workspace.webp"
import spiningImage from "../../assets/images/spining-image.svg"
import workingEmoji from "../../assets/images/working-emoji.png"

const index = () => {
  return (
    <section id="about" className='about'>
        <div className='container'>
        <div className='about_img_box'>
            <img className="about_img" src={image6} alt='about '  />
            <img className='about_spinner ring' src={spiningImage} alt='icon'/> 
            <img className='about_emoji' src={workingEmoji} alt='icon' />
        </div>
        <div className='about_text'>
            <p className='title'>ABOUT ME</p>
            <p className='sub-title'> Front-end Developer 
            <br/>based in Lagos, Nigeria 📍
            </p>
            <p className='sub-text'>
            Hey, my name is Kingsley, and I'm a Frontend Developer.
            My passion is to create and develop a clean UI/UX for my users. 
            </p>
            <p className='sub-text'>My main stack currently is React/Next.js in combination with   
            Tailwind CSS and TypeScript.</p>
            <p className='sub-text'>And I also work with Nodejs express and mongodb.</p>
            {/* <p className='sub-text'>As a Mid-Sinior Front-End Developer, 
            I possess an impressive arsenal of  <br/> skills in HTML, CSS,  JavaScript, React, Tailwind, and SCSS. <br/>
            I excel in designing and maintaining responsive websites  <br/> that offer a smooth user experience.
            My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing 
            cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams 
            to produce outstanding web applications.
            </p> */}
        </div>
        </div>
    </section>
  )
}

export default index
