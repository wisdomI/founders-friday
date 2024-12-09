// pages/index.js
"use client";

import BottomLanding from "./sections/BottomLanding/page";
import FAQ from "./sections/FAQ/page";
import Head from "next/head";
import Header from "./sections/header/page";
import Hero from "./sections/hero/hero";
import JoinUs from "./sections/JoinUs/page";
import LocationSection from "./sections/comingSoon/page";
import OfferingSection from "./sections/whatweoffer/page";
import Testimonials from "./sections/Testimonials/page";

export default function Home() {
  return (
    <div className="bg-purple-50 font-sans">
      <Head>
        <title>Founder's Friday</title>
        <meta
          name="description"
          content="Join Founder's Friday - A community to connect, collaborate, and innovate!"
        />
      </Head>
      <Header />
      <Hero />
      <OfferingSection />
      <LocationSection />
      <JoinUs />
      <FAQ />
      <Testimonials />
      <BottomLanding />
    </div>
  );
}
