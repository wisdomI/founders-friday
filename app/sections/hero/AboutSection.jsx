import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

const AboutSection = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(min-width: 768px)");
      setIsMediumScreen(mediaQuery.matches);

      const handleResize = () => setIsMediumScreen(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleResize);

      return () => mediaQuery.removeEventListener("change", handleResize);
    }
  }, []);

  return (
    <div className="bg-transparent py-16 px-4">
      <div className="container flex flex-col md:flex-row items-center gap-4">
        {/* Left Section - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start"
          initial={{ x: -100, opacity: 0 }} // Starts offscreen to the left and invisible
          whileInView={{ x: 0, opacity: 1 }} // Animates to its normal position
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/IMG_2857 1.png"
            alt="Founder's Friday May Edition"
            className="w-full rounded-lg shadow-lg mb-2"
          />
        </motion.div>

        {/* Line Image (visible on larger screens) */}
        {isMediumScreen && (
          <motion.img
            src="/Line 1.png"
            alt="Line"
            className="w-5 h-96"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        )}

        {/* Right Section - Text and Buttons */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left flex gap-10 flex-col"
          initial={{ x: 100, opacity: 0 }} // Starts offscreen to the right and invisible
          whileInView={{ x: 0, opacity: 1 }} // Animates to its normal position
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Who Are We?
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            Born from the vibrant startup ecosystem of Abuja, we recognized the
            need for a consistent, high-quality networking platform where
            founders, innovators, and tech enthusiasts could connect, share
            ideas, and foster collaboration.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#register"
              className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition"
            >
              Register <span className="ml-2">→</span>
            </a>
            <a
              href="#donate"
              className="flex font-bold items-center justify-center border rounded-full border-purple-600 text-purple-600 px-6 py-3 text-lg hover:bg-purple-600 hover:text-white transition"
            >
              Donate{" "}
              <span className="ml-2">
                <img src="/Money Bag.svg" alt="" />
              </span>
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-gray-700 font-semibold text-sm mt-6">
            Founder's Friday is more than just a meetup — it's a movement.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
