import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="container pt-20 pb-10 lg:pt-30 lg:pb-20">
      <div className="grid grid-cols-12 gap-5 border border-gray-800">
        <div className="col-span-4 border-r border-gray-800 p-5">
          <Link href="#">Update Profile</Link>
        </div>
        <div className="col-span-8 p-5">
          <div className="mb-5">
            <Link href="#">Dashboard</Link>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
