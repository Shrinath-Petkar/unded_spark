import Image from "next/image";
import React from "react";

const Blogs2 = () => {
  const data = [
    {
      images: "/images/image1.jpg",
      date: "in Design October 25, 2023",
      title: "10 Reasons why you should make a physical portfolio",
      subtitle:
        "Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...",
    },
    {
      images: "/images/image2.jpg",
      date: "in Design October 23, 2023",
      title: "A Day in the Life: Cool and Exteriors",
      subtitle:
        "Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...",
    },
    {
      images: "/images/image3.jpg",
      date: "in Design October 15, 2023",
      title: "Increasing productivity through workplace friends",
      subtitle:
        "Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...",
    },
  ];

  return (
    <div className="py-24">
        <div className="px-8  flex flex-col text-center" >
        <p className=" text-black py-2 tracking-[5px]">Blog Post</p>
        <p className="text-7xl  text-black pb-8 tracking-[5px]">My Latest Articles</p>
        </div>
     
      <div className="flex justify-center ">
        {data.map((post, index) => (
          <React.Fragment key={index}>
            <div className="relative group w-80 flex-shrink-0 flex flex-col">
              <div>
                <Image
                  src={post.images}
                  alt="images"
                  width={300}
                  height={200}
                />

                <p className="text-xl text-black mb-2">{post.date}</p>
                <h2 className="text-2xl mt-5 text-black mb-4">{post.title}</h2>
                <p className="text-lg text-black mt-2 mb-6">{post.subtitle}</p>
                <div className="absolute bottom-0  hidden group-hover:flex items-center text-orange-500 font-semibold cursor-pointer">
                  <span>Read More</span>
                </div>
              </div>
            </div>
            {index < data.length - 1 && (
              <div className="w-1 border-l  border-white mx-8"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Blogs2;
