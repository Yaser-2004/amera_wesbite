import Image from "next/image";
import Nav from "./Components/Nav";
import Hero from "./Sections/Hero";
import Services from "./Components/Services/services";

import Eligibility from "./Sections/Eligibility";
export default function Home() {
  return (
    <div>
       <Nav />
      <Hero />
      <Services/>
  <Eligibility/>
    </div>
  );
}
