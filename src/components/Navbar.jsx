"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pasthname = usePathname();

  const isDashboard = pasthname.includes("dashboard");

  if (!isDashboard) {
    return (
      <div className="fixed top-0 z-10 w-full">
        <div className="container flex items-center justify-center pt-3">
          <ul className="flex items-center gap-2 border bg-gray-700/30 backdrop-blur-2xl border-gray-800/60 py-3 px-2 rounded-4xl">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/services">Services</NavLink>
            </li>
            <li>
              <NavLink href="/login">Login</NavLink>
            </li>
          </ul>
          <button className="hidden">Nav Toggler</button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
