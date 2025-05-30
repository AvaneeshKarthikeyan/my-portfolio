import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import { motion } from "framer-motion";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};


export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  // dynamic tech lists based on id
  const techStacks: Record<number, string[]> = {
    3: ["ReactJS", "Express", "TypeScript", "GraphQL"],
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  const handleCopy = () => {
    const email = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // dynamic background colors for card
  const bgGradient =
    {
      1: "bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900",
      2: "bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900",
      3: "bg-gradient-to-br from-red-900 via-rose-900 to-pink-900",
      6: "bg-gradient-to-br from-yellow-900 via-amber-900 to-orange-900",
    }[id] || "bg-[#041d44]";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.1] shadow-lg",
        bgGradient,
        className
      )}
    >
      {/* Image backdrop */}
      {img && (
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.3 }}
          className="absolute inset-0"
        >
          <img
            src={img}
            alt={`${title} image`}
            className={cn(imgClassName, "w-full h-full object-cover")}
          />
        </motion.div>
      )}

      {/* Spare image layer */}
      {spareImg && (
        <div className="absolute bottom-0 right-0 w-1/2 opacity-80 pointer-events-none">
          <img src={spareImg} alt="decor" className="object-contain w-full" />
        </div>
      )}

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col h-full p-6 space-y-4">
        <div
          className={cn(
            titleClassName,
            "text-sm md:text-base lg:text-lg text-gray-200 font-light"
          )}
        >
          {description}
        </div>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
          {title}
        </h3>

        {/* Dynamic tech stack tags */}
        {techStacks[id] && (
          <div className="flex flex-wrap gap-2">
            {techStacks[id].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/[0.15] rounded-md text-xs text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* 3D Globe for id=2 */}
        {id === 2 && <GridGlobe />}

        {/* Lottie & Copy Button for id=6 */}
        {id === 6 && (
          <div className="mt-auto flex items-center gap-4">
            <Lottie options={defaultOptions} height={80} width={80} />
            <MagicButton
              title={copied ? "Copied!" : "Copy Email"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="bg-white/[0.2] text-white"
            />
          </div>
        )}
      </div>

      {/* Background animation for special card */}
      {id === 6 && <BackgroundGradientAnimation />}
    </motion.div>
  );
};
