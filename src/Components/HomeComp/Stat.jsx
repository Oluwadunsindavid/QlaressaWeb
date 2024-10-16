import React from "react";
import img from "../../assets/stat.png";
import img1 from "../../assets/track.png";
import img2 from "../../assets/activeTicket.png";
import img3 from "../../assets/ticketInfo.png";
import img4 from "../../assets/closedTicket.png";
import img5 from "../../assets/customer.png";
import img6 from "../../assets/customerInfo.png";
import img7 from "../../assets/search.png"
import img8 from "../../assets/chat1.png"
import img9 from "../../assets/chat2.png"

const Stat = () => {
  const imageArrays = [
    { title: "Seed your stats and recents at a glance", img1: img },
    { title: "Track and get notified updates", img1: img1 },
    { title: "Attend to active tickets", img1: img2 },
    { title: "Explore tickets information", img1: img3 },
    { title: "Track closed tickets", img1: img4 },
    { title: "Customer", img1: img5 },
    { title: "Customer information", img1: img6 },
    { title: "Quick search", img1: img7 },
    { title: "Multiple Chats", img1: img8 },
    { title: "Chat with multiple media", img1: img9 },
  ];
  return (
    <div className=" p-8 md:py-4 md:px-24">
      <div>
        {imageArrays.map((imageArray, index) => (
          <div key={index}>
            <h1 className=" text-[12px] font-bold text-center text-[#989EB3] sm:text-2xl md:text-4xl xl:text-[72px] pt-0 sm:pt-4 md:pt-8 lg:pt-12">
              {imageArray.title}
            </h1>
            <div className=" w-full h-full object-cover">
              <img
                src={imageArray.img1}
                className=" mx-auto object-cover"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stat;
