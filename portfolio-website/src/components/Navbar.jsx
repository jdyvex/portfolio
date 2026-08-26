import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const [isOpen, setOpen] = useState(false);
  const handleHam = () => {
    setNav(!nav);
    setOpen(!isOpen);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-bgBlack text-fontWhite z-20">
      <m.div whileHover={{ scale: 1.1 }}>
        <Link to="home" smooth={true} duration={500}>
          <img src={logo} alt="logo" className="w-[50px] cursor-pointer" />
        </Link>
      </m.div>

      {/* menu */}
      <m.ul className="hidden md:flex">
        <li className="group transition duration-200">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-accentYellow"></span>
        </li>
        <li className="group transition duration-200">
          <Link to="about" smooth={true} duration={500} offset={-50}>
            About
          </Link>
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-accentYellow"></span>
        </li>
        <li className="group transition duration-200">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-accentYellow"></span>
        </li>
        <li className="group transition duration-200">
          <Link to="work" smooth={true} duration={500} offset={-25}>
            Work
          </Link>
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-accentYellow"></span>
        </li>
        <li className="group transition duration-200">
          <Link to="contact" smooth={true} duration={500} offset={-50}>
            Contact
          </Link>
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-accentYellow"></span>
        </li>
      </m.ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
      </div>

      {/* mobile menu */}
      <m.ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-bgBlack flex flex-col justify-center items-center"
        }
        variants={variants}
      >
        <li className="py-6 text-4xl font-ffHead group transition duration-300">
          <Link onClick={handleHam} to="home" smooth={true} duration={500}>
            Home
          </Link>
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accentYellow"></span>
        </li>
        <li className="py-6 text-4xl font-ffHead group transition duration-300">
          <Link
            onClick={handleHam}
            to="about"
            smooth={true}
            duration={500}
            offset={0}
          >
            About
          </Link>
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accentYellow"></span>
        </li>
        <li className="py-6 text-4xl font-ffHead group transition duration-300">
          <Link
            onClick={handleHam}
            to="skills"
            smooth={true}
            duration={500}
            offset={-35}
          >
            Skills
          </Link>
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accentYellow"></span>
        </li>
        <li className="py-6 text-4xl font-ffHead group transition duration-300">
          <Link
            onClick={handleHam}
            to="work"
            smooth={true}
            duration={500}
            offset={0}
          >
            Work
          </Link>
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accentYellow"></span>
        </li>
        <li className="py-6 text-4xl font-ffHead group transition duration-300">
          <Link
            onClick={handleHam}
            to="contact"
            smooth={true}
            duration={500}
            offset={-65}
          >
            Contact
          </Link>
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accentYellow"></span>
        </li>
      </m.ul>

      {/* social icons */}
      <div className="invisible lg:visible lg:flex fixed flex-col top-[40%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-fontWhite"
              href="https://www.linkedin.com/in/jordan-dyvex/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-fontWhite"
              href="https://github.com/jdyvex"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <Link to="contact" smooth={true} duration={500}>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-accentYellow">
              <a className="flex justify-between items-center w-full text-btnBlack">
                Let's talk!
                <HiOutlineMail size={30} color="var(accentColor)" />
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
