import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Second from "@/components/Second"
import Marquee from "@/components/Marquee";
import Cards from "@/components/Cards";
import Feedback from "@/components/Feedback";
import Add from "@/components/Add";
import Image from "next/image";
import Hover from "@/components/Hover";
import Images from "@/components/Images";
import Video from "@/components/Video";
import Awards from "@/components/Awards";
import Blog from "@/components/Blog";
import Hero2 from "@/components/Hero2";

export default function Home() {
  return (
    <>
      <Hero2/>
      <Hero />
      <Second/>
      <Service />
      <Marquee />
      <Cards />
      <Feedback/>
      <Add/>
      <Hover />
      <Images/>
      <Video/>
      <Awards/>
      <Blog/>
    
    </>
  );
}
