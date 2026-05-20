"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        className={cn(
          "fixed top-4 inset-x-0 z-[5000] mx-auto",
          "w-[95%] md:w-auto",
          "px-4 sm:px-6 md:px-8 py-3",
          "rounded-2xl border border-white/10",
          "backdrop-blur-xl bg-[rgba(17,25,40,0.75)]",
          "shadow-[0_8px_32px_rgba(0,0,0,0.25)]",
          "flex items-center justify-between",
          className
        )}
      >
        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-2 md:gap-4">
          {navItems.map((navItem, idx) => {
            const isActive = pathname === navItem.link;

            return (
              <Link
                key={`nav-${idx}`}
                href={navItem.link}
                className={cn(
                  "px-3 py-2 rounded-full text-sm transition-all duration-300",
                  isActive
                    ? "text-blue-400 bg-white/5"
                    : "text-white hover:text-blue-300 hover:bg-white/5"
                )}
              >
                {navItem.name}
              </Link>
            );
          })}

          {/* Divider */}
          <div className="mx-2 h-5 w-px bg-white/10" />

          {/* GitHub */}
          <a
            href="https://github.com/Avaneesh-Karthikeyan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white hover:text-blue-300 transition"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/avaneesh-karthikeyan-iyer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white hover:text-blue-300 transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile */}
        <div className="flex sm:hidden w-full justify-between items-center">
          <span className="text-white text-sm font-semibold">
            Navigation
          </span>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 18,
            }}
            className="fixed top-20 left-4 right-4 z-[4999]
              rounded-2xl
              border border-white/10
              bg-[rgba(17,25,40,0.92)]
              backdrop-blur-xl
              p-4
              flex flex-col gap-3
              sm:hidden"
          >
            {navItems.map((navItem, idx) => (
              <Link
                key={`mobile-${idx}`}
                href={navItem.link}
                onClick={() => setMenuOpen(false)}
                className="text-white px-4 py-2 rounded-lg hover:bg-white/10 transition"
              >
                {navItem.name}
              </Link>
            ))}

            <div className="border-t border-white/10 pt-3 flex gap-4">
              <a
                href="https://github.com/Avaneesh-Karthikeyan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/avaneesh-karthikeyan-iyer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
