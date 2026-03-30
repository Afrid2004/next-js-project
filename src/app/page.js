import Hero from "@/components/Hero";
import Technology from "@/app/technology/page";
import SSRTechnology from "./ssr-technology/page";
import Meals from "./csr-meals/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Technology />
      <SSRTechnology />
      {/* <Meals /> */}
    </div>
  );
}
