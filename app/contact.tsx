import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <footer className="container flex flex-col md:flex-row gap-8 md:px-20 my-20">
      <div className="w-full md:w-1/2 flex flex-col">
        <h3 className="text-xl font-bold">Lets work together</h3>
        <p className="my-5 text-sm max-w-xs">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com This is a template Figma file, turned into code
          using Anima. Learn more at AnimaApp.com
        </p>
        <div className="flex items-center gap-3 mt-2 md:mt-6">
          <Image src="/discord.svg" alt="Discord" width={30} height={30} />
          <Image src="/facebook.svg" alt="Facebook" width={30} height={30} />
          <Image src="/dribbble.svg" alt="Facebook" width={30} height={30} />
          <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
          <Image src="/behance.svg" alt="Behance" width={30} height={30} />
        </div>
      </div>
      <form action="#" className="w-full md:w-1/2 flex flex-col gap-4">
        <fieldset>
          <input type="text" name="name" id="name" placeholder="Name" />
        </fieldset>
        <fieldset>
          <input type="email" name="email" id="email" placeholder="Email" />
        </fieldset>
        <fieldset>
          <textarea
            name="message"
            id="message"
            placeholder="Type your message here"
            cols={30}
            rows={10}
          ></textarea>
        </fieldset>
        <button className="bg-[#2D2D2D] text-white py-2 px-4 self-start text-sm min-h-[50px] min-w-[150px]">
          Submit
        </button>
      </form>
    </footer>
  );
}

export default Contact;
