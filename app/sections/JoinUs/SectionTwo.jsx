import React from "react";
import { motion } from "framer-motion";

const SectionTwo = () => {
  return (
    <div className="bg-transparent py-16 px-4">
      <div className="container flex flex-col md:flex-row items-center gap-4">
        {/* Left Section - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/IMG_2721 1.png"
            alt="Founder's Friday May Edition"
            className="w-full rounded-lg shadow-lg mb-2"
          />
        </motion.div>

        {/* Right Section - Text and Buttons */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left flex gap-10 flex-col"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h4 className="font-bold text-gray-900 mb-2">
            At Founders Friday, Every Friday Is A Learning Exprience.
          </h4>
          <p className="text-gray-700 text-lg mb-6">
            Join us in our mission to transform ideas into impact and shape the
            future of Nigeria’s startup landscape.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#register"
              className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition"
            >
              Register <span className="ml-2">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionTwo;
