import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full px-4 py-10 md:py-16 flex justify-center">
      {/* Container */}
      <div className="flex flex-col container mx-auto items-center text-center max-w-7xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-950 font-bold px-4 sm:px-8 md:px-12 lg:px-20 max-w-5xl leading-tight">
          Meet Your Compassion In Eye Care With Us
        </h1>
        <img src="/img/banner.jpg" alt="b" className="h-[400px] rounded-3xl mt-10 object-cover" />
        {/* Button */}
        <div className="pt-6 md:pt-8">
          <button className="rounded-full bg-blue-700 py-3 px-6 sm:py-4 sm:px-8 text-white text-base sm:text-lg md:text-xl shadow-lg hover:bg-blue-800 transition duration-300">
            Read More +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
