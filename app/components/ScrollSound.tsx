'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useAudio } from '../hooks/useAudio'
import { AudioIndicator } from './AudioIndicator'

interface ScrollSoundProps {
  children: React.ReactNode
}

export default function ScrollSound({ children }: ScrollSoundProps) {
  const { play, stop, stopAll, isPlaying } = useAudio()
  const [isMuted, setIsMuted] = useState(false)
  const sectionsRef = useRef<{ [key: string]: HTMLElement }>({})

  useEffect(() => {
    const handleScroll = () => {
      if (isMuted) return

      const scrollPosition = window.scrollY + window.innerHeight / 2

      Object.entries(sectionsRef.current).forEach(([key, element]) => {
        const { top, bottom } = element.getBoundingClientRect()
        if (scrollPosition >= top && scrollPosition <= bottom) {
          play(key)
        } else {
          stop(key)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [play, stop, isMuted])

  const registerSection = (key: string, element: HTMLElement | null) => {
    if (element) {
      sectionsRef.current[key] = element
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (!isMuted) {
      stopAll()
    }
  }

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { ref: (el: HTMLElement | null) => registerSection(child.type.name, el) })
        }
        return child
      })}
      <AudioIndicator isPlaying={Object.values(isPlaying).some(Boolean)} onToggle={toggleMute} />
    </>
  )
}

