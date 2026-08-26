import React from "react";
import Gericht from "../assets/projects/Gericht.png";
import GPT from "../assets/projects/GPT3.png";
import Summize from "../assets/projects/Summize.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-auto sm:h-screen pt-20 sm:pt-0 text-fontGray"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 text-fontWhite border-accentYellow">
            Work
          </p>
          <p className="pt-6">Check out some of my recent projects!</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-16">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Gericht})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-2xl text-center font-bold text-white uppercase tracking-wider p-4">
                Gericht <br /> Landing Page
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://jdyvex.github.io/gericht-landing-page/"
                  target="_blank"
                >
                  <button className="work-btn">Demo</button>
                </a>
                <a
                  href="https://github.com/jdyvex/gericht-landing-page"
                  target="_blank"
                >
                  <button className="work-btn">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item 2 */}
          <div
            style={{ backgroundImage: `url(${GPT})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-2xl text-center font-bold text-white uppercase tracking-wider p-4">
                GPT-3 <br /> Landing Page
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://jdyvex.github.io/gpt3-landing-page/"
                  target="_blank"
                >
                  <button className="work-btn">Demo</button>
                </a>
                <a
                  href="https://github.com/jdyvex/gpt3-landing-page"
                  target="_blank"
                >
                  <button className="work-btn">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item 3 */}
          <div
            style={{ backgroundImage: `url(${Summize})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-2xl text-center font-bold text-white uppercase tracking-wider p-4">
                Article Summarizer
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://summize-ai-summarizer.netlify.app/"
                  target="_blank"
                >
                  <button className="work-btn">Demo</button>
                </a>
                <a
                  href="https://github.com/jdyvex/ai-summarizer"
                  target="_blank"
                >
                  <button className="work-btn">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-fontGray inline text-center pb-8">
          ... and hey, there's always room for more! Let's collaborate on new
          exciting projects together. Feel free to share your ideas and let's
          create something amazing!
        </p>
      </div>
    </div>
  );
};

export default Work;
