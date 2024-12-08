import React from "react";
import Image from "next/image";
// import tubus from './images/tubus.jpg'

const Hero = () => {
  return (
      <div className="w-full h-[88vh] flex">
        <div className="w-1/2 h-full">
          <video
              src="/video/tubus.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-full">
          <div className="w-full h-full overflow-hidden relative">
            <Image src="/images/tubus.jpg" alt="tubus" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
  );
};

export default Hero;