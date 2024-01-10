import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
    // setToggleMenu( !toggleMenu)
    setToggleMenu(prev => !prev)

  }

  return (
    <div> 
      <nav className='nav'>
        <div className='nav-items'> 
        <h2>
          Kings.dev
        </h2>
        <svg  
          onClick={handleToggle} 
          xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mobile-menu"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path>
        </svg>
        {/* <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg></span> */}
        <ul className='nav-list'>
          <li>
            <a href='#home'>Home </a>
          </li>
          <li >
            <a href="#about">About </a>
          </li>
          <li>
            <a href="#projects">Projects </a>
          </li>
          <li>
            <a href="#contact">Contact </a>
          </li>
        </ul>
        </div>
      </nav>
      {toggleMenu &&
      <div className='mobile_nav'>
        <span>
          <svg onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
        </span>
        <div className='mobile_menu_items'>
          <ul className='mobile_nav_nav_lis'>
              <li>
                <a href='#home'>Home </a>
              </li>
              <li >
                <a href="#about">About </a>
              </li>
              <li>
                <a href="#projects">Projects </a>
              </li>
              <li>
                <a href="#contact">Contact </a>
              </li>
          </ul>
        </div>
      </div>
      }
      

    </div>
  )
}

export default Navbar
