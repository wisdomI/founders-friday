import HeroRegButton from "../../components/HeroRegButton";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <motion.div
      className="text-left md:w-1/2 px-0 sm:px-4"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <p className="text-gray-800 text-sm max-w-lg font-bold mb-2">
        Join our premier monthly meetup for startup founders and tech
        visionaries
      </p>
      <h2 className="text-4xl font-bold text-purple-700 mb-4">
        Connect, Collaborate, Innovate!
      </h2>
      <p className="text-gray-800 max-w-lg mb-6">
        Every last Friday of the month, we bring together the brightest minds in
        our local tech ecosystem. Whether you're a seasoned entrepreneur or just
        starting your journey, Founder's Friday is your launchpad for new ideas,
        valuable connections, and game-changing opportunities.
      </p>
      <HeroRegButton />
      <p className="text-purple-600 mt-5 font-bold text-sm">
        Join Us for our next meetup on the 26th of July 2024
      </p>
      <div className="flex flex-row sm:flex-col sm:flex md:flex-col gap-4  mt-28">
        <img
          src="/Ellipse 3.svg"
          alt=""
          className="w-8 sm:w-8 md:w-20 lg:w-24 xl:w-28"
        />
        <img
          src="/Ellipse 2.png"
          alt=""
          className="w-8 sm:w-8 md:w-20 lg:w-24 xl:w-28"
        />
        <img
          src="/Ellipse 4.svg"
          alt=""
          className="w-8 sm:w-8 md:w-20 lg:w-24 xl:w-28"
        />
        <img
          src="/Ellipse 1.svg"
          alt=""
          className="w-8 sm:w-8 md:w-20 lg:w-24 xl:w-28"
        />
        <img
          src="/Ellipse 5.svg"
          alt=""
          className="w-8 sm:w-16 md:w-20 lg:w-24 xl:w-28"
        />
      </div>

      <a className="flex gap-2 mt-5 whitespace-nowrap" href="#register">
        <p className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-gray-950">
          Become a collaborator today
        </p>
        <Image
          src="/BoxArrowUpRight.png"
          alt="box-Image"
          width={16}
          height={16}
        />
      </a>
    </motion.div>
  );
};

export default HeroText;
