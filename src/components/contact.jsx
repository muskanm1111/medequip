import Image from "next/image";
import React from "react";

const Contact = ({className, className2}) => {
  return (
    <section className={` px-4 md:px-16 lg:px-24 py-20 ${className}`}>
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl ${className2}`}
      >
        <div className="relative h-[300px] md:h-auto">
          <Image
            src="/img/contact.jpg"
            alt="Contact Us"
            width={800}
            height={1200}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-violet-900/30 backdrop-blur-sm md:backdrop-blur-0"></div>

          <div className="hidden md:block absolute bottom-8 left-8 right-8 bg-gray-900/80 backdrop-blur-sm p-10 rounded-xl border border-violet-500/30 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-3">Get in Touch</h3>
            <div className="flex items-center space-x-3 text-gray-200 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-violet-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+1 234 567 8900</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-violet-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>abc@.com</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 text-white p-8 md:p-12 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-600/10 rounded-full -ml-12 -mb-12 blur-xl"></div>

          <div className="relative">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="italic text-violet-400">Contact Us</span> for
              <span className="relative">
                Assistance
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-violet-500/30 rounded-full"></span>
              </span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>

            <div className="bg-gray-900/60 p-6 rounded-xl mt-6 border border-violet-500/20 shadow-lg backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-1 ml-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="p-3 rounded-lg w-full bg-gray-700 border border-gray-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-white  text-sm mb-1 ml-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="p-3 rounded-lg w-full bg-gray-700 border border-gray-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-white  text-sm mb-1 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="p-3 rounded-lg w-full bg-gray-700 border border-gray-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-white  text-sm mb-1 ml-1">
                    Telephone
                  </label>
                  <input
                    type="text"
                    placeholder="+1 234 567 8900"
                    className="p-3 rounded-lg w-full bg-gray-700 border border-gray-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-white  text-sm mb-1 ml-1">
                  Your Message
                </label>
                <textarea
                  placeholder="How can we help you?"
                  className="p-3 rounded-lg w-full bg-gray-700 border border-gray-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition h-32 resize-none"
                ></textarea>
              </div>
              <button className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-lg mt-6 w-full md:w-auto transition-colors duration-300 flex items-center justify-center gap-2 group">
                SEND MESSAGE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
