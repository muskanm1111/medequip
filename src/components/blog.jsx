import Image from 'next/image';
import React from 'react'
const blogcard = [
  {
    img: "/img/blog-item-1.jpg",
    date: "October 19, 2022",
    desc: "Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic",
    href: "!#",
    title: "Optimal Oasis Nurturing Health in Every Aspect",
  },
  {
    img: "/img/blog-item-2.jpg",
    date: "October 20, 2022",
    desc: "Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic",
    href: "!#",
    title: "Embark on Health Wellness Begins",
  },
  {
    img: "/img/blog-item-3.jpg",
    date: "October 19, 2022",
    desc: "Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic",
    href: "!#",
    title: "Flourishing Healthier Revive Radiance",
  },
];

const Blog = () => {
  return (
    <div className='bg-white py-10 md:py-20'>
    <h1 className="text-5xl text-center mx-auto w-full   ">
            Latest Blog Hub
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto pt-14  ">
            {blogcard.map((blogcard, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-[1.3rem]  space-y-8 overflow-hidden "
              >
                <Image src={blogcard.img} width={500} height={500} alt="FAQ" />
                <div className="w-full flex flex-col p-6 items-start gap-3">
                  <span>
                    icon <p>{blogcard.date}</p>
                  </span>
                  <h1 className="font-semibold text-2xl">{blogcard.title}</h1>
                  <p className="text-gray-500">{blogcard.desc}</p>
                  <a
                    href={blogcard.href}
                    className="text-lg font-semibold flex gap-2 items-center justify-start text-blue-950 hover:text-blue-400"
                  >
                    <p>View More</p>+
                  </a>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Blog