import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="border-t border-gray-800/50">
      <div className="container py-3">
        <div>
          <p className="text-[14px] text-center uppercase">
            <span className="opacity-75">
              Copyright &copy; {year} | Design & Developed By{" "}
            </span>
            <a
              className="text-teal-400 hover:underline"
              href="https://faisalafrid.vercel.app/"
            >
              Afrid
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
