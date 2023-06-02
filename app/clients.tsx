import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

function Clients() {
  return (
    <div className="flex justify-around container md:px-20 py-10">
      <Marquee autoFill pauseOnHover gradient gradientWidth={50}>
        <div className="w-16 h-16 mx-16 relative ">
          <Image src="/google.svg" alt="Google" fill />
        </div>
        <div className="w-16 h-16 mx-16 relative ">
          <Image src="/nike.svg" alt="Google" fill />
        </div>
        <div className="w-16 h-16 mx-16 relative ">
          <Image src="/samsung.svg" alt="Google" fill />
        </div>
        <div className="w-16 h-16 mx-16 relative">
          <Image src="/apple.svg" alt="Google" fill />
        </div>
        <div className="w-16 h-16 mx-16 relative">
          <Image src="/itercom.svg" alt="Google" fill />
        </div>
        <div className="w-16 h-16 mx-16 relative">
          <Image src="/addidas.svg" alt="Google" fill />
        </div>
      </Marquee>
    </div>
  );
}

export default Clients;
