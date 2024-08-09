import Image from "next/image";
import Link from "next/link";
export const images = [
  {
    image: "/person1.jpg",
    name: "Harry Tector",
    post: "Web Designer",
  },
  {
    image: "/person2.jpg",
    name: "Jenny Willson",
    post: "Creative Designer",
  },
  {
    image: "/person3.jpg",
    name: "Takla Murad",
    post: "UX designer",
  },
];

const Images = () => {
  return (
    <div className="flex px-16 py-32 bg-white text-black">
      <div className="flex-col w-[60%] mr-12 flex items-start">
        <p className="text-xl tracking-[4px]">Our team</p>
        <h1 className="text-7xl tracking-wider">
          Join a team of creatives
        </h1>{" "}
        <p className="text-xl py-5 tracking-widest">
          Proin efficitur, mauris vel condimentum pulvinar, velit orci
          consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio
          orci. Nunc id massa ante. Suspendisse sit amet neque euismod,
          convallis quam eget, dignissim massa.
        </p>
        <u>
          <Link href="/" className="text-2xl hover:text-[red]">
            View more
          </Link>
        </u>
      </div>
<div>
    
</div>
      {images.map((i, index) => (
        <div className="relative group flex p-2" key={index}>
          <Image
            src={i.image}
            alt="person"
            width={500}
            height={500 }
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-end justify-center p-4">
            <div className="w-full flex justify-center">
              <button className="bg-orange-500 text-3xl text-white py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-transform duration-300">
                <p>{i.name}</p>
                <p className="text-sm">{i.post}</p>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
