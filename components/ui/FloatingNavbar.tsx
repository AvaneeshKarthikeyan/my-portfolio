// // "use client";
// // import React, { useState } from "react";
// // import {
// //   motion,
// //   AnimatePresence,
// //   useScroll,
// //   useMotionValueEvent,
// // } from "framer-motion";
// // import Link from "next/link";
// // import { cn } from "@/lib/utils";

// // export const FloatingNav = ({
// //   navItems,
// //   className,
// // }: {
// //   navItems: {
// //     name: string;
// //     link: string;
// //     icon?: JSX.Element;
// //   }[];
// //   className?: string;
// // }) => {
// //   const { scrollYProgress } = useScroll();

// //   // set true for the initial state so that nav bar is visible in the hero section
// //   const [visible, setVisible] = useState(true);

// //   useMotionValueEvent(scrollYProgress, "change", (current) => {
// //     // Check if current is not undefined and is a number
// //     if (typeof current === "number") {
// //       let direction = current! - scrollYProgress.getPrevious()!;

// //       if (scrollYProgress.get() < 0.05) {
// //         // also set true for the initial state
// //         setVisible(true);
// //       } else {
// //         if (direction < 0) {
// //           setVisible(true);
// //         } else {
// //           setVisible(false);
// //         }
// //       }
// //     }
// //   });

// //   return (
// //     <AnimatePresence mode="wait">
// //       <motion.div
// //         initial={{
// //           opacity: 1,
// //           y: -100,
// //         }}
// //         animate={{
// //           y: visible ? 0 : -100,
// //           opacity: visible ? 1 : 0,
// //         }}
// //         transition={{
// //           duration: 0.2,
// //         }}
// //         className={cn(
// //           // change rounded-full to rounded-lg
// //           // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
// //           // change  pr-2 pl-8 py-2 to px-10 py-5
// //           "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
// //           className
// //         )}
// //         style={{
// //           backdropFilter: "blur(16px) saturate(180%)",
// //           backgroundColor: "rgba(17, 25, 40, 0.75)",
// //           borderRadius: "12px",
// //           border: "1px solid rgba(255, 255, 255, 0.125)",
// //         }}
// //       >
// //         {navItems.map((navItem: any, idx: number) => (
// //           <Link
// //             key={`link=${idx}`}
// //             href={navItem.link}
// //             className={cn(
// //               "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
// //             )}
// //           >
// //             <span className="block sm:hidden">{navItem.icon}</span>
// //             {/* add !cursor-pointer */}
// //             {/* remove hidden sm:block for the mobile responsive */}
// //             <span className=" text-sm !cursor-pointer">{navItem.name}</span>
// //           </Link>
// //         ))}
// //         {/* remove this login btn */}
// //         {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
// //           <span>Login</span>
// //           <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
// //         </button> */}
// //       </motion.div>
// //     </AnimatePresence>
// //   );
// // };

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();
//   const [visible, setVisible] = useState(false);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useMotionValueEvent(scrollYProgress, "change", () => {
//     // Clear any previous timeout to avoid multiple triggers
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     // Show nav immediately when scrolling
//     setVisible(true);

//     // Set a timeout to hide nav after 500ms of no scrolling
//     timeoutRef.current = setTimeout(() => {
//       setVisible(false);
//     }, 2000); // you can tweak 500ms to faster/slower
//   });

//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 0,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.3,
//         }}
//         className={cn(
//           "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
//           className
//         )}
//         style={{
//           backdropFilter: "blur(16px) saturate(180%)",
//           backgroundColor: "rgba(17, 25, 40, 0.75)",
//           borderRadius: "12px",
//           border: "1px solid rgba(255, 255, 255, 0.125)",
//         }}
//       >
//         {navItems.map((navItem, idx) => (
//           <Link
//             key={`link=${idx}`}
//             href={navItem.link}
//             className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
//           >
//             <span className="block sm:hidden">{navItem.icon}</span>
//             <span className="text-sm !cursor-pointer">{navItem.name}</span>
//           </Link>
//         ))}
//       </motion.div>
//     </AnimatePresence>
//   );
// };




"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [highlighted, setHighlighted] = useState<string | null>(null);

  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const highlightTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Show nav on scroll, and fade it after delay
  useMotionValueEvent(scrollYProgress, "change", () => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    setVisible(true);
    hideTimeoutRef.current = setTimeout(() => {
      if (!menuOpen) setVisible(false);
    }, 2000);
  });

  // Clear timers on unmount
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      if (highlightTimeoutRef.current)
        clearTimeout(highlightTimeoutRef.current);
    };
  }, []);

  const handleLinkClick = (link: string) => {
    setHighlighted(link);
    setMenuOpen(false);

    if (highlightTimeoutRef.current) clearTimeout(highlightTimeoutRef.current);
    highlightTimeoutRef.current = setTimeout(() => {
      setHighlighted(null);
    }, 3000); // highlight fade time
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed top-4 inset-x-0 z-[5000] mx-auto px-4 sm:px-6 md:px-10 py-3 md:py-5 rounded-lg border border-white/10 shadow-md backdrop-blur-md bg-[rgba(17,25,40,0.75)] flex items-center justify-between max-w-[95vw] md:max-w-fit",
            className
          )}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {/* Desktop menu */}
          <div className="hidden sm:flex items-center space-x-4">
            {navItems.map((navItem, idx) => {
              const isActive =
                pathname === navItem.link || highlighted === navItem.link;
              return (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  onClick={() => handleLinkClick(navItem.link)}
                  className={cn(
                    "px-3 py-1 text-sm rounded-full transition",
                    isActive
                      ? "text-blue-400 underline underline-offset-4"
                      : "text-white hover:text-blue-300"
                  )}
                >
                  {navItem.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden w-full justify-between items-center">
            <span className="text-white text-sm font-semibold ml-2">Menu</span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-white"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-[4999] bg-[rgba(17,25,40,0.9)] rounded-xl p-4 flex flex-col space-y-3 backdrop-blur-md border border-white/10 sm:hidden"
          >
            {navItems.map((navItem, idx) => {
              const isActive =
                pathname === navItem.link || highlighted === navItem.link;
              return (
                <Link
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  onClick={() => handleLinkClick(navItem.link)}
                  className={cn(
                    "text-white px-4 py-2 rounded-md transition",
                    isActive ? "bg-blue-500/20" : "hover:bg-white/10"
                  )}
                >
                  {navItem.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
