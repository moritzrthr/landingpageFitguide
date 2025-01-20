import { Sparkles, MessageCircle, BarChart } from 'lucide-react'

export default function SolutionSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
          Meet Fitguide – Your 24/7 Personal Health Coach
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">Hyper-personalized, science-backed, and always by your side</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Sparkles className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Habit Suggestions</h3>
            <p className="text-gray-600">Micro-habits that seamlessly fit into your daily routine</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MessageCircle className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Motivation and guidance whenever you need it</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BarChart className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">See measurable results and stay on track effortlessly</p>
          </div>
        </div>
      </div>
    </section>
  )
}

