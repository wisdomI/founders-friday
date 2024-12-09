"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mr Belba Ngoy",
      feedback: "Always a remarkable experience for my team and myself.",
      image: "/Ellipse 309.png",
    },
    {
      name: "Mr Belba Ngoy",
      feedback: "This event transformed the way we approach our work.",
      image: "/Ellipse 309.png",
    },
    {
      name: "Mr Belba Ngoy",
      feedback: "An inspiring experience for all attendees.",
      image: "/Ellipse 309.png",
    },
    {
      name: "Mr Belba Ngoy",
      feedback: "A great platform for networking and learning.",
      image: "/Ellipse 309.png",
    },
    {
      name: "Mr Belba Ngoy",
      feedback: "A great platform for networking and learning.",
      image: "/Ellipse 309.png",
    },
  ];

  const itemsPerPage = 3; // Testimonials visible per page
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prevPage) =>
      prevPage > 0 ? prevPage - 1 : totalPages - 1
    );
  };

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages - 1 ? prevPage + 1 : 0
    );
  };

  const startIndex = currentPage * itemsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
      className="container mx-auto px-4 py-16 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold text-gray-900 mb-2"
        variants={itemVariants}
      >
        What Do Our Attendees Have To Say?
      </motion.h2>
      <div className="flex justify-between items-center mb-10">
        <motion.p
          className="text-gray-500 text-lg mx-auto"
          variants={itemVariants}
        >
          Well See For Yourself!
        </motion.p>
        <motion.div className="flex items-center gap-4" variants={itemVariants}>
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border-2 border-gray-900 flex justify-center items-center"
          >
            <span className="text-purple-600 text-lg font-bold">←</span>
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border-2 border-gray-900 flex justify-center items-center"
          >
            <span className="text-purple-600 text-lg font-bold">→</span>
          </button>
        </motion.div>
      </div>
      <motion.div
        className="flex justify-center gap-8"
        variants={containerVariants}
      >
        {currentTestimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="text-center"
            variants={itemVariants}
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-purple-600 overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover p-2"
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">
              {testimonial.name}
            </h3>
            <p className="text-gray-600 text-sm">{testimonial.feedback}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
