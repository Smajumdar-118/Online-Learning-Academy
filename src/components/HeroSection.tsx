import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (
    <section className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
        <Spotlight
        className="-top-56 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6 text-premiumWhite">Unlock Your Potential with Our Online Learning Platform</h1>
        <p className="text-xl mb-6">Learn new skills from the comfort of your home</p>
        <p className="text-xl mb-6">Join a community of learners and achieve your goals with our expert-led online classes</p>
        <Button borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl">
          Get Started
        </Button>
      </div>
    </section>
  )
}

export default HeroSection
