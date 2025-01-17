'use client'

import HeroSection from './components/HeroSection'
import SocialProof from './components/SocialProof'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import StatsSection from './components/StatsSection'
import HowItWorks from './components/HowItWorks'
import UniqueFeatures from './components/UniqueFeatures'
import Testimonials from './components/Testimonials'
import FAQs from './components/FAQs'
import CallToValue from './components/CallToValue'
import ScrollSound from './components/ScrollSound'

export default function Home() {
  return (
    <ScrollSound>
      <HeroSection />
      <SocialProof />
      <ProblemSection />
      <SolutionSection />
      <StatsSection />
      <HowItWorks />
      <UniqueFeatures />
      <Testimonials />
      <FAQs />
      <CallToValue />
    </ScrollSound>
  )
}

