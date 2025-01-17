'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useAudio } from '../hooks/useAudio'
import { motion, AnimatePresence } from 'framer-motion'

interface HeroSectionProps {
  onStart: () => void;
}

export default function HeroSection({ onStart }: HeroSectionProps) {
  const { play } = useAudio()
  const [isLoading, setIsLoading] = useState(false)
  const [showFullContent, setShowFullContent] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowFullContent(true)
      play('welcome')
      onStart()
    }, 2000)
  }

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spacy background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/stars-bg.jpg')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence>
          {!showFullContent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
                Ready to Transform Your Life?
              </h1>
              <Button
                size="lg"
                variant="secondary"
                className="relative overflow-hidden group text-xl py-6 px-12"
                onClick={handleClick}
                disabled={isLoading}
              >
                <span className="relative z-10">
                  {isLoading ? 'Preparing Your Journey...' : 'Start Your Fitguide Adventure'}
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></span>
                {isLoading && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                )}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showFullContent && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">A Smarter Way to Build Healthy Habits That Last</h1>
              <p className="text-xl mb-6">Your personal 24/7 assistant, powered by behavioral science, guiding you to a healthier, happier life.</p>
              <div className="mt-8 md:mt-0">
                <Image src="/hero-image.jpg" alt="Fitguide App Dashboard" width={800} height={450} className="rounded-lg shadow-lg mx-auto" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

