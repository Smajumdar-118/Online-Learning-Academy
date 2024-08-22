



// src/components/Navbar.tsx

"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HiMenu } from "react-icons/hi"; // Importing a Hamburger icon
import MobileNavbar from "@/components/ui/mobile-navbar";

function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 my-5" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false); // State to handle the mobile menu

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-2xl", className)}>
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-lg">
              <HoveredLink href="/courses/1">Web Development</HoveredLink>
              <HoveredLink href="/courses/2">Interface Design</HoveredLink>
              <HoveredLink href="/courses/3">SEO</HoveredLink>
              <HoveredLink href="/userProfile">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/sayan">Hobby</HoveredLink>
              <HoveredLink href="/sayan">Individual</HoveredLink>
              <HoveredLink href="/sayan">Team</HoveredLink>
              <HoveredLink href="/sayan">Enterprise</HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/Contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us" />
          </Link>
          <Link href={"/Globe"}>
            <MenuItem setActive={setActive} active={active} item="Services" />
          </Link>
        </Menu>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="block md:hidden">
        <HiMenu
          className="text-black dark:text-white text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && <MobileNavbar setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}

export default NavbarDemo;
