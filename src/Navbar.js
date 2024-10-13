"use client";
import { useEffect, useState } from "react";
// import logo from "../public/image/icons/icons8-cleaning-50.png"
import logo2 from "../public/image/icons/icons8-cleaning-50-2.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropDown, setShowDropDown] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(true);
    } else {
      // if scroll up show the navbar
      setShow(false);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  const handleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  return (
    <div
      className={`block ${
        show && "hidden"
      } flex justify-between items-center  bg-[#FAFDFF] h-[6rem] top-0 fixed z-30 shadow-xl px-[1rem] md:px-[4rem] w-[100%]`}
    >
      <Link href="/" alt="">
        <div className="flex items-center">
          {/* <Image src={logo} /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-600 absolute md:left-[3.5rem] top-[1.8rem] z-0"
            width="1.5em"
            height="1.2em"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M5.25 4a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m12 12a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M16 11.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M17.25 4a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M10 17.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M11.25 10a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M10 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M5.25 16a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M4 11.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"
            />
          </svg>
          {/* <Image
            src={logo2}
            width={30}
            height={30}
            alt="image"
            className="rounded-md z-10"
          /> */}
          <p className=" text-2xl text-blue-600 font-bold">Klinfast</p>
        </div>
      </Link>
      <button className="block md:hidden bg-blue-600 p-3 rounded-3xl text-sm text-white ">
        How it works
      </button>
      {/* <button id="dropdownDefaultButton" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  " type="button">Get Started
        </button> */}

      {/* <button id="dropdownDefaultButton" onClick={handleDropDown} class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  " type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
        </button>

        {showDropDown &&
        <div id="dropdown" class="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
            </ul>
        </div>
        } */}

      <div className="space-x-9 hidden md:block">
        <Link href="/customers" alt="">
          <button className=" p-1 md:p-3 rounded-3xl text-sm text-black ">
            Customers
          </button>
        </Link>
        <Link href="/workers" alt="">
          <button className=" p-1 md:p-3 rounded-3xl text-sm text-black ">
            Workers
          </button>
        </Link>
        <button className="  p-1 md:px-4 md:py-2 rounded-3xl text-sm text-blue-600 border-blue-600 border-[1px] ">
          How it works
        </button>
      </div>
    </div>
  );
};

export default Navbar;
