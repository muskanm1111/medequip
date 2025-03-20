import Image from "next/image";

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
    <section className="px-4 md:px-16 lg:px-2 py-20 lg:h-[180vh]">
      <div className="max-w-7xl mx-auto">
        {/* Main container with relative positioning */}
        <div className="relative">
          {/* Image container */}
          <div className="bg-violet-400 rounded-xl md:rounded-[80px]">
            <div className="border-[12px] md:border-[24px] border-violet-400 rounded-xl md:rounded-[80px] overflow-hidden">
              <Image
                src="/img/big.jpg"
                width={400}
                height={600}
                alt="Construction Equipment"
                className="w-full h-auto object-cover aspect-[9/16] lg:aspect-auto rounded-xl md:rounded-[80px]"
              />
            </div>
          </div>

          {/* Process card - positioned below image on small screens, overlapping on large */}
          <div className="relative mt-8 md:mt-12 lg:absolute lg:bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:translate-y-1/2 bg-white shadow-lg rounded-lg p-6 md:p-8 w-full lg:w-5/6 mx-auto">
            <h4 className="text-xs md:text-sm uppercase text-gray-500 font-semibold text-center">
              How It Works
            </h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mt-2">
              How Our
              <span className="text-violet-500 italic">
                {" "}
                Rental Process
              </span>{" "}
              Works
            </h2>

            {/* Process steps grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-6 border ${
                    index === 1 ? "border-violet-200" : "border-gray-200"
                  } shadow-sm relative`}
                >
                  <div className="bg-violet-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
