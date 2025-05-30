"use client";

import { navItems } from "@/data";
import dynamic from 'next/dynamic';

import Hero from "@/components/Hero";
//import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
//import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { ScrollFadeIn } from "@/components/ui/ScrollFadeIn";
import {MouseTrail} from "@/components/ui/MouseTrail"; // Import it!
// import MouseTrail from "@/components/ui/MouseTrail"; // Import it!
// import {CustomCursor} from "@/components/ui/CustomCursor"; // Import it!


// Dynamically import ParticlesBackground with no SSR
const ParticlesBackground = dynamic(
  () => import("@/components/ParticlesBackground"),
  { ssr: false }
);

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* <ParticlesBackground /> */}
      {/* <CustomCursor/> */}
      <MouseTrail/>
      <div className="max-w-7xl w-full relative z-10">
        <FloatingNav navItems={navItems} />
        <ScrollFadeIn>
          <Hero />
        </ScrollFadeIn>
        {/* <Grid /> */}
        {/* <Clients /> */}
        <ScrollFadeIn>
          <RecentProjects />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Experience />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Approach />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Footer />
        </ScrollFadeIn>
      </div>
    </main>
  );
};

export default Home;
