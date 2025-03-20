import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { IconAmbulance, IconNurse, IconStethoscope, IconVaccine } from "@tabler/icons-react";

const features = [
  {
    icon: <IconAmbulance  size={40} />,
    title: "Comprehensive Machinery Selection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,",
  },
  {
    icon: <IconNurse  size={40} />,
    title: "Flexible and Customizable Rental",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,",
  },
  {
    icon: <IconVaccine  size={40} />,
    title: "Professional Maintenance Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,",
  },
  {
    icon: <IconStethoscope  size={40} />,
    title: "Expert & Personalized Consultation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,",
  },
];

export default function About({className}) {
  return (
    <div className={`bg-violet-50 py-20 min-h-screen ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-violet-500">Top-Tier</span> Machinery &amp;
              Equipment
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2">
              Rentals for Every Project Need
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Image Section */}
          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden h-full">
              <Image
                src="/img/about-img.jpg"
                alt="Construction Equipment"
                width={500}
                height={500}
                className="object-cover w-full h-[580px]"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-7 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="text-violet-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#"
        className="inline-flex items-center text-violet-500 font-medium"
      >
        LEARN MORE <ChevronRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
}

