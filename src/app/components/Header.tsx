"use client"

import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-[#F7DC6F] shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-black lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Commerce</span>
              <Image
                src="/logo-light.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-auto h-10"
                priority
              />
            </Link>
          </div>
          <div className="ml-10 space-x-8">
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-lg text-black hover:text-gray-700 px-4 py-2 transition-all duration-200 hover:bg-black hover:text-white rounded-md"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="text-lg text-black hover:text-gray-700 px-4 py-2 transition-all duration-200 hover:bg-black hover:text-white rounded-md"
            >
              Pricing
            </a>
            <a
              href="#cta"
              onClick={(e) => scrollToSection(e, 'cta')}
              className="text-lg text-black hover:text-gray-700 px-4 py-2 transition-all duration-200 hover:bg-black hover:text-white rounded-md"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
