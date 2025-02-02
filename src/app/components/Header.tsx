"use client"

import Link from "next/link"

export default function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-[#FDF6E3] shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-black lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Commerce</span>
              <img className="h-10 w-auto" src="/logo-light.png" alt="Logo" />
            </Link>
          </div>
          <div className="ml-10 space-x-8">
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-base font-medium text-black hover:text-gray-600"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="text-base font-medium text-black hover:text-gray-600"
            >
              Pricing
            </a>
            <a 
              href="#cta" 
              onClick={(e) => scrollToSection(e, 'cta')}
              className="text-base font-medium text-black hover:text-gray-600"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
