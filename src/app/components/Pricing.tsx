import Link from 'next/link'

export default function Pricing() {
  return (
    <div id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase text-yellow-400">Pricing</h2>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose your plan
          </h2>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Free Plan */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 lg:rounded-l-3xl">
            <h3 className="text-lg font-semibold leading-8 text-gray-900">Free</h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">Perfect for trying out our service</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">$0</span>
              <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
            </p>
            <Link
              href="#"
              className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-black bg-yellow-400 hover:bg-yellow-500"
            >
              <span className="font-bold text-base">Get Started for Free</span>
            </Link>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Up to 10 API calls per day
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Basic store management
              </li>
            </ul>
          </div>

          {/* Starter Plan */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 lg:rounded-none">
            <h3 className="text-lg font-semibold leading-8 text-gray-900">Starter</h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">Great for small businesses</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">$2.99</span>
              <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
            </p>
            <Link
              href="#"
              className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-black ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
            >
              Subscribe to Starter
            </Link>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Up to 100 API calls per day
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Advanced store management
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Priority support
              </li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 lg:rounded-r-3xl">
            <h3 className="text-lg font-semibold leading-8 text-gray-900">Pro</h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">For power users and large stores</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">$5.99</span>
              <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
            </p>
            <Link
              href="#"
              className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-black ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
            >
              Subscribe to Pro
            </Link>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Unlimited API calls
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Premium features
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                24/7 priority support
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Custom integrations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
