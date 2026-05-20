"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link: string;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}
        className={cn(
          "fixed top-5 inset-x-0 z-[5000] mx-auto",
          "w-[92%] md:w-fit",
          "rounded-2xl border border-white/10",
          "bg-black/40 backdrop-blur-2xl",
          "shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
          "px-5 py-3",
          className
        )}
      >
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="
                relative
                px-5 py-2
                rounded-full
                text-sm
                font-medium
                text-neutral-200
                transition-all
                duration-300
                hover:text-white
                hover:bg-white/10
              "
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between gap-4">
          <span className="text-white text-sm font-medium">
            Navigation
          </span>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-white"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              top-24
              left-4
              right-4
              z-[4999]
              rounded-2xl
              border
              border-white/10
              bg-black/80
              backdrop-blur-xl
              p-4
              flex
              flex-col
              gap-2
              md:hidden
            "
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="
                  px-4 py-3
                  rounded-xl
                  text-neutral-200
                  hover:text-white
                  hover:bg-white/10
                  transition
                "
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
