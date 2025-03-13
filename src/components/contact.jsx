import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
          Contact Us
        </h1>
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>

             

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Our Location
                    </h3>
                    <p className="text-gray-600 mt-1">
                      123 Medical Center Blvd, Suite 456, Healthtown, HT 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Phone Number
                    </h3>
                    <p className="text-gray-600 mt-1">(123) 456-7890</p>
                    <p className="text-gray-600">Emergency: (123) 456-8911</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Email Address
                    </h3>
                    <p className="text-gray-600 mt-1">
                      contact@healthclinic.com
                    </p>
                    <p className="text-gray-600">
                      appointments@healthclinic.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaClock className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Hours of Operation
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 8:00 AM - 7:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Contact;
