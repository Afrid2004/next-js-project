import Hero from "@/components/Hero";
import Technology from "@/app/technology/page";
import Image from "next/image";
import SSRTechnology from "./ssr-technology/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Technology />
      <SSRTechnology />
    </div>
  );
}
