import React from "react";

const HeroRegButton = () => {
  return (
    <a
      href="#register"
      className="inline-flex w-auto items-center border border-purple-600 text-purple-600 hover:text-white transition px-8 py-3 rounded-full text-lg hover:bg-purple-500"
    >
      Register For Our Next Event
      <img src="/Right arrow.svg" alt="arrow" className="mx-2" />
    </a>
  );
};

export default HeroRegButton;
