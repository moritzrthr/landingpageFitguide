"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAudio } from "../hooks/useAudio"

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
    <div className="fixed inset-0 bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center z-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Your Personal Health Revolution Starts Here</h1>
        <p className="text-xl text-white mb-8">Forget resolutions, start realizing goals with FitGuide</p>
        <Button
          onClick={handleStart}
          disabled={isLoading}
          className="bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg px-8 py-3 rounded-full text-lg font-semibold"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Welcome
            </span>
          ) : (
            "Start Now"
          )}
        </Button>
      </div>
    </div>
  )
}

