import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="py-24">
      <h2 className="md:text-5xl text-5xl text-center mx-auto w-full mb-4 text-blue-950">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-6xl mx-auto">
        <div className="bg-white text-white p-4 md:p-6 rounded-[2.5rem]">
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <Image
              src="/img/testimonial.png"
              alt="testimonial"
              fill
              className="rounded-[2.5rem] object-cover"
            />
          </div>
        </div>
        <div className="bg-[#C9F3FF] border border-gray-400 text-blue-950 p-4 md:p-6 rounded-[2.5rem]">
          <Image
            src="/img/qoute.png"
            width={40}
            height={40}
            alt="quote"
            className="ml-6"
          />
          <p className="text-lg md:text-2xl p-4 md:p-8">
            Medical science encompasses a vast array of fields dedicated to
            understanding and treating ailments, promoting health, and enhancing
            quality of life. Here&apos;s a brief exploration into this
            multifaceted discipline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
