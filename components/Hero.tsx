import { FaLocationArrow, FaEnvelope } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div id="about" className="py-12 md:py-16 lg:py-20 mt-20">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-20 -left-10 md:-left-20 h-[60vh]"
          fill="white"
        />
        <Spotlight
          className="h-[50vh] w-[40vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-20 h-[50vh] w-[40vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-[70vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[85vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center space-y-6">
          <h1 className="heading text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Welcome to My Portfolio
          </h1>

          <p className="text-center text-lg md:text-xl text-purple-400 font-medium">
            "Aspiring data wizard turning chaos into clarity."
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="A visionary who uncovers hidden problems and crafts mind-blowing solutions."
            className="text-center text-2xl md:text-3xl lg:text-4xl text-purple-600 font-bold leading-tight"
          />

          <p className="text-center md:tracking-wider text-sm md:text-base lg:text-lg text-gray-300">
            Hi! I&apos;m Avaneesh Karthikeyan, an Aspiring Data Scientist.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="/Avaneesh_Iyer_Resume.pdf" download>
              <MagicButton
                title="Download my Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="mailto:avaneesh.karthik@gmail.com?subject=Let's get in touch">
              <MagicButton
                title="Let's get in touch"
                icon={<FaEnvelope />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
