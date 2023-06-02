import Image from "next/image";
import React from "react";

function LastWorks() {
  return (
    <section className="container md:px-20">
      <h2 className="text-xl font-semibold mb-10 text-center">Last work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 md:gap-y-8">
        <div className="relative h-96 w-full aspect-square">
          <Image
            src="/project_1.svg"
            alt="Project 1"
            className="object-cover"
            fill
          />
          <h3 className="text-sm my-2 font-semibold">Project title</h3>
          <p className="text-[#2D2D2D] text-xs">UI, Art drection</p>
        </div>
        <div className="relative h-96 w-full aspect-square">
          <Image
            src="/project_2.svg"
            alt="Project 2"
            fill
            className="object-cover"
          />
          <h3 className="text-sm my-2 font-semibold">Project title</h3>
          <p className="text-[#2D2D2D] text-xs">UI, Art drection</p>
        </div>
        <div className="relative h-96 w-full aspect-square">
          <Image
            src="/project_3.svg"
            alt="Project 3"
            className="object-cover"
            fill
          />
          <h3 className="text-sm my-2 font-semibold">Project title</h3>
          <p className="text-[#2D2D2D] text-xs">UI, Art drection</p>
        </div>
        <div className="relative h-96 w-full aspect-square">
          <Image
            src="/project_4.svg"
            alt="Project 3"
            className="object-cover"
            fill
          />
          <h3 className="text-sm my-2 font-semibold">Project title</h3>
          <p className="text-[#2D2D2D] text-xs">UI, Art drection</p>
        </div>
        <div className="relative h-96 w-full aspect-square">
          <Image
            src="/project_5.svg"
            alt="Project 3"
            className="object-cover"
            fill
          />
          <h3 className="text-sm my-2 font-semibold">Project title</h3>
          <p className="text-[#2D2D2D] text-xs">UI, Art drection</p>
        </div>
        <div className="relative h-96 w-full aspect-square">
          <Image
            src="/project_6.svg"
            alt="Project 3"
            className="object-cover"
            fill
          />
          <h3 className="text-sm my-2 font-semibold">Project title</h3>
          <p className="text-[#2D2D2D] text-xs">UI, Art drection</p>
        </div>
      </div>
    </section>
  );
}

export default LastWorks;
