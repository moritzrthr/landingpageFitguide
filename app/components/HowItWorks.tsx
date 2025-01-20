import { MessageSquare, Lightbulb, TrendingUp } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">Your Journey in 3 Easy Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <MessageSquare className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Step 1</h3>
            <p className="text-center text-gray-600">Tell us about your goals in a natural conversation</p>
          </div>
          <div className="flex flex-col items-center">
            <Lightbulb className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Step 2</h3>
            <p className="text-center text-gray-600">Get hyper-personalized suggestions tailored to your life</p>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="w-16 h-16 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Step 3</h3>
            <p className="text-center text-gray-600">See progress and adjust as you grow</p>
          </div>
        </div>
      </div>
    </section>
  )
}

