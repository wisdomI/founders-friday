// import React from "react";
// import SectionOne from "./SectionOne";
// import SectionTwo from "./SectionTwo";

// export default function JoinUs() {
//   return (
//     <div className="relative">
//       <SectionOne />
//       <img src="Group 4.svg" alt="Avatar" className="w-[100vw] h-full" />
//       <SectionTwo />
//     </div>
//   );
// }

// Add the "use client" directive to make this a client component
"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import SectionOne and SectionTwo as client-side components
const SectionOne = dynamic(() => import("./SectionOne"));
const SectionTwo = dynamic(() => import("./SectionTwo"));

export default function JoinUs() {
  return (
    <div className="relative">
      <SectionOne />
      {/* Ensure the image is placed in the public folder */}
      <img src="/Group 4.svg" alt="Avatar" className="w-[100vw] h-full" />
      <SectionTwo />
    </div>
  );
}
