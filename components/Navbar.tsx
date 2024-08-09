"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const NAV_LINKS = [
  { href: "/", key: "home", label: "_home" },
  { href: "/", key: "pages", label: "_pages" },
  { href: "/", key: "porfolio", label: "_porfolio" },
  { href: "/", key: "blogs", label: "_blogs" },
  { href: "/", key: "contact", label: "_contact" },
];

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="bg-white flex justify-around ">
      <div className=" px-3 py-6 flex gap-12 ">
        <Link href="/" className="flex">
          <Image src="/images/logo.svg" alt="logo" width={200} height={200} />
        </Link>
        <ul className="text-black flex text-2xl py-3">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="  px-12 py-4 rounded-md bg-white  lg:inline-block  lg:py-0"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* <div className="flex items-center justify-center">
          <button
            onClick={handleSearchClick}
            className="fixed top-4 text-2xl py-4 text-black"
          >
            
          </button>
          <CiSearch className="w-10 h-10 mr-8 text-red-500 "  />
          <HiOutlineMenuAlt3 className=" text-black w-10 h-10" />
        </div> */}
        <div className="flex items-center justify-center">
          <CiSearch className="w-10 h-10 mr-8 text-red-500" />
          <div className="w-12 h-12 border-2 border-red-500 rounded-full flex items-center justify-center">
            <HiOutlineMenuAlt3 className="text-black w-6 h-6" />
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default Navbar