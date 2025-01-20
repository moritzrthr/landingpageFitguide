"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useAudio } from "../hooks/useAudio"
import dynamic from "next/dynamic"

const DynamicBackground = dynamic(() => import("./DynamicBackground"), { ssr: false })

export default function WelcomeOverlay() {
  const [isVisible, setIsVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const { play } = useAudio()

  const handleStart = () => {
    setIsLoading(true)
    play("welcome")
    setTimeout(() => {
      setIsVisible(false)
    }, 2000) // Adjust this value to match your audio duration
  }

  if (!isVisible) return null
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
        >
          {/* Animierter Hintergrund mit Kreis */}
          <DynamicBackground />
          
          <div className="text-center z-10">
            {/* Titel mit Animation */}
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Your Personal Health Revolution Starts Here.
            </motion.h1>

            {/* Untertitel mit Animation */}
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl text-cyan-300 mb-8"
            >
              Forget resolutions, start realizing goals with FitGuide
            </motion.p>

            {/* "Start Now" Button mit Animation */}
            <motion.button
              onClick={handleStart}
              disabled={isLoading}
              className="relative px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">
                {isLoading ? "Starting..." : "Start Now"}
              </span>
              
              {/* Hintergrundanimation für den Button */}
              <motion.div
                className="absolute inset-0 bg-white opacity-25"
                initial={{ scale: 0, opacity: 0 }}
                animate={isLoading ? { scale: 20, opacity: 0.3 } : { scale: 1, opacity: 0 }}
                transition={{ duration: 1 }}
              />
              
              {/* Gradient-Effekt mit Blur */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
                style={{ filter: "blur(15px)" }}
              />
            </motion.button>
          </div> 
        </motion.div>)}
    </AnimatePresence>
      )
}

