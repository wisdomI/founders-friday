import React, { useEffect, useState } from "react";

import AboutSection from "./AboutSection";
import HeroText from "./HeroText";
import ImageCollage from "./ImageCollage";

const Hero = () => {
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
    <section
      className="bg-purple-50 py-20 px-16 sm:px-2 bg-center font-sans"
      style={{
        backgroundImage: isMediumScreen ? "url('/Vector 1.png')" : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center -20px",
      }}
    >
      <div className="container mx-auto sm:mx-0 flex flex-col md:flex-row items-center justify-between">
        <HeroText />
        {/* Render ImageCollage only on medium and larger screens */}
        {isMediumScreen && <ImageCollage />}
      </div>
      <div className="mt-40">
        <AboutSection />
      </div>
    </section>
  );
};

export default Hero;
