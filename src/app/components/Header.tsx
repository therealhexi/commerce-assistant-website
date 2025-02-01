import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src="/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="ml-10 space-x-4">
            <Link href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Features
            </Link>
            <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

