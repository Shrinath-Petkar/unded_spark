import React from "react";
import Image from "next/image";

const Video2 = () => {
  return (
    <div className=" bg-white text-black">
      <div className="relative flex items-center justify-center pt-32">
        <Image
          src="/images/video.png"
          alt="Image with play button"
          height={500}
          width={500}
        />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4">
          <Image src="/images/play.png" width={150} height={150} alt="play" />
        </button>
      </div>
      <div className="flex justify-center -mt-24">
        <h1 className="text-[200px]">VIEW VIDEO</h1>
      </div>    
    </div>
  );
};

export default Video2;
