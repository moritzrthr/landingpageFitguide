import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useAudio } from '../hooks/useAudio'
import { useState } from 'react'

export default function HeroSection() {
  const { play } = useAudio()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      play('welcome')
    }, 2000)
  }

  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">A Smarter Way to Build Healthy Habits That Last</h1>
            <p className="text-xl mb-6">Your personal 24/7 assistant, powered by behavioral science, guiding you to a healthier, happier life.</p>
            <Button
              size="lg"
              variant="secondary"
              className="relative overflow-hidden group"
              onClick={handleClick}
              disabled={isLoading}
            >
              <span className="relative z-10">
                {isLoading ? 'Starting Your Journey...' : 'Let Me Guide You'}
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></span>
              {isLoading && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
              )}
            </Button>
          </div>
          <div className="mt-8 md:mt-0">
            <Image src="/hero-image.jpg" alt="Fitguide App Dashboard" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

