import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="py-[150px] text-left bg-[#ff4a3b] flex justify-around">
      <div>
        <span className="text-white text-[24px] font-normal leading-[10.8px] tracking-[10.8px]">
          Always Innovative
        </span>
        <h2 className="text-white text-[130px] font-normal mb-[30px] my-[30px] leading-[130px] ">
          Your Design
          <br />
          Our Solutions
        </h2>
        <p className="text-white flex text-xl font-normal tracking-[2px] leading-7 max-w-[615px]">
          We are helping clients create WordPress websites with our talented
          experts. Quam nulla porttitor massa id neque. Est placerat in egestas.
        </p>
        <div>
          <button className="mt-[70px]">Read case study</button>
        </div>
      </div>
      <div>
        <div>
          <Image
            src="/images/section1.jpg"
            width={300}
            height={300}
            alt="section1"
          />
        </div>
        <div className="absolute ">
        <Image
          src="/images/flower.png"
          width={200}
          height={200}
          alt="section1"
        />
        </div> 
      </div>
    </div>
  );
};

export default Hero;
