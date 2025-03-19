import Image from "next/image";
import { Play } from "lucide-react";

export default function Home() {
  return (
    <div className=" min-h-screen mt-28">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Content Section */}
          <div className="lg:col-span-4 space-y-4 order-1 ">
            <h3 className="text-sm sm:text-base md:text-lg uppercase font-medium tracking-wide">
              WELCOME TO medequip
            </h3>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Reliable Machinery &amp; Equipment
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold italic text-violet-500">
              Rentals
            </h2>
            <p className="text-gray-600 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper.
            </p>
            <button className="bg-violet-500 hover:bg-violet-600 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              DISCOVER MORE
            </button>

            {/* <div className="flex items-center mt-8 space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={`/img/banner.png`}
                      alt={`Client ${i}`}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="font-bold text-lg ml-1">4.9</span>
              </div>
            </div> */}
            <p className="text-sm text-gray-600">Trusted by 2k+ Client</p>
          </div>

          {/* Center Image Section */}
          <div className="lg:col-span-5 order-2 lg:order-2 mt-6 lg:mt-0">
            <div className="relative bg-violet-500 rounded-lg  h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src="/img/pngwing.com.png"
                alt="Construction Equipment"
                width={500}
                height={500}
                className="object-contain w-full h-full absolute right-12"
                priority
              />
              <div className="absolute bottom-8 right-8 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-4xl font-bold">2.7k</div>
                <div className="text-sm font-medium uppercase">
                  HAPPY CLIENT
                </div>
              </div>
            </div>
          </div>

          {/* Right Find Equipment Section */}
          <div className="lg:col-span-3 order-3 lg:order-3">
            <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
              <div className="relative w-full h-40 mb-6 rounded-xl overflow-hidden">
                <video controls className="w-full h-auto rounded-lg">
                  <source
                    src={"https://www.youtube.com/watch?v=-tvDLg-5Qy8"}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute left-1/2 top-[36%]  -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="bg-violet-500 rounded-full  p-3 cursor-pointer hover:bg-violet-600 transition-colors">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Find Equipment</h3>

              <div className="space-y-4">
                <div className="relative">
                  <select className="w-full p-3 bg-white border border-gray-200 rounded-lg appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>All Branch</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <select className="w-full p-3 bg-white border border-gray-200 rounded-lg appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>All Category</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <select className="w-full p-3 bg-white border border-gray-200 rounded-lg appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>All Manufacturer</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <button className="w-full bg-violet-500 hover:bg-violet-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
