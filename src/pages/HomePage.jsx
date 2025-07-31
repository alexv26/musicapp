import React from "react";
import AuroraHero from "../components/AuroraHero";

export default function HomePage() {
  return (
    <div className="w-full h-full">
      <AuroraHero />
      <div
        id="below-hero"
        className="flex w-full h-screen place-content-center"
      ></div>
    </div>
  );
}
