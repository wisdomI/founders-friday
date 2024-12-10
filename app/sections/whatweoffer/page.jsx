import FoundersFriday from "./foundersfriday";
import React from "react";

export default function WhatWeOffer() {
  const offerings = [
    {
      title: "Monthly Meetups",
      description:
        "Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities.",
    },
    {
      title: "Diverse Network",
      description:
        "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
    },
    {
      title: "Knowledge Sharing",
      description:
        "Share and gain insights, experiences, and strategies to overcome challenges and drive innovation.",
    },
    {
      title: "Collaboration Opportunities",
      description:
        "Find potential co-founders, mentors, or partners for your next big venture.",
    },
    {
      title: "Community Support",
      description:
        "Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges.",
    },
  ];

  return (
    <section className="bg-purple-50 py-16 px-8 md:px-20 relative">
      {/* Background image for large screens */}
      <div
        className="hidden lg:block absolute top-0 right-0 w-full h-full"
        style={{
          backgroundImage: "url('/Vector3.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 410px",
          backgroundSize: "contain",
        }}
      ></div>

      <div className="container mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          What We Offer
        </h2>
        <div className="space-y-6">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-gray-300 pb-6 gap-2"
            >
              {/* Purple Dot + Title */}
              <div className="flex items-center gap-3 flex-1">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-purple-600"></div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {offering.title}
                </h3>
              </div>

              {/* Description + Button */}
              <div className="flex items-start md:items-center justify-between gap-3 lg:gap-4 flex-1">
                <p className="text-sm text-gray-500 flex-1">
                  {offering.description}
                </p>
                <button className="text-gray-500 hover:text-purple-800 text-4xl font-light leading-none">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-36">
        <FoundersFriday />
      </div>
    </section>
  );
}
