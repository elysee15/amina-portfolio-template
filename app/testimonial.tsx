import Image from "next/image";
import React from "react";

function Testimonial() {
  return (
    <section className="my-20 container md:px-20">
      <h2 className="text-xl font-semibold mb-10 text-center">Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card imgSrc="/avatar_1.svg" />
        <Card imgSrc="/avatar_2.svg" />
        <Card imgSrc="/avatar_3.svg" />
      </div>
    </section>
  );
}

export default Testimonial;

const Card = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="bg-[#F3F3F3] min-h-[200px] flex flex-col justify-between p-4">
      <p className="text-sm font-semibold">
        This is a template Figma file, turned into code using Anima. Learn more
        at AnimaApp.com
      </p>
      <footer className="flex gap-2">
        <Image src={imgSrc} alt="Avatar" width={40} height={40} />
        <div className="flex flex-col gap-1.5">
          <div className="flex">
            <Image src="/star.svg" alt="Star" width={20} height={20} />
            <Image src="/star.svg" alt="Star" width={20} height={20} />
            <Image src="/star.svg" alt="Star" width={20} height={20} />
            <Image src="/star.svg" alt="Star" width={20} height={20} />
            <Image src="/star.svg" alt="Star" width={20} height={20} />
          </div>
          <p className="text-sm">Gemma Nolen, Google</p>
        </div>
      </footer>
    </div>
  );
};
