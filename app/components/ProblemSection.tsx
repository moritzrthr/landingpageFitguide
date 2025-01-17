import { Clock, Brain, Compass } from 'lucide-react'
import { useAudio } from '../hooks/useAudio'

export default function ProblemSection() {
  const { play } = useAudio()
  return (
    play('notAlone'),
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Struggling to Stay Consistent with Healthy Habits?</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Life is busy, motivation fades, and generic solutions just don't work.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Clock className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lack of Time</h3>
            <p className="text-center text-gray-600">Overwhelming advice and no clear direction</p>
          </div>
          <div className="flex flex-col items-center">
            <Brain className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Difficulty in Creating Habits</h3>
            <p className="text-center text-gray-600">Struggle to make lasting changes</p>
          </div>
          <div className="flex flex-col items-center">
            <Compass className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Clear Path</h3>
            <p className="text-center text-gray-600">Lack of personalized guidance</p>
          </div>
        </div>
      </div>
    </section>
  )
}

