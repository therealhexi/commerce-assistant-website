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
    <div id="cta" className="bg-[#FDF6E3] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">Join our Waitlist</h2>
          <p className="mt-4 text-lg text-gray-600">
            Be the first to know when we launch and get exclusive early access.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center">
          <div className="min-w-0 flex-1">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 rounded-md border border-black text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="min-w-0 flex-1 mt-3 sm:mt-0 sm:ml-3">
            <label htmlFor="storeUrl" className="sr-only">
              Store URL
            </label>
            <input
              type="url"
              name="storeUrl"
              id="storeUrl"
              value={storeUrl}
              onChange={(e) => setStoreUrl(e.target.value)}
              className="block w-full px-4 py-3 rounded-md border border-black text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm"
              placeholder="Your Shopify store URL"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="block w-full rounded-md px-4 py-3 border border-transparent text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:text-sm"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </button>
          </div>
        </form>
        {message && <p className="mt-4 text-center text-lg text-gray-600">{message}</p>}
      </div>
    </div>
  )
}
