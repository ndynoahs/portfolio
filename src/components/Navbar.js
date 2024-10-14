import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <div className="nav">
      <div className="nav-items">
        <h3 className="nav_title">Kings.dev</h3>
        <div className="menu_icon">
          {toggleMenu ? (
            <div className="toggleClose">
              <svg
                onClick={handleToggle}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-x"
              >
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </div>
          ) : (
            <svg
              onClick={handleToggle}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="toggleButton"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          )}
        </div>
        <ul className="nav-list">
          <li>
            <a href="#home">Home </a>
          </li>
          <li>
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
      <div className={`side_menu ${toggleMenu ? "active" : ""}`}>
        <h3 className="side_title">
          <span className="">KINGS</span> DEV
        </h3>

        <ul className="mobile_nav_list">
          <li onClick={handleToggle}>
            <a href="#home">Home </a>
          </li>
          <li onClick={handleToggle}>
            <a href="#about">About </a>
          </li>
          <li onClick={handleToggle}>
            <a href="#projects">Projects </a>
          </li>
          <li onClick={handleToggle}>
            <a href="#contact">Contact </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
