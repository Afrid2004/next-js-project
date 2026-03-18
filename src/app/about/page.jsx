import React from "react";
import { Quote } from "lucide-react";

const Page = () => {
  return (
    <div>
      <div className="container pt-20 pb-10 lg:pt-30 lg:pb-20">
        <h4 className="mb-10 text-[30px] font-bold text-center">About</h4>
        <div className="grid grid-cols-12 gap-5 items-center">
          <div className="col-span-12 lg:col-span-7 bg-gray-900 h-full rounded-2xl p-5 lg:p-10">
            <div className="flex flex-col justify-between h-full gap-5">
              <p className="leading-7">
                <Quote className="text-teal-500 rotate-180" />
                My name is Muhammad Faisal Yousuf Afrid. I completed my Diploma
                in Computer Technology from Feni Polytechnic Institute. I have
                experience working with WordPress and also have skills in modern
                frontend technologies such as HTML, CSS, JavaScript, Bootstrap,
                React, and Tailwind CSS. I enjoy learning new technologies and
                continuously improving my development skills. Currently, I am
                learning Next.js and building practice projects to understand
                modern web development concepts such as routing, dynamic pages,
                and performance optimization. My goal is to become a skilled
                full-stack developer in the future.
              </p>
              <div>
                <h5 className="text-teal-500">Muhammed Faisal Yousuf Afrid</h5>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 bg-gray-900 p-2 lg:p-5 rounded-3xl">
            <div>
              <img
                src="/images/next-js.webp"
                className="rounded-2xl"
                alt="next"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
