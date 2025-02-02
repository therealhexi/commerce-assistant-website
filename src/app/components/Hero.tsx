import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 text-center">
          <main className="mt-10 mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
                <span className="block">Your Shopify Store Assistant</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl">
                Manage your Shopify store through ChatGPT, Claude, or DeepSeek
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
