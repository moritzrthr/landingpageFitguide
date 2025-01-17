import Image from 'next/image'

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Hear From Our Happy Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image src="/placeholder.svg" alt="Sarah" width={64} height={64} className="rounded-full mb-4" />
            <p className="text-gray-600 mb-2">"I finally feel in control of my health, and it feels so natural!"</p>
            <p className="font-bold">- Sarah, 32</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image src="/placeholder.svg" alt="John" width={64} height={64} className="rounded-full mb-4" />
            <p className="text-gray-600 mb-2">"Fitguide has made staying healthy fun and easy. I'm hooked!"</p>
            <p className="font-bold">- John, 45</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image src="/placeholder.svg" alt="Emily" width={64} height={64} className="rounded-full mb-4" />
            <p className="text-gray-600 mb-2">"The personalized approach is a game-changer. Highly recommend!"</p>
            <p className="font-bold">- Emily, 28</p>
          </div>
        </div>
      </div>
    </section>
  )
}

