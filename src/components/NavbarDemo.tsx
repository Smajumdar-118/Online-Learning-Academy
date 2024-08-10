"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 my-5" />
      <p className="text-black dark:text-white">
      </p>
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-2xl", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>

        
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-lg">
            <HoveredLink href="/courses/1">Web Development</HoveredLink>
            <HoveredLink href="/courses/2">Interface Design</HoveredLink>
            <HoveredLink href="/courses/3">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/courses/4">Branding</HoveredLink>
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
        <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
        </Link>
        <Link href={"/Globe"}>
        <MenuItem setActive={setActive} active={active} item="Services"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}


export default NavbarDemo
