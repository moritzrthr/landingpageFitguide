import Image from 'next/image'

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700"> What our users say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image src="/feedback2.png" alt="Tom" width={64} height={64} className="rounded-full mb-4" />
              <p className="text-gray-600 mb-2">"It’s so easy to use, and I love tracking progress without much effort."</p>
              <p className="text-gray-600 mb-2 font-bold">- Tom, 16</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image src="/feedback1.png" alt="Sarah" width={64} height={64} className="rounded-full mb-4" />
              <p className="text-gray-600 mb-2">"I finally feel in control of my health, and it feels so natural!"</p>
              <p className="text-gray-600 mb-2 font-bold">- Sarah, 32</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image src="/feedback3.png" alt="Liam" width={64} height={64} className="rounded-full mb-4" />
              <p className="text-gray-600 mb-2">"It’s like having a coach in my pocket. Super helpful for school life!"</p>
              <p className="text-gray-600 mb-2 font-bold">- Liam, 18</p>
            </div>
    </div>

      </div>
    </section>
  )
}

