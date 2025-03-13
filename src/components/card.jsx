import Image from "next/image";
import React from "react";

const Card = () => {
  const services = [
    {
      icon: "/img/service__item-1.png",
      title: "Harbor Health",
      description:
        "Et purus duis sollicitudin sed dign issim habi tant. Egestas nulla quis venenatis Et purus",
    },
    {
      icon: "/img/service__item-2.png",
      title: "Harbor Health",
      description:
        "Et purus duis sollicitudin sed dign issim habi tant. Egestas nulla quis venenatis Et purus",
    },
    {
      icon: "/img/service__item-3.png",
      title: "Harbor Health",
      description:
        "Et purus duis sollicitudin sed dign issim habi tant. Egestas nulla quis venenatis Et purus",
    },
    {
      icon: "/img/service__item-4.png",
      title: "Harbor Health",
      description:
        "Et purus duis sollicitudin sed dign issim habi tant. Egestas nulla quis venenatis Et purus",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-5xl text-center mx-auto w-full mb-4 text-blue-950">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-6 flex flex-col justify-between h-full
                        transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px]
                        relative overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                <div className="bg-blue-50 p-4 rounded-2xl inline-block">
                  <Image
                    src={service.icon}
                    width={50}
                    height={50}
                    alt={service.title}
                    className="object-contain"
                  />
                </div>
                <h2 className="font-semibold text-2xl text-blue-950">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <button className="mt-6 text-blue-600 font-medium flex items-center group">
                Read more
                <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">
                  +
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
