import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-4xl uppercase text-[15px] ${isActive ? " border-2 border-teal-500/30 text-teal-500" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
