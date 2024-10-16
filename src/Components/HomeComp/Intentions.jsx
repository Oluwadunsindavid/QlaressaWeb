import React from "react";
import img from "../../assets/lady.png";

function Webpage() {
  return (
    <>
      <div className="bg-[#F0F4FD] p-8 md:py-10 lg:py-24 md:px-24">
        <div className="  sm:flex items-center py-4">
          <div className=" my-2">
            <h2 className=" font-normal text-3xl sm:text-4xl md:text-5xl text-[#474E67] sm:w-40 md:w-[12rem]">
              Intention
            </h2>
          </div>
          <div>
            <p className=" font-normal sm:text-[18px] md:text-[21px] lg:text-[24px] sm:ml-8 lg:ml-12">
              The intention is to help businesses and customer service agents,
              quickly and efficiently respond to customers' questions and issues
            </p>
          </div>
        </div>
        <div className="  sm:flex items-center py-4 mt-4">
          <div className=" my-2">
            <h2 className=" font-normal text-3xl sm:text-4xl md:text-5xl text-[#474E67] sm:w-40 md:w-[12rem]">
              Target <br className=" hidden sm:block" /> users
            </h2>
          </div>
          <div>
            <p className=" font-normal sm:text-[18px] md:text-[21px] lg:text-[24px] sm:ml-8 lg:ml-12">
              The target users are businesses.
            </p>
            <p className=" font-normal sm:text-[18px] md:text-[21px] lg:text-[24px] sm:ml-8 lg:ml-12">
              Users are using web platform.
            </p>
          </div>
        </div>
        <div className=" sm:flex items-center py-4 mt-4">
          <div className=" my-2">
            <h2 className=" font-normal text-3xl sm:text-4xl md:text-5xl text-[#474E67] sm:w-40 md:w-[12rem]">
              Success <br className=" hidden sm:block" /> Factor
            </h2>
          </div>
          <div>
            <p className=" font-normal sm:text-[18px] md:text-[21px] lg:text-[24px] sm:ml-8 lg:ml-12">
              Simplify ticket generation across platforms.
            </p>
            <p className=" font-normal sm:text-[18px] md:text-[21px] lg:text-[24px] sm:ml-8 lg:ml-12">
              Enhance ticket response and closing time.
            </p>
            <p className=" font-normal sm:text-[18px] md:text-[21px] lg:text-[24px] sm:ml-8 lg:ml-12">
              Increase customer satisfaction and revenue.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F0F4FD] p-8 md:py-10 md:px-24">
        <div className=" w-full h-full object-cover relative">
          <img
            src={img}
            className=" w-full h-full object-cover rounded-md md:rounded-3xl"
            alt=""
          />
          <div className="text-[#6495ED] md:absolute md:right-0 md:top-[35%] md:-translate-x-0 md:-translate-y-0">
            <p className=" text-center text-[30px] sm:text-[45px] md:text-left md:text-[30px] lg:text-[50px] xl:text-[64px]">
              The first step to <br /> customer satisfaction
            </p>
            <p className=" text-black font-bold text-center md:text-left">Qlaressa</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Webpage;
