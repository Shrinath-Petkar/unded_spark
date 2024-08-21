import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const slide = [
    {
      desc:"Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly enhance the credibility of the testimonials.",
      name:"kunal kakade",
      post:"ceo",
      desc1:"Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly enhance the credibility of the testimonials.",
      name1:"kunal kakade",
      post1:"ceo",
    },
    {
        desc:"Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly enhance the credibility of the testimonials.",
        name:"kunal kakade",
        post:"ceo",
        desc1:"Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly enhance the credibility of the testimonials.",
        name1:"kunal kakade",
        post1:"ceo",
      },
      {
        desc:"Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly enhance the credibility of the testimonials.",
        name:"kunal kakade",
        post:"ceo",
        desc1:"Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly enhance the credibility of the testimonials.",
        name1:"kunal kakade",
        post1:"ceo",
      },
      {
        desc:"Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly enhance the credibility of the testimonials.",
        name:"kunal kakade",
        post:"ceo",
        desc1:"Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly enhance the credibility of the testimonials.",
        name1:"kunal kakade",
        post1:"ceo",
      },
      {
        desc:"Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly enhance the credibility of the testimonials.",
        name:"kunal kakade",
        post:"ceo",
        desc1:"Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly enhance the credibility of the testimonials.",
        name1:"kunal kakade",
        post1:"ceo",
      },
  ];


const Testimonial = () => {
  return (
    <div className="lg:mx-24 mx-2">
      <div className="flex justify-between">
        <div>
          <p className=" lg:tracking-[5px] tracking-[3px] text-center lg:text-left ">Client Testimonials</p>
          <h1 className="lg:text-8xl text-5xl font-bold text-center lg:pr-36 lg:text-left  lg:tracking-[5px]">
            What People are Saying!
          </h1>
        </div>
        <Image src="/images/colan.png" alt="colan" width={200} height={200}  className="hidden lg:flex"/>
      </div>
      <Carousel className="mt-12">
        <CarouselContent>
        {slide.map((i, index) => (  
          <CarouselItem className="flex px-6" key={index}> 
            <div >
              <p className="lg:text-2xl text-xl lg:text-left  text-center lg:leading-[40px] leading-7">
               {i.desc}
              </p>
              <p className="text-xl pt-5 text-center lg:text-left">{i.name} -<span  className="text-red-500">{i.post}</span></p>
            </div>
            <div  className="pl-12 hidden lg:flex lg:flex-col">
              <p className="text-2xl leading-[40px]">
                {i.desc1}
              </p>
              <p className="text-xl pt-5">{i.name1} - <span className="text-red-500">{i.post1}</span></p>
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonial;
