import Image from "next/image";
import React from "react";

const  Hero2 = () => {
  return (
    <div className="h-screen bg-white text-black p-12">
      <div className="text-[150px]  uppercase  ">
        Hello,
        <br />
        <div className="flex justify-around">
          <Image
            src="/images/flower.png"
            width={200}
            height={200}
            alt="flower"
          />
          <span className="">Crea</span>tive
          <br />
        </div>
        Designer
        <Image
          src="/images/creative.png"
          width={300}
          height={300}
          alt="creative"
          className="absolute top-12 right-80 "
        />
      </div>
      <div className="w-[200px] h-[200px] rounded-full bg-blue-500 absolute top-[500px] right-64 ">
        <div className="relative mt-10 ml-16"> 
          <Image
            src="/images/circle.png"
            width={70}
            height={70}
            alt="circle"
            className=""
          />
        </div>
        <p className="text-xl text-white pt-2 pl-7">
        10 + Experience
        </p>
      </div>
    </div>
  );
};

export default Hero2;
