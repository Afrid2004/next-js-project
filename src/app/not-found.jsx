import { TriangleAlert } from "lucide-react";
import React from "react";

const Notfound = () => {
  return (
    <div className="container">
      <div className="flex justify-center items-center h-[calc((100vh)-4rem)]">
        <div>
          <div className="flex justify-center items-center border-2 border-red-300/30 bg-red-300/30 w-25 h-25 rounded-full mx-auto mb-5">
            <TriangleAlert className="text-red-400 w-10 h-10 shrink-0" />
          </div>
          <p className="text-center">No data found.</p>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
