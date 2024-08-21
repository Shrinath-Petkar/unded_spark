"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

export const NAV_LINKS = [
  { href: "/", key: "home", label: "_home" },
  { href: "/", key: "pages", label: "_pages" },
  { href: "/", key: "porfolio", label: "_porfolio" },
  { href: "/", key: "blogs", label: "_blogs" },
  { href: "/", key: "contact", label: "_contact" },
];

const Navbar2 = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
      };

 

  return (
    <div className="bg-white flex lg:justify-around  ">
      <div className=" px-3 py-6 flex gap-12 ">
        <Link href="/" className="flex">
          <Image src="/images/logo.svg" alt="logo" width={200} height={200} />
        </Link>
        <ul className="text-black lg:flex md:flex text-2xl py-3 hidden">
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
        {/* <Link href="/" className="text-black py-4" >
            SEARCH
        </Link> */}
        {/* <div className={`container mx-auto ${isSearchOpen ? 'bg-blue-500' : 'bg-white'}`}> */}
        <div>
      <button onClick={handleSearchClick} className=" top-4 text-2xl py-4 text-black">
        Search
      </button>
      {/* {isSearchOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <input type="text" className="border border-gray-300 p-2 rounded" />
        </div>
      )} */}
    </div>
      </div>
    </div>
  );
};

export default Navbar2;
