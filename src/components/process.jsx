import React from "react";

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Select Your Equipment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      number: "2",
      title: "Choose Your Rental Plan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      number: "3",
      title: "Delivery and Support System",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="   lg:h-[180vh]  px-4 md:px-16 lg:px-2 py-20 ">
      <div className="max-w-7xl mx-auto">
        {/* Image Container */}
        <div className="relative bg-violet-400 rounded-xl md:rounded-[80px]">
          <div className="border-[12px] md:border-[24px] border-violet-400 rounded-xl md:rounded-[80px] overflow-hidden">
            <img
              src="/img/big.jpg"
              alt="Construction Equipment"
              className="w-full h-auto object-cover aspect-[9/16] lg:aspect-auto rounded-xl md:rounded-[80px]"
            />
          </div>
          {/* Info Box */}
          <div className="absolute bottom-1/2 lg:bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-lg rounded-lg p-8  w-[90%] lg:w-5/6">
            <h4 className="text-xs md:text-sm uppercase text-gray-500 font-semibold text-center">
              How It Works
            </h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mt-2">
              How Our{" "}
              <span className="text-violet-500 italic">Rental Process</span>{" "}
              Works
            </h2>
            {/* Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8  mt-6">
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm  relative ">
                <div className="bg-violet-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  1
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                  Select Your Equipment
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg p-6 border border-violet-200 shadow-sm relative">
                <div className="bg-violet-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  2
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                  Choose Your Rental Plan
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm relative">
                <div className="bg-violet-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  3
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                  Delivery and Support System
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
