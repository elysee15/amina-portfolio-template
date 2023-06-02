import Image from "next/image";
import React from "react";

function Skills() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 py-20 gap-8 container md:px-20">
      <div className="flex flex-col text-center relative min-h-[300px] w-full">
        <div className="relative w-full h-full">
          <Image src="/product_design.svg" alt="Product design" fill />
        </div>
        <h2 className="text-lg font-semibold py-4">Product design</h2>
        <p className="text-sm">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
      </div>
      <div className="flex flex-col text-center relative min-h-[300px] w-full">
        <div className="relative w-full h-full">
          <Image src="/art_direction.svg" alt="Art direction" fill />
        </div>
        <h2 className="text-lg font-semibold py-4">Art direction</h2>
        <p className="text-sm">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
      </div>
      <div className="flex flex-col text-center relative min-h-[300px] w-full">
        <div className="relative w-full h-full">
          <Image src="/visual_design.svg" alt="Visual design" fill />
        </div>
        <h2 className="text-lg font-semibold py-4">Visual design</h2>
        <p className="text-sm">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
      </div>
    </section>
  );
}

export default Skills;
