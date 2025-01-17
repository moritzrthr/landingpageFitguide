import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Fitguide</h3>
            <p className="text-gray-400">Your personal health coach, powered by AI.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Features</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-blue-400">FAQs</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">Email: info@fitguide.com</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="hover:text-blue-400">Facebook</Link>
              <Link href="#" className="hover:text-blue-400">Twitter</Link>
              <Link href="#" className="hover:text-blue-400">Instagram</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2025 Fitguide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

