"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeroSection from "./components/HeroSection"
import SocialProof from "./components/SocialProof"
import ProblemSection from "./components/ProblemSection"
import SolutionSection from "./components/SolutionSection"
import StatsSection from "./components/StatsSection"
import HowItWorks from "./components/HowItWorks"
import UniqueFeatures from "./components/UniqueFeatures"
import Testimonials from "./components/Testimonials"
import FAQs from "./components/FAQs"
import CallToValue from "./components/CallToValue"
import ScrollSound from "./components/ScrollSound"
import WelcomeOverlay from "./components/WelcomeOverlay"

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2000) // This should match the duration in WelcomeOverlay

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <WelcomeOverlay />
      {showContent && (
        <ScrollSound>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <StatsSection />
          <HowItWorks />
          <UniqueFeatures />
          <Testimonials />
          <FAQs />
          <CallToValue />
        </ScrollSound>
      )}
    </>
  )
}

