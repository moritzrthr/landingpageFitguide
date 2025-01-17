import { Button } from '@/components/ui/button'
import { useAudio } from '../hooks/useAudio'

export default function SoundButton({ children, ...props }: React.ComponentProps<typeof Button>) {
  const { play } = useAudio('/click.mp3')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    play()
    if (props.onClick) {
      props.onClick(event)
    }
  }

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  )
}

