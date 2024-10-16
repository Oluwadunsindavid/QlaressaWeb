import React from "react";

const problems = [
  {
    header: "Data from multiple sources",
    text: "Businesses struggle to consolidate customer data scattered across multiple platforms, hindering a comprehensive understanding of customer behavior.",
  },
  {
    header: "Inefficient customer support",
    text: "Coordinating communication across various channels is cumbersome, resulting in delayed responses, missed opportunities, and frustrated customers.",
  },
  {
    header: "Inadequate analytics tracking",
    text: "The lack of advanced analytics and reporting capabilities hinders our ability to derive meaningful insights from customer data, impacting strategic decision-making.",
  },
];

const solutions = [
  {
    header: "Unified data management",
    text: "Qlaressa consolidates customer data from various touchpoints, providing a unified view that empowers teams to understand customer behavior comprehensively.",
  },
  {
    header: "Omni-channel communication",
    text: "Seamlessly manage customer interactions across email, chat, social media, and more, ensuring timely responses and consistent communication.",
  },
  {
    header: "Real-time analytics and insights",
    text: "With Qlaressa's robust analytics and reporting tools, gain actionable insights to make informed decisions and drive business growth.",
  },
];

function App() {
  return (
    <div className="bg-[#F0F4FD] p-8 md:py-4 md:px-24">
      <div className=" rounded-3xl border-2 py-6">
        <div className="max-w-4xl p-2">
          <h1 className="text-3xl font-normal text-center sm:text-left sm:text-5xl lg:text-6xl mb-6">
            The Problem
          </h1>
          <div className="space-y-6">
            <ul className="list-disc pl-6">
              {problems.map((item, index) => (
                <li key={index}>
                  <h2 className="text-xl sm:text-2xl mt-2 font-normal text-black">
                    {item.header}
                  </h2>
                  <p className="text-xl sm:text-2xl font-normal text-[#474E67]">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-4xl p-2 mt-8 sm:mt-16">
          <h1 className="text-3xl font-normal text-center sm:text-left sm:text-5xl lg:text-6xl mb-6">
            The Solution
          </h1>
          <div className="space-y-6">
            <ul className="list-disc pl-6">
              {solutions.map((item, index) => (
                <li key={index}>
                  <h2 className="text-xl sm:text-2xl mt-2 font-normal text-black">
                    {item.header}
                  </h2>
                  <p className="text-xl sm:text-2xl font-normal text-[#474E67]">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
