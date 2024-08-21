import Image from "next/image";

const Images = () => {
  return (
    <div className="flex justify-around pt-28 px-16 space-x-8 bg-black">
      <div className="relative group w-[550px] h-[550px]">
        <Image
          src="/person11.png"
          alt="person"
          width={550}
          height={550}
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-end justify-center p-4">
          <div className="w-full flex items-end justify-center">
            <button className="bg-orange-500 text-3xl text-white py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-transform duration-300">
              Harry Tector<br />
              Web Designer
            </button>
          </div>
        </div>
      </div>

      <div className="relative group w-[550px] h-[550px]">
        <Image
          src="/person22.png"
          alt="person"
          width={550}
          height={550}
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-end justify-center p-4">
          <div className="w-full flex items-end justify-center">
            <button className="bg-orange-500 text-3xl text-white py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-transform duration-300">
              Jenny Wilson<br />
              Creative Design
            </button>
          </div>
        </div>
      </div>

      <div className="relative group w-[550px] h-[550px]">
        <Image
          src="/person33.png"
          alt="person"
          width={550}
          height={550}
          className="object-cover rounded-lg relative z-10"
        />
        <div className="absolute inset-0 flex items-end justify-center p-4">
          <div className="w-full flex items-end justify-center">
            <button className="bg-orange-500 text-3xl text-white py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-16 group-hover:translate-y-0 transition-transform duration-300">
              Takla Murad<br />
              Ux Designer
            </button>
          </div>
        </div>
        {/* Background shape image */}
        <div className="absolute bottom-[-50px] right-[-50px] w-[400px] h-[400px]">
          {/* <Image
            src="/shape.png"
            alt="shape"
            layout="fill"
            objectFit="cover"
            className="rounded-lg transform scale-100 group-hover:scale-105 transition-transform duration-300"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Images;
