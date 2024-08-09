import Image from "next/image";
import Link from "next/link";
import React from "react";
export const data = [
  {
    image: "/images/elipse.png",
    title: "Web UI/UX Design",
    link: "/",
    desc: "We are helping client to create WordPress websites.We are helping client to create UI websites.",
  },
  {
    image: "/images/blue_flower.png",
    title: "Web UI/UX Design",
    link: "/",
    desc: "We are helping client to create WordPress websites.We are helping client to create UI websites.",
  },
  {
    image: "/images/yellow_flower.png",
    title: "Web UI/UX Design",
    link: "/",
    desc: "We are helping client to create WordPress websites.We are helping client to create UI websites.",
  },
  {
    image: "/images/creative_design.png",
    title: "Web UI/UX Design",
    link: "/",
    desc: "We are helping client to create WordPress websites.We are helping client to create UI websites.",
  },
  {
    image: "/images/movement.png",
    title: "Web UI/UX Design",
    link: "/",
    desc: "We are helping client to create WordPress websites.We are helping client to create UI websites.",
  },
];

const Accusamus = () => {
  return (
    <div className="bg-white text-black pb-32 px-14   ">
      <div className=" flex-cols  ">
        <p className="flex justify-center  tracking-[9px] text-xl">
          Accusamus Et Iust
        </p>
        <h1 className="flex justify-center text-8xl text-center tracking-wide ">
          The way we do things <br /> in our line of work.
        </h1>
      </div>
   
    <div className="grid grid-cols-3">
        {data.map((i, index) => (
          <div key={index} className="pt-12">
            <Image src={i.image} width={100} height={100} alt="image" />
            <Link href={i.link}>
              <p className="text-3xl pt-6  ">{i.title}</p>
            </Link>
            <p className="text-2xl pt-6 ">{i.desc}</p>
          </div>
        ))} 
      </div>  
    </div>
  );
};

export default Accusamus;
