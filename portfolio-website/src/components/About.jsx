import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/developerAnimation.json";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-fontWhite">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-4xl text-center pt-12 text-font font-bold inline border-b-4 border-accentYellow">
          About
        </p>
        <div className="max-w-[1000px] w-full grid px-6 py-4 sm:py-8 sm:grid-cols-2">
          <div className="invisible max-w-0 sm:visible sm:max-w-full sm:ml-[-40px]">
            <Lottie animationData={animationData} />
          </div>
          <div className="tracking-wide">
            <p className="text-2xl sm:text-4xl md:mt-[35px] lg:mt-[75px] text-center font-bold py-6">
              Builder of web stuff.
            </p>
            <p className="bg-bgBlack p-4 rounded-xl bg-opacity-85 border border-btnGray">
              Hey there, my name's Jordan! I specialize in bringing{" "}
              <i>responsive, </i>
              <span className="text-accentYellow">easy to navigate</span> web
              pages to life and I'm always looking for ways to optimize my work.
              I'm perpetually curious and love the creative process behind each
              design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
