import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-blue-950">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              Nurture Nature Blossoming in Health and Happiness
            </h1>
            <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
              Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
              venenatis cras sed eu massa eu faucibus. Urna fusce Et purus duis
              sollicitudin dignissim habitant.
            </p>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">✔ Last mile delivery</h2>
              <h2 className="text-xl font-semibold">
                ✔ Fast and reliable services
              </h2>
              <h2 className="text-xl font-semibold">✔ Customer satisfaction</h2>
            </div>
          </div>

          {/* Image Content */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative bg-cover bg-center p-6 rounded-lg flex flex-col items-center justify-center bg-[url('/img/shape-big.png')]">
              <Image
                src="/img/about-us.jpg"
                width={200}
                height={200}
                alt="about"
                className="rounded-3xl shadow-lg"
              />
              <button className="mt-6 bg-white py-3 px-6 text-black rounded-2xl text-lg font-semibold shadow-md border">
                25 Years
              </button>
            </div>
            <div>
              <Image
                src="/img/about-us2.jpg"
                width={800}
                height={800}
                alt="about"
                className="rounded-3xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
