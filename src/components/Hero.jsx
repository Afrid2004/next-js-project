import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="cotainer">
        <div className="flex justify-center items-center h-[650px] bg-[linear-gradient(to_top_left,rgba(0,0,0,0.4)80%,transparent),url('/images/bg_image.png')] bg-no-repeat bg-cover bg-center">
          <div className="max-w-175 flex flex-col gap-5 items-center justify-center text-center">
            <div className="px-4 py-1 bg-gray-700/30 backdrop-blur-3xl border border-gray-800/50 rounded-4xl flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse bg-teal-500"></div>
              <span>Learning Mode</span>
            </div>
            <h1 className="text-[70px] leading-none font-bold">
              My Next.js Learning Journey
            </h1>
            <p className="text-gray-500">
              A collection of my Next.js practice projects including routing,
              API integration, authentication, UI components and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
