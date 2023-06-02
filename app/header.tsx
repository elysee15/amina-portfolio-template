import React from "react";
import Navbar from "./navbar";
import Image from "next/image";

function Header() {
  return (
    <header className="container">
      <Navbar />
      <div className="flex flex-col md:flex-row h-[calc(100vh_-_60px)] justify-center md:mx-20">
        <div className="md:text-start text-center w-full md:w-1/2 flex gap-2 md:gap-8 flex-col mb-7 md:mb-0 justify-center">
          <h4 className="text-sm font-semibold">Branding | Image making</h4>
          <h1 className="text-6xl xl:text-[100px] my-4 font-semibold">
            Visual <br /> Designer
          </h1>
          <p className="text-sm mx-auto md:mx-0 max-w-sm text-[#2D2D2D]">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
        </div>
        <div className="text-center md:w-1/2 md:py-20 h-96 md:h-full w-full">
          <div className="relative w-full h-full">
            <Image
              src="/hero.svg"
              alt="hero"
              fill
              fetchPriority="high"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
