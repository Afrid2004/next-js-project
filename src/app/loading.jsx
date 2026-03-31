import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center bg-gray-950 h-screen relative z-50">
      <div className="w-2xs">
        <p className="text-center mb-3 text-gray-600">Loading...</p>
        <div className=" bg-gray-800 h-0.5 relative rounded-4xl">
          <div className="animated-bar bg-teal-600 h-full absolute rounded-4xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
