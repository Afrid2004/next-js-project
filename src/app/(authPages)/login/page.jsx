"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const handleNavigate = () => {
    const login = !isLogin;
    setIsLogin(login);
    login ? router.replace("/dashboard") : router.replace("/");
  };
  return (
    <div className="container pt-20 pb-10 lg:pt-30 lg:pb-20">
      <div className="flex items-center justify-center">
        <button
          className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-4xl duration-75 cursor-pointer"
          onClick={handleNavigate}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default page;
