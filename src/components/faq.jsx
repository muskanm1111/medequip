import Image from "next/image";
import React from "react";

const Faq = () => {
  return (
    <div className="mt-20 md:mt-40 mb-16">
      <h2 className="md:text-5xl text-5xl text-center mx-auto w-full mb-4 text-blue-950">
       FAQ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mx-auto max-w-6xl ">
        <div className="p-4 md:p-6 rounded-lg space-y-4 order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-blue-950 font-bold">
            Healing Harmony Uniting Care and Compassion
          </h1>
          <div className="space-y-4 mt-6">
            <h2 className="text-lg font-semibold bg-white rounded-2xl p-4 md:p-5 shadow-sm">
              How your path to ultimate wellness begins
            </h2>
            <h2 className="text-lg font-semibold bg-white rounded-2xl p-4 md:p-5 shadow-sm">
              What treatments are right for your condition
            </h2>
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Last mile delivery</h2>
              <p className="text-gray-700">
                Et purus duis sollicitudin dignissim habitant. Egestas nulla
                quis venenatis cras sed eu massa eu faucibus. Urna fusce Et
                purus duis sollicitudin dignissim habitant.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 md:p-6 rounded-lg order-1 md:order-2">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/img/ask-question.png"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="FAQ illustration"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
