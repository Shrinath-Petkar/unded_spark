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
    <div className="bg-white text-black py-32">
      <div>
        <div className=" flex-cols  ">
          <p className="flex justify-center tracking-[9px] text-xl">
            Recent Work
          </p>
          <h1 className="flex justify-center text-8xl text-center tracking-wide">
            We are fully dedicated to creating authentic digital solutions.
          </h1>
        </div>
      </div>
      <div className="py-28">
        {info.map((i, index) => (
          <div
            className={`flex justify-around ${
              i.id % 2 === 0 && "flex-row-reverse"
            }    items-center max-md:flex-wrap  `}
            key={index}
          >
            <div className="">
              <Image src={i.image} width={620} height={620} alt="image" />
            </div>
            <div className="w-[30%] flex-col flex justify-center items-start">
              <p className="bg-black py-3 px-5 mt-8 text-white font-medium rounded-2xl my-4">
                {i.date}
              </p>
              <Link href={i.link}>
                <h1 className="text-4xl hover:text-[red]">{i.title}</h1>
              </Link>

              <p className="text-xl py-5 tracking-widest">{i.desc}</p>
              <u><Link href="/" className="text-2xl hover:text-[red]">
                Read more
              </Link></u>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
