import { Volume2, VolumeX } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface AudioIndicatorProps {
  isPlaying: boolean
  onToggle: () => void
}

export function AudioIndicator({ isPlaying, onToggle }: AudioIndicatorProps) {
  const [isMuted, setIsMuted] = useState(false)

  const handleToggle = () => {
    setIsMuted(!isMuted)
    onToggle()
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 right-4 z-50 rounded-full"
            onClick={handleToggle}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className={`h-4 w-4 ${isPlaying ? 'animate-pulse' : ''}`} />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isMuted ? 'Unmute audio' : 'Mute audio'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

