import Image from "next/image";
import Link from "next/link";

const Add = () => {
  const data = [
    {
      imgurl: "/images/slideimg1.png",
    },
    {
      imgurl: "/images/slideimg2.png",
    },
    {
      imgurl: "/images/slideimg3.png",
    },
    {
      imgurl: "/images/slideimg4.png",
    },
    {
      imgurl: "/images/slideimg5.png",
    },
    {
      imgurl: "/images/slideimg1.png",
    },
  ];
  return (
    <div className="bg-[#ff4a3b]" >

      <h2 className="text-[#ffff]">Over 32K+ software businesses growing with</h2>

      {data.map((i, index) => (
        <div key={index}>
          <Image src={i.imgurl} height={100} width={57} alt="image" />
        </div>
      ))}
      
    </div>
  );
};

export default Add;
