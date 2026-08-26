import React from "react";
import { motion as m } from "framer-motion";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen pt-10 sm:pt-0 bg-bgBlack text-fontGray"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center">
          <p className="text-4xl text-fontWhite font-bold inline border-b-4 border-accentYellow">
            Skills
          </p>
          <p className="py-6">
            These are the technologies I'm currently comfortable using.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 gap-y-14 text-center py-8 sm:grid-cols-3 uppercase">
          <m.div whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}>
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </m.div>
          <m.div whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}>
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p>CSS</p>
          </m.div>
          <m.div whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}>
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p>JavaScript</p>
          </m.div>
          <m.div whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}>
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p>React</p>
          </m.div>
          <m.div whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}>
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p>Tailwind CSS</p>
          </m.div>
          <m.div whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}>
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p>Github</p>
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
