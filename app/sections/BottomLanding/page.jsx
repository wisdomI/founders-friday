"use client";

// import HeroRegButton from "../../components/HeroRegButton";

import React from "react";
import { motion } from "framer-motion";

export default function BottomLanding() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="bg-purple-50 min-h-screen flex flex-col justify-between border-t border-purple-200"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Header */}
      <motion.header
        className="flex justify-between items-center px-6 py-4 md:px-10 md:py-6"
        variants={fadeInUp}
      >
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Founders Friday Logo"
            className="w-12 h-12"
          />
          <h1 className="text-xl md:text-xl font-semibold text-gray-900">
            Founders <br /> Friday
          </h1>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.main
        className="text-center flex flex-col items-center justify-center gap-6 px-6"
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Want To Be A Part Of Abuja’s Biggest Tech <br /> Community?
        </h2>
        <a
          href="#register"
          className="inline-flex w-auto items-center border border-purple-600 text-purple-600 hover:text-white transition px-8 py-3 rounded-full text-lg hover:bg-purple-500"
        >
          Register For Our Next Event
          <img src="/Right arrow.svg" alt="arrow" className="mx-2" />
        </a>
      </motion.main>

      {/* Footer */}
      <motion.footer
        className="mx-14 py-4 md:px-10 md:py-6 border-t border-purple-300"
        variants={fadeInUp}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#facebook"
              className="bg-purple-900 w-12 h-12 flex items-center justify-center text-purple-700 border-2 rounded-full hover:bg-purple-700 hover:text-white transition"
            >
              <img src="/FB.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="#instagram"
              className="bg-purple-900 w-12 h-12 flex items-center justify-center text-purple-700 border-2 rounded-full hover:bg-purple-700 hover:text-white transition"
            >
              <img src="/IG.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a
              href="#twitter"
              className="bg-purple-900 w-12 h-12 flex items-center justify-center text-purple-700 border-2 rounded-full hover:bg-purple-700 hover:text-white transition"
            >
              <img src="/X.svg" alt="Twitter" className="w-6 h-6" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col md:flex-row gap-4 md:gap-6 text-black text-lg">
            <a
              href="#home"
              className="hover:text-purple-500 font-semibold active:text-purple-700 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-purple-500 font-semibold active:text-purple-700 transition-colors"
            >
              About Us
            </a>
            <a
              href="#gallery"
              className="hover:text-purple-500 font-semibold active:text-purple-700 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="hover:text-purple-500 font-semibold active:text-purple-700 transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </motion.footer>
    </motion.div>
  );
}
