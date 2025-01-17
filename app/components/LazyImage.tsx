import Image from 'next/image'
import { useInView } from '../hooks/useInView'

interface LazyImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export default function LazyImage({ src, alt, width, height }: LazyImageProps) {
  const [ref, isInView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  })

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {isInView && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
        />
      )}
    </div>
  )
}

