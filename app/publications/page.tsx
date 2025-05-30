// "use client";

// import { navItems } from "@/data";
// import dynamic from 'next/dynamic';

// import Hero from "@/components/Hero";
// import ResearchPapers from "@/components/ResearchPapers";
// import Magazines from "@/components/Magazines";
// import Blogs from "@/components/Blogs";
// //import Grid from "@/components/Grid";
// // import Footer from "@/components/Footer";
// //import Clients from "@/components/Clients";
// import { FloatingNav } from "@/components/ui/FloatingNavbar";
// import { ScrollFadeIn } from "@/components/ui/ScrollFadeIn";
// import {MouseTrail} from "@/components/ui/MouseTrail"; // Import it!



// // Dynamically import ParticlesBackground with no SSR
// const ParticlesBackground = dynamic(
//   () => import("@/components/ParticlesBackground"),
//   { ssr: false }
// );

// const Home = () => {
//   return (
//     <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       <MouseTrail />
//       <div className="max-w-7xl w-full relative z-10">
//         <FloatingNav navItems={navItems} />
//         <ScrollFadeIn>
//           <ResearchPapers />
//         </ScrollFadeIn>
//         <ScrollFadeIn>
//           <Blogs />
//         </ScrollFadeIn>
//         <ScrollFadeIn>
//           <Magazines/>
//         </ScrollFadeIn>
//       </div>
//     </main>
//   );
// };

// export default Home;




"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

// import Hero from "@/components/Hero";
import ResearchPapers from "@/components/ResearchPapers";
import Magazines from "@/components/Magazines";
import Blogs from "@/components/Blogs";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { ScrollFadeIn } from "@/components/ui/ScrollFadeIn";
import { MouseTrail } from "@/components/ui/MouseTrail";

// Dynamically import ParticlesBackground with no SSR
const ParticlesBackground = dynamic(
  () => import("@/components/ParticlesBackground"),
  { ssr: false }
);

const Publications = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Visual Enhancements */}
      <MouseTrail />
      <ParticlesBackground />

      {/* Page Content */}
      <div className="max-w-7xl w-full relative z-10">
        {/* Floating Navigation */}
        <FloatingNav navItems={navItems} />

        {/* Publications Section Heading */}
        <section className="relative w-full py-32 text-center overflow-hidden mt-10">
          {/* Background Image from /public/images/publications-bg.jpg */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/publications.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"></div>
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
              My <span className="text-purple">Publications</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
              A collection of my research papers, blogs, and featured magazine
              articles.
            </p>
          </div>
        </section>

        {/* Research Papers */}
        <ScrollFadeIn>
          <ResearchPapers />
        </ScrollFadeIn>

        {/* Blogs */}
        <ScrollFadeIn>
          <Blogs />
        </ScrollFadeIn>

        {/* Magazines */}
        <ScrollFadeIn>
          <Magazines />
        </ScrollFadeIn>
      </div>
    </main>
  );
};

export default Publications;

