import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Feedback = () => {
  return (
    <div className="pb-[80px] bg-[#1F1F1F] ">
      {/* <div className="relative ">
       <Image
                className="mb-4  "
                src="/images/downarrow.png"
                alt="Down arrow"
                height={253}
                width={253}
              />
      </div> */}

      {/* <div className="flex justify-center items-center mb-10 ">
        <Image
          src="/images/leftarrow.jpeg"
          alt="left arrow"
          height={60}
          width={60}
        />
        <Image
          src="/images/rightarrow.jpeg"
          alt="right arrow"
          height={60}
          width={60}
        />
      </div> */}

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className=" flex flex-col justify-center relative ">
            <Image
                className="ml-"
                src="/images/downarrow.png"
                alt="Down arrow"
                height={253}
                width={253}
              />

              <p className="text-4xl text-white text-center font-normal tracking-normal mb-8">
                Use high-quality images and videos to create a visually <br />{" "}
                appealing experience. Visuals of happy clients can significantly{" "}
                <br /> enhance the credibility of the testimonials.
              </p>

              

              <span className="text-white text-center text-2xl not-italic font-normal tracking-[1px] leading-7">
                Adam Pedro -{" "}
                <span className="text-[#ff4a3b] text-[18px]  tracking-[.72px]">
                  CEO Digital
                </span>
              </span>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" flex flex-col justify-center">
              <p className="text-4xl text-white text-center font-normal tracking-normal mb-8">
                Use high-quality images and videos to create a visually <br />{" "}
                appealing experience. Visuals of happy clients can significantly{" "}
                <br /> enhance the credibility of the testimonials.
              </p>
              <span className="text-white text-center text-2xl not-italic font-normal tracking-[1px] leading-7">
                Alkira Jemin -{" "}
                <span className="text-[#ff4a3b] text-[18px]  tracking-[.72px]">
                  CEO TBA
                </span>
              </span>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" flex flex-col justify-center">
              <p className="text-4xl text-white text-center font-normal tracking-normal mb-8">
                Use high-quality images and videos to create a visually <br />{" "}
                appealing experience. Visuals of happy clients can significantly{" "}
                <br /> enhance the credibility of the testimonials.
              </p>
              <span className="text-white text-center text-2xl not-italic font-normal tracking-[1px] leading-7">
                Brooklyn Simmons -{" "}
                <span className="text-[#ff4a3b] text-[18px]  tracking-[.72px]">
                  CEO Creative
                </span>
              </span>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Feedback;
