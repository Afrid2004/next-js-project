import React from "react";

const Topic = ({ title }) => {
  return (
    <div className="px-4 mb-10 mx-auto w-fit py-1 bg-gray-700/30 backdrop-blur-3xl border border-gray-800/50 rounded-4xl flex items-center gap-2">
      <div className="w-2 h-2 rounded-full animate-pulse bg-teal-500"></div>
      <span>{title}</span>
    </div>
  );
};

export default Topic;
