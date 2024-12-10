"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      className="container mx-auto px-4 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3
        className="text-3xl font-bold text-purple-900 text-left mb-8"
        variants={itemVariants}
      >
        FAQs
      </motion.h3>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 ml-5"
        variants={containerVariants}
      >
        {[...Array(6)].map((_, index) => (
          <motion.details
            key={index}
            className="cursor-pointer"
            variants={itemVariants}
          >
            <summary className="font-semibold text-purple-900 flex items-center gap-4">
              <span>Lorem ipsum dolor sit amet, consectetur adi elit.</span>
              <span className="text-lg font-thin">v</span>
            </summary>
            <p className="text-gray-600 mt-1 pl-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.details>
        ))}
      </motion.div>
    </motion.section>
  );
}
