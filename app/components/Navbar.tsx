"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAudio } from '../hooks/useAudio'
import { Button } from '@/components/ui/button'
import { Mail } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { play } = useAudio()

  const handleButtonClick = () => {
    play("MVP")
    
    console.log('Button clicked!')
    window.location.href = "mailto:fitguide@thamori.com?subject=Question%20about%20Fitguide"
  
  }
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image src="/Logo -1.png" alt="Fitguide Logo" width={78} height={31} className="mr-2" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Features
              </Link>
              <Link href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                How It Works
              </Link>
              <Link href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Testimonials
              </Link>
              <Link href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                FAQs
              </Link>
              <Link href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button onClick={handleButtonClick}>Get Started Today</Button>

          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-700 hover:bg-gray-50">
              Features
            </Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-700 hover:bg-gray-50">
              How It Works
            </Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-700 hover:bg-gray-50">
              Testimonials
            </Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-700 hover:bg-gray-50">
              FAQs
            </Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-700 hover:bg-gray-50">
              Contact
            </Link>
            <Button className="w-full">Get Started Today</Button>
          </div>
        </div>
      )}
    </nav>
  )
}