export default function StatsSection() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Science That Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <p className="text-5xl font-bold mb-2">93%</p>
            <p className="text-xl">of users reported healthier habits within the first month</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-2">80%</p>
            <p className="text-xl">found it easier to stay consistent compared to other solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}

