import React from "react";

export const metadata = {
  title: "404",
  description: "Design and developed by MD Faisal Yousuf Afrid",
};

const Notfound = () => {
  return (
    <div className="container">
      <div className="flex justify-center items-center h-[calc((100vh)-4rem)]">
        <span className="flex gap-3 items-center justify-center">
          <h1 className="text-teal-500 text-8xl font-bold border-r-4 border-gray-600 pr-2.5">
            404
          </h1>
          <p className="text-center">No data found.</p>
        </span>
      </div>
    </div>
  );
};

export default Notfound;
