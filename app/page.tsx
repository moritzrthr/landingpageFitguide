'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import FeaturesFlow from './components/FeaturesFlow'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import StatsSection from './components/StatsSection'
import HowItWorks from './components/HowItWorks'
import UniqueFeatures from './components/UniqueFeatures'
import TrustedBy from './components/TrustedBy'
import Testimonials from './components/Testimonials'
import FAQs from './components/FAQs'
import CallToValue from './components/CallToValue'
import Footer from './components/Footer'
import ScrollSound from './components/ScrollSound'

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            <HeroSection onStart={() => setShowContent(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ScrollSound>
              <Navbar />
              <main>
                <FeaturesFlow />
                <ProblemSection />
                <SolutionSection />
                <StatsSection />
                <HowItWorks />
                <UniqueFeatures />
                <TrustedBy />
                <Testimonials />
                <FAQs />
                <CallToValue />
              </main>
              <Footer />
            </ScrollSound>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

