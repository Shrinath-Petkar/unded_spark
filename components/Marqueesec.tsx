import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Marqueesec = () => {
  return (
    <nav className="bg-[#1F1F1F] py-7 text-[#FFFFFF]">
      <div className="text-8xl py-16">
      <Marquee >
        <span className="flex justify-around items-center gap-16">DESIGN <span><Image src="/images/marquee_star.png" alt="star" width={118} height={119} /></span><span>UX</span> <span><Image src="/images/marquee_star.png" alt="star" width={118} height={119} /></span><span>WEB</span><span><Image src="/images/marquee_star.png" alt="star" width={118} height={119} /></span></span>
      </Marquee>
      </div>
      
    </nav>
  );
};

export default Marqueesec;
