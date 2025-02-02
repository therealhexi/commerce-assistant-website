import Header from "./components/Header"
import Hero from "./components/Hero"
import CTA from "./components/CTA"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Demo from "./components/Demo"
import Pricing from "./components/Pricing"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Demo />
        <CTA />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
