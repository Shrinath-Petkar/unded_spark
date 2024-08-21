import Image from "next/image";
import React from "react";

const Second = () => {
  const data = [
    {
      imgurl: "/images/card1.png",
      title: "Web UI/UX Design",
      description: "We are helping client to create WordPress websites.",
    },
    {
      imgurl: "/images/card2.png",
      title: "Mobile UI/UX Design",
      description: "We are helping client to create WordPress websites.",
    },
    {
      imgurl: "/images/card3.png",
      title: "Branding Design",
      description: "We are helping client to create WordPress websites.",
    },
    {
      imgurl: "/images/card4.png",
      title: "Creative Design",
      description: "We are helping client to create WordPress websites.",
    },
  ];

  return (
    <div className="flex w-full h-full px-10 bg-gray-900 text-white py-5">
      <div className="flex flex-col">
        <h1 className="text-lg uppercase tracking-wide custom-subheading mb-8 pt-12">
          Accusamus Et Iust
        </h1>
        <h2 className="text-6xl font-light custom-font leading-tight mb-8">
          The way we do things in our line of work.
        </h2>
        <p className="text-lg mb-8">
          We are helping client to create WordPress websites with our talented
          expert.
        </p>
        <a
          href="#"
          className="text-white underline text-lg mb-8 inline-block"
        >
          Read case study &rarr;
        </a>
      </div>

      

      <div className="bg-gray-900 text-white pt-6">
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.map((i, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Image
                  className="rounded-md"
                  src={i.imgurl}
                  height={100}
                  width={57}
                  alt="image"
                />
                <h3 className="text-2xl font-semibold custom-font mt-7">
                  {i.title}
                </h3>
                <p className="text-lg mt-7">{i.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
