"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const LocationSection = () => {
  const [currentState, setCurrentState] = useState("Kaduna");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isGoingUp, setIsGoingUp] = useState(true);

  const states = ["Kaduna", "Lagos", "Abuja", "Port Harcourt", "Ibadan"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentState((prevState) => {
          const currentIndex = states.indexOf(prevState);
          const nextIndex = (currentIndex + 1) % states.length;
          return states[nextIndex];
        });
        setIsGoingUp((prev) => !prev);
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-cover bg-center h-screen flex items-center gap-80 align-middle px-12 md:px-12"
      style={{
        backgroundImage: "url(/section-bg-img.png)",
        height: "80vh",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <motion.div
        className="relative text-white max-w-3xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
        variants={slideInVariants}
      >
        <h1 className="text-2xl font-bold text-white mt-2">
          Founders Friday is coming to{" "}
        </h1>
        {/* Transition wrapper */}
        <div className="relative overflow-hidden h-16">
          <h1
            className={`text-6xl font-bold text-purple-500 transition-transform duration-500 ease-in-out ${
              isTransitioning
                ? isGoingUp
                  ? "translate-y-full opacity-0"
                  : "-translate-y-full opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            {currentState}
          </h1>
        </div>
        <p className="text-sm md:text-base text-gray-300 mt-2 max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
          dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
          suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        <button className="mt-6 px-6 py-3 border border-purple-500 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition">
          Register →
        </button>
      </motion.div>
      <motion.div
        className="hidden md:block"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.5 }} // Add delay for staggered effect
        variants={slideInVariants}
      >
        <div className="text-purple-500 text-9xl font-extrabold opacity-80">
          <img src="logoo.svg" alt="Logo" className="h-96 w-96" />
        </div>
      </motion.div>
    </div>
  );
};

export default LocationSection;
