import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
import Link from 'next/link'

function HeroSection() {
  return (
    <section className="flex items-center justify-center h-screen bg-cover bg-center dark:bg-black" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
        <Spotlight
        className="-top-36 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6 text-premiumWhite">Unlock Your Potential with Our Perfect Guidance</h1>
        <p className="text-xl mb-6">Our journey into software engineering starts here. With our step-by-step roadmaps</p>
        <p className="text-xl mb-6">learn the skills that matter most and become the developer you aspire to be.</p>
        <Button borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl">
          <Link href="/SignupPage">Get Started</Link>
        </Button>
      </div>
    </section>
  )
}

export default HeroSection
