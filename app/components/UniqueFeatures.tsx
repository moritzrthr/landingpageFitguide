import { Music, Trophy, Users, RefreshCw } from 'lucide-react'
import { useAudio } from '../hooks/useAudio'

export default function UniqueFeatures() {
  const { play } = useAudio()
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Makes Fitguide Different?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Music className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Intrinsic Motivation</h3>
            <p className="text-gray-600">Triggers like your favorite music and stories</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Trophy className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gamification</h3>
            <p className="text-gray-600">Elements to make progress fun and engaging</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Social Accountability</h3>
            <p className="text-gray-600">Compare progress anonymously with similar users</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <RefreshCw className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
            <p className="text-gray-600">The system evolves as you do</p>
          </div>
        </div>
      </div>
    </section>
  )
}

