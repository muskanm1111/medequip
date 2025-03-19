import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lars Peeters",
      role: "Client",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      feedback:
        "I rented equipment from this company, and the service was exceptional. The machinery was in excellent condition and the staff were very helpful.",
    },
    {
      name: "Francois Mercer",
      role: "Client",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      feedback:
        "The rental process was smooth and easy. The equipment was top-notch and delivered on time. I highly recommend their services.",
    },
    {
      name: "Alfredo Torres",
      role: "Client",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      feedback:
        "Excellent customer service and high-quality machinery. The team was very professional and made the rental process hassle-free.",
    },
  ];

  return (
    <section className="bg-violet-50 py-20 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-start">
        <h4 className="text-sm uppercase text-gray-500 font-semibold">
          Testimonial
        </h4>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
          Feedback from Our
          <span className="text-violet-500 italic">Valued Clients</span>
        </h2>
       </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl p-6 mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 text-center"
          >
            <p className="text-gray-700 italic">&quot;{testimonial.feedback}&quot;</p>
            <div className="mt-4 flex items-center justify-center">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={400}
                height={600}
                className="w-12 h-12 rounded-full border-2 border-violet-500"
              />
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-violet-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-violet-600 transition">
          See More
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
