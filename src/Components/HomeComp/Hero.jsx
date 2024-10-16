import React from "react";
import img from "../../assets/Free MacBook Pro Mockup 1.png";

const Hero = () => {
  return (
    <div>
      <div
        className=" h-[100vh] px-4 relative w-[100%] pb-32 bg-cover bg-no-repeat grid bg-center "
        style={{
          backgroundImage: ` url(${img})`,
        }}
      >
        <p className="text-white text-left font-bold text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-7xl lg:text-8xl sm:left-0 sm:top-[35%] sm:-translate-x-0 sm:-translate-y-0 sm:ml-12 lg:ml-24">
          Qlaressa <br /> CRM (b2b)
        </p>
      </div>
    </div>
  );
};

export default Hero;
