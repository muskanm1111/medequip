import React from "react";

const pricecard = [
  {
    title: "Basic",
    price: "$99",
    isPopular: false,
    features: [
      "Mistakes To Avoid",
      "Your Startup",
      "Knew About Fonts",
      "Knew About Fonts",
    ],
  },
  {
    title: "Professional",
    price: "$199",
    isPopular: true,
    features: [
      "Mistakes To Avoid",
      "Your Startup",
      "Knew About Fonts",
      "Knew About Fonts",
    ],
  },
  {
    title: "Enterprise",
    price: "$299",
    isPopular: false,
    features: [
      "Mistakes To Avoid",
      "Your Startup",
      "Knew About Fonts",
      "Knew About Fonts",
    ],
  },
];

const Ratecard = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-center mx-auto w-full mb-4">
            Cost Breakdown Summary
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core
            features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricecard.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden border-blue-300 border ${card.isPopular}`}
            >
              <div className="p-8 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {card.price}
                  </span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>

                <div className="border-t border-gray-100 pt-6 pb-6">
                  <ul className="space-y-4">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-500 mr-3 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    card.isPopular
                      ? "bg-sky-400 text-white hover:bg-sky-600"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Read More +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ratecard;
