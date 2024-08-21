import Image from "next/image";
import Link from "next/link";
import React from "react";
export const info = [
  {
    id: 1,
    image: "/images/image1.jpg",
    date: "2023 - Business",
    title: "Web UI/UX Design",
    link: "/",
    desc: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odi orci. Nunc id massa ante. Suspendisse sit amet neque euismod,convallis quam eget, dignissim massa.",
  },
  {
    id: 2,
    image: "/images/image2.jpg",
    date: "2020 - UI",
    title: "Mobile UI/UX Design",
    link: "/",
    desc: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odi orci. Nunc id massa ante. Suspendisse sit amet neque euismod,convallis quam eget, dignissim massa.",
  },
  {
    id: 3,
    image: "/images/image3.jpg",
    date: "2022 - UX",
    title: "Creative Design",
    link: "/",
    desc: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odi orci. Nunc id massa ante. Suspendisse sit amet neque euismod,convallis quam eget, dignissim massa.",
  },
];
const Work = () => {
  return (
    <div className="bg-white text-black lg:py-32 px-3 lg:px-0 py-20">
      <div>
        <div className=" flex-cols  ">
          <p className="flex justify-center tracking-[5px] lg:tracking-[9px] lg:text-xl">
            Recent Work
          </p>
          <h1 className="flex justify-center lg:text-8xl text-5xl text-center lg:tracking-wide">
            We are fully dedicated to creating authentic digital solutions.
          </h1>
        </div>
      </div>
      <div className="lg:py-28 py-12">
        {info.map((i, index) => (
          <div
            className={`flex py-10 lg:py-0 lg:justify-around ${
              i.id % 2 === 0 && "flex-row-reverse"
            }    lg:items-center max-md:flex-wrap  `}
            key={index}
          >
            <div className="">
              <Image src={i.image} width={620} height={620} alt="image" />
            </div>
            <div className="lg:w-[30%] flex-col flex lg:justify-center lg:items-start">
              <p className="bg-black py-3 text-center lg:px-5 mt-8 text-white font-medium rounded-2xl lg:my-4">
                {i.date}
              </p>
              <Link href={i.link}>
                <h1 className="lg:text-4xl text-3xl font-bold tracking-[2xl] hover:text-[red] text-center">{i.title}</h1>
              </Link>

              <p className="text-xl py-5 tracking-[1px] lg:tracking-widest lg:text-left text-center">{i.desc}</p>
              <div className="flex justify-center">
              <u><Link href="/" className="text-2xl  hover:text-[red]">
                Read more
              </Link></u>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
