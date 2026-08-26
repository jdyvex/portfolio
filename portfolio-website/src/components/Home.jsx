import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion as m } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-bgBlack">
      {/* container  */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-accentYellow text-sm font-semibold sm:text-lg">
          Hi, my name is
        </p>
        <h1 className="font-ffHead text-5xl font-bold text-fontWhite tracking-[1.5px] uppercase sm:text-7xl">
          Jordan Dyvex
        </h1>
        <h2 className="text-2xl font-bold text-fontGray sm:text-4xl">
          I am a{" "}
          <span className="text-btnYellow text-opacity-90">Front-End</span> Web
          Developer.
        </h2>
        <p className="text-fontLightGray text-sm py-4 max-w-[700px] sm:text-base">
          Hey there! My name is Jordan. I am a self-taught Front-End Developer,
          passionate about creating responsive & stylish pages for the web.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500} offset={-80}>
            <m.button
              className="text-fontWhite group border-2 px-6 py-3 my-2 flex items-center hover:bg-btnYellow hover:border-btnYellow hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
              <span className="group-hover:rotate-90 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </m.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
