import Image from "next/image";
import React from "react";

const physicians = [
  {
    img: "/img/team__item-1.jpg",
    name: "Dr. Kathryn Smith",
    role: "Pediatrician",
    specialty: "Specializing in childhood development",
  },
  {
    img: "/img/team__item-2.jpg",
    name: "Dr. Savannah Johnson",
    role: "Cardiologist",
    specialty: "Heart disease prevention",
  },
  {
    img: "/img/team__item-3.jpg",
    name: "Dr. Courtney Williams",
    role: "Family Medicine",
    specialty: "Primary care for all ages",
  },
];

const PhysicianDirectory = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white ">
      <div className="max-w-6xl mx-auto">
        <h1 className=" md:text-5xl mb-4 text-gray-800 text-5xl text-center mx-auto w-full  ">
          Our Physician Team
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Meet our team of dedicated healthcare professionals committed to
          providing you with exceptional care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {physicians.map((physician, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={physician.img}
                  alt={physician.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  {physician.name}
                </h2>
                <p className="text-blue-600 font-medium mb-3">
                  {physician.role}
                </p>
                <p className="text-gray-600">{physician.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhysicianDirectory;
