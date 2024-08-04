"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import Mentors from "./Mentors";

function OurMentors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex justify-center items-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col h-full items-center justify-center">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center mb-7">
        Our Professional Mentors
      </p>
      <Mentors />
    </WavyBackground>
    </div>
  )
}

export default OurMentors
