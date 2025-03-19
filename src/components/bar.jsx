import Image from "next/image";


export default function Bar() {
  const metrics = [
    { name: "Operational Excellence", percentage: 90 },
    { name: "Customer Satisfaction", percentage: 95 },
    { name: "Innovative Solutions", percentage: 92 },
    { name: "Sustainable Practices", percentage: 88 },
    { name: "Advanced Technology", percentage: 90 },
  ];

  return (
    <div className="bg-violet-50 min-h-screen ">
     
      <div className="max-w-7xl mx-auto px-4 py-12 pb-32">
      
        <div className="bg-white rounded-lg shadow-md ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
           
            <div className="relative h-[300px] md:h-auto rounded-lg">
              <Image
                src="/img/ab.jpg"
                alt="Construction worker with equipment"
                className="object-cover"
                fill
              />
            </div>

            <div className="space-y-6">
              <div className="uppercase text-sm font-semibold text-gray-700">
                ABOUT US
              </div>

              <h2 className="text-3xl md:text-4xl font-bold">
                Discover Our <br />
                <span className="text-violet-500">Journey and Vision</span>
              </h2>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec
              </p>

            
              <div className="space-y-3 pt-4">
                {metrics.map((metric) => (
                  <div key={metric.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{metric.name}</span>
                      <span className="font-medium">{metric.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-violet-500 rounded-full"
                        style={{ width: `${metric.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Vision</h3>
                  <p className="text-gray-700">
                    Revolutionizing equipment rentals with innovation and
                    excellence.
                  </p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Mission</h3>
                  <p className="text-gray-700">
                    Delivering top-quality rentals and exceptional customer
                    support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
