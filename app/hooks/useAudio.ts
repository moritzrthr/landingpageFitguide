import { useEffect, useRef, useState } from 'react'

export function useAudio() {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({})
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    audioRefs.current = {
      welcome: new Audio('/audio/welcome.wav'),
      notAlone: new Audio('/audio/not alone.wav'),
      cta: new Audio('/audio/cta.wav'),
      benefit: new Audio('/audio/benefit.wav'),
    }

    return () => {
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause()
        audio.currentTime = 0
      })
    }
  }, [])

  const play = (key: string) => {
    const audio = audioRefs.current[key]
    if (audio) {
      audio.currentTime = 0
      audio.play()
      setIsPlaying(prev => ({ ...prev, [key]: true }))
      audio.onended = () => setIsPlaying(prev => ({ ...prev, [key]: false }))
    }
  }

  const stop = (key: string) => {
    const audio = audioRefs.current[key]
    if (audio) {
      audio.pause()
      audio.currentTime = 0
      setIsPlaying(prev => ({ ...prev, [key]: false }))
    }
  }

  const stopAll = () => {
    Object.keys(audioRefs.current).forEach(stop)
  }

  return { play, stop, stopAll, isPlaying }
}

