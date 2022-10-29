import React from "react";
import NavBar from "./components/navBar/navBar";
import Hero from "./components/hero/hero";
import FirstInfo from "./components/firstInfo/firstInfo";
import LastBlackpart from "./components/lastBlackPart/lastBlackPart";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <FirstInfo />
      <LastBlackpart />
    </div>
  );
}
