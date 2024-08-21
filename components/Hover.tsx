"use client";

import { useState } from "react";
import Image from "next/image";

const Hover = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(null);

  const handleMouseMove = (e:any, container:any) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 
    setMousePos({ x, y });
  };

  const handleMouseEnter = (e:any, index:any) => {
    setHovered(index);
    handleMouseMove(e, e.currentTarget); 
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const images = [
    { src: "/creative.png", alt: "Creative Innovation" },
    { src: "/Daisy.png", alt: "Design Figure" },
    { src: "/Robot.png", alt: "Art Design" },
    { src: "/Molecule.png", alt: "Artistic Portrait" },
  ];

  return (
    <nav className="bg-black">
      <div className="flex flex-col items-center pt-24 space-y-40 "> {/* Flex column for vertical stacking */}
        {images.map((image, index) => (
          <div
            key={index}
            className="relative text-center"
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            onMouseLeave={handleMouseLeave}
          >
            <p className="text-7xl text-white hover:text-orange-500">{image.alt}</p>
            {hovered === index && (
              <Image
                src={image.src}
                alt={image.alt}
                className="absolute image-center transition-transform duration-50"
                style={{
                  transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
                }}
                width={200}
                height={200}
              />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Hover;
