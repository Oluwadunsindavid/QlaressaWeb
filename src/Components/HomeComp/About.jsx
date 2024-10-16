import React from 'react'
import imgD from "../../assets/AbtImgD.png"
import imgM from "../../assets/AbtImgM.png";
import imgMD from "../../assets/AbtImgMD.png";

const About = () => {
  return (
    <div className=" bg-[#F0F4FD] p-8 md:py-4 md:px-24">
      <div className=" bg-red500 py-2 my-1 md:flex md:justify-between px-2">
        <h1 className=" text-[#989EB3] font-medium text-3xl text-center px-12 md:text-4xl lg:text-5xl">
          About
        </h1>
        <div>
          <p className=" font-normal text-xl text-center my-4 md:my-2 md:text-left">
            Qlaressa is a customer relationship management (CRM) app for
            businesses and customer service agents to manage and enhance their
            interactions with customers.
          </p>
          <p className=" font-normal text-xl text-center my-4 md:text-left">
            Qlaressa provides a comprehensive set of features to streamline
            customer relationship management, improve customer satisfaction, and
            boost overall business efficiency.
          </p>
        </div>
      </div>
      <div className=" w-full h-full object-cover bg-[#B8CEF7] p-4 m-4 rounded-3xl mx-auto flex justify-center sm:hidden">
        <img src={imgM} className="object-cover w-full" alt="" />
      </div>
      <div className=" hidden w-full h-full object-cover bg-[#CFDEF9] p-4 m-4 rounded-3xl mx-auto sm:flex justify-center lg:hidden">
        <img src={imgD} className="object-cover w-full h-full" alt="" />
      </div>
      <div className=" hidden w-full h-full object-cover m-4 mx-auto lg:flex justify-center">
        <img src={imgMD} className="object-cover w-full h-full" alt="" />
      </div>
    </div>
  );
}

export default About