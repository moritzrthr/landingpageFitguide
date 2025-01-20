import { Button } from '@/components/ui/button'
import { useAudio } from '../hooks/useAudio'
import { Mail } from "lucide-react"

export default function CallToValue() {
  const { play } = useAudio()


  const handleButtonClick = () => {
    play("MVP")
    
    console.log('Button clicked!')
    window.location.href = "mailto:fitguide@thamori.com?subject=Question%20about%20Fitguide"
  
  }


  return (
    play('cta'),
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Health Transformation Today</h2>
        <p className="text-xl mb-8">Your personalized journey is just a click away. Take the first step toward a healthier you.</p>
        <Button onClick={handleButtonClick} size="lg" variant="secondary">Start Free Trial Now</Button>
      </div>
    </section>
  )
}

