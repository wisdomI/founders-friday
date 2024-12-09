import { motion } from "framer-motion";

const ImageCollage = () => {
  return (
    <div className="relative flex md:w-1/2 mt-28 md:mt-0">
      <div className="relative flex flex-col gap-2 z-10">
        {/* Top Two Images */}
        <div className="flex mt-10">
          {/* Top Image */}
          <motion.div
            className="relative pt-2 pb-8 bg-purple-400 rounded-[20px] h-fit"
            initial={{ opacity: 0, y: -50, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img
              src="frame 1 image.png"
              alt="Founders Friday GIF"
              className="w-1/8 h-[50%] md:w-full md:h-[30%] lg:w-full lg:h-[40%] rotate-6"
            />
            <p className="flex align-middle justify-center font-cursive font-bold">
              Founder's Friday
            </p>
          </motion.div>

          {/* Middle Image */}
          <motion.div
            className="relative pt-2 pb-8 bg-purple-600 h-fit rounded-[20px] mt-[100px] -ml-[100px]"
            initial={{ opacity: 0, y: -50, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 7 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <img
              src="/frame 1 image.png"
              alt="Event Image 2"
              className="w-1/8 h-[50%] rotate-6"
            />
            <p className="flex align-middle justify-center font-cursive font-bold">
              Founder's Friday
            </p>
          </motion.div>
        </div>

        {/* Second Two Images */}
        <div className="flex -mt-10 gap-10 -ml-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <img
              src="/Frame 20.png"
              alt="Event Image 3"
              className="w-56 h-50 rounded-lg transform rotate-3"
            />
          </motion.div>
          <motion.div
            className="relative flex gap-4 mt-36"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <img
              src="Frame 4.png"
              alt="Event Image 4"
              className="w-24 h-24 transform -rotate-3"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;
