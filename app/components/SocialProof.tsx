import Image from 'next/image'

export default function SocialProof() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Trusted by Thousands of Users to Achieve Their Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src="/placeholder.svg" alt="User" width={64} height={64} className="rounded-full mb-4" />
            <p className="text-gray-600 mb-2">"Fitguide completely transformed how I approach my health. The personalization is unmatched!"</p>
            <p className="font-bold">- Sarah Johnson</p>
          </div>
          {/* Add more testimonials here */}
        </div>
        <div className="mt-12 flex justify-center space-x-8">
          <Image src="/placeholder.svg" alt="Partner Logo" width={100} height={50} />
          <Image src="/placeholder.svg" alt="Partner Logo" width={100} height={50} />
          <Image src="/placeholder.svg" alt="Partner Logo" width={100} height={50} />
        </div>
      </div>
    </section>
  )
}

