"use client"

import { useState } from "react"

export default function CTA() {
  const [email, setEmail] = useState("")
  const [storeUrl, setStoreUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    // Basic validation
    if (!email || !storeUrl) {
      setMessage("Please fill in all required fields.")
      setIsSubmitting(false)
      return
    }

    // Validate Shopify URL format
    const shopifyUrlPattern = /^https?:\/\/(www\.)?[a-zA-Z0-9-]+\.myshopify\.com\/?.*$/
    if (!shopifyUrlPattern.test(storeUrl)) {
      setMessage("Please enter a valid Shopify store URL.")
      setIsSubmitting(false)
      return
    }

    const GOOGLE_SHEETS_API_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_URL

    try {
      const response = await fetch(GOOGLE_SHEETS_API_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, storeUrl }),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      setMessage("Thank you for joining our waitlist!")
      setEmail("")
      setStoreUrl("")
    } catch (error) {
      console.error("Error:", error)
      setMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-indigo-700 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Join our Waitlist</h2>
          <p className="mt-4 text-lg text-indigo-200">
            Be the first to know when we launch. Sign up for exclusive early access.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 sm:flex">
          <div className="min-w-0 flex-1 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email (required)"
              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-indigo-700"
            />
            <input
              type="url"
              required
              value={storeUrl}
              onChange={(e) => setStoreUrl(e.target.value)}
              placeholder="Your Shopify store URL (required)"
              pattern="https?:\/\/(www\.)?[a-zA-Z0-9-]+\.myshopify\.com\/?.*$"
              title="Please enter a valid Shopify store URL (e.g., https://your-store.myshopify.com)"
              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-indigo-700"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:px-10 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Join Waitlist"}
            </button>
          </div>
        </form>
        {message && <p className="mt-4 text-center text-lg text-white">{message}</p>}
      </div>
    </section>
  )
}

