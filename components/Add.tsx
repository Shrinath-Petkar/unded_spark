import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Add = () => {
  const data = [
    { imgurl: "/images/slideimg1.png" },
    { imgurl: "/images/slideimg2.png" },
    { imgurl: "/images/slideimg3.png" },
    { imgurl: "/images/slideimg4.png" },
    { imgurl: "/images/slideimg5.png" },
    { imgurl: "/images/slideimg1.png" },
  ];

  return (
    <div className="bg-[#ff4a3b]" >

      <Carousel>
        <CarouselContent>
            <div className="bg-[#ff4a3b] flex justify-center space-x-10">
              {data.map((i, index) => (
          <CarouselItem key={index}>
                  <Image
                    src={i.imgurl}
                    height={30}
                    width={172}
                    alt="image"
                    className="object-contain"
                  />
          </CarouselItem>

              ))}
            </div>
          <CarouselItem>
            <div className="bg-[#ff4a3b] flex justify-center space-x-10">
              {data.map((i, index) => (
                <>
                  <Image
                    key={index}
                    src={i.imgurl}
                    height={30}
                    width={172}
                    alt="image"
                    className="object-contain"
                  />
                </>
              ))}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-[#ff4a3b] flex justify-center space-x-10">
              {data.map((i, index) => (
                <>
                  <Image
                    key={index}
                    src={i.imgurl}
                    height={30}
                    width={172}
                    alt="image"
                    className="object-contain"
                  />
                </>
              ))}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-[#ff4a3b] flex justify-center space-x-10">
              {data.map((i, index) => (
                <>
                  <Image
                    key={index}
                    src={i.imgurl}
                    height={30}
                    width={172}
                    alt="image"
                    className="object-contain"
                  />
                </>
              ))}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-[#ff4a3b] flex justify-center space-x-10">
              {data.map((i, index) => (
                <>
                  <Image
                    key={index}
                    src={i.imgurl}
                    height={30}
                    width={172}
                    alt="image"
                    className="object-contain"
                  />
                </>
              ))}
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Add;
