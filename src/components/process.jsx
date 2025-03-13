import Image from "next/image";
import React from "react";

const health = [
  {
    img: "/img/service__item-1.png",
    title: "Harbor Health",
    desc: "Et purus duis sollicitudin sed dign issim habi Et purus",
  },
  {
    img: "/img/service__item-2.png",
    title: "Harbor Health",
    desc: "Et purus duis sollicitudin sed dign issim habi Et purus",
  },
  {
    img: "/img/service__item-3.png",
    title: "Harbor Health",
    desc: "Et purus duis sollicitudin sed dign issim habi Et purus",
  },
  {
    img: "/img/service__item-4.png",
    title: "Harbor Health",
    desc: "Et purus duis sollicitudin sed dign issim habi Et purus",
  },
];

const Process = () => {
  return (
    <div className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="w-full text-center mb-8 md:mb-12">
            <h4 className=" md:text-5xl lg:text-6xl text-blue-950 text-5xl text-center mx-auto w-full mb-4 px-4 md:px-10 lg:px-20">
              Our Treatment Process
            </h4>
          </div>

          {/* Banner Image */}
          <div className="w-full max-w-5xl mx-auto mb-16">
            <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem]">
              <Image
                src="/img/banner.jpg"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                alt="Treatment process banner"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {health.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[1.3rem] shadow-md p-6 md:p-8 flex flex-col items-center gap-4 md:gap-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 relative">
                <Image
                  src={item.img}
                  fill
                  sizes="(max-width: 768px) 4rem, 5rem"
                  alt={`${item.title} icon`}
                  className="object-contain"
                />
              </div>
              <h2 className="font-semibold text-xl md:text-2xl text-blue-950">
                {item.title}
              </h2>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
