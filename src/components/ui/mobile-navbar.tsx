// src/components/ui/mobile-navbar.tsx

"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function MobileNavbar({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      className="fixed top-0 left-0 w-full h-full bg-white dark:bg-black z-50 p-8"
    >
      <button
        className="text-black dark:text-white text-3xl"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>
      <div className="flex flex-col items-start mt-8 space-y-6 text-xl text-premiumWhite">
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/courses/1" onClick={() => setIsOpen(false)}>Web Development</Link>
        <Link href="/courses/2" onClick={() => setIsOpen(false)}>Interface Design</Link>
        <Link href="/courses/3" onClick={() => setIsOpen(false)}>SEO</Link>
        <Link href="/courses/4" onClick={() => setIsOpen(false)}>Branding</Link>
        <Link href="/sayan" onClick={() => setIsOpen(false)}>Pricing</Link>
        <Link href="/Contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        <Link href="/Globe" onClick={() => setIsOpen(false)}>Services</Link>
      </div>
    </motion.div>
  );
}

export default MobileNavbar;
