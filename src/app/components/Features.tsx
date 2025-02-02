export default function Features() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
        <h2 className="text-base text-yellow-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Ask your ChatGPT or Claude to do anything for your store
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Complete a one-time setup to link your Shopify store
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {[
              {
                name: "Can you check my inventory for 'Alaska Salmon'?",
                description:
                  "I've identified you have 2 items left in the inventory for 'Alaska Salmon'. In the month of January 2025, you have sold 25 of 'Alaska Salmon'.",
              },
              {
                name: "Can you update the price of 'Alaska Salmon' to $20.00?",
                description:
                  "Of course! I have successfully updated the price of 'Alaska Salmon' from $18.00 to $20.00.",
              },
              {
                name: "Can you check the order status for customer 'John Doe' who purchased 'Premium Cheese'?",
                description:
                  "After searching for orders, I've found 1 order for 'John Doe' who purchased 'Premium Cheese'. The order is currently 'Paid' and has a total price of $35.00. The shipping status is 'In Transit'.",
              },
              {
                name: "Can you create a discount code 'PATRICK_SPENCER' with a 20% off of everything? Make it valid for 1 month.",
                description:
                  "Of course! I have successfully created a discount code 'PATRICK_SPENCER' with a 20% off of everything. It is valid for 1 month, until March 1st 2025.",
              },
            ].map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

