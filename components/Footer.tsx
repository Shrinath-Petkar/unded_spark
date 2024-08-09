// components/Footer.js
import React from "react";
import Image from "next/image"; // For the logo
import { BiPhoneCall } from "react-icons/bi";
import { FaHouseChimney } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex bg-gray-900 text-white py-10 px-12">
      <div className="mr-32">
        <Image src="/logo.svg" alt="Logo Unded" width={180} height={57.33} />
      </div>

      <div className="mr-28 flex flex-col gap-6">
        <h3 className="text-2xl">Address</h3>
        <div className="flex gap-5  items-center">
          <BiPhoneCall />
          <p>+ 1 (246) 333-0088</p>
        </div>
        <div className="flex gap-5  items-center">
          <FaHouseChimney />
          <p>alma.lawson@example.com</p>
        </div>
        <div className="flex gap-5  items-center">
          <IoMailOpenOutline />
          <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
        </div>
      </div>

      <div className="mr-28 flex flex-col">
        <h3 className="text-2xl mb-6">Follow Us</h3>
        <p className="mb-4">Behance</p>
        <p className="mb-4">Instagram</p>
        <p>YouTube</p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-2xl mb-8">Subscribe</h3>

        <div className="relative bg-gray-800 rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="Your e-mail address"
            className="w-full py-2 pl-4 pr-12 text-sm text-white bg-transparent outline-none"
          />
          {/* <div className="absolute right-0 top-0 flex items-center h-full px-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5   
 4.5L21 12m-7.5 7.5L21 12m-7.5-7.5L12 15m3-3h-6"
          />
        </svg>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
