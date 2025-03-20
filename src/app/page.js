"use client"
import About from '@/components/about'
import Contact from '@/components/contact'
import Faq from '@/components/faq'
import Home from '@/components/home'
import Process from '@/components/process'
import ProductCard from '@/components/product-card'
import Testimonials from '@/components/testinomials'
import Product from '@/utils/data'
import React from 'react'

const Page = () => {


  return (
    <div>
      <Home />
      <About />
      <div className="py-28 bg-slate-50  ">
        <h4 className="text-sm flex items-center justify-center mt-8 mb-4 uppercase text-gray-500 font-semibold">
          Product we rent
        </h4>
        <div className="w-full flex items-center justify-center mb-8 ">
          <h1 className="text-3xl md:text-5xl font-semibold text-center md:text-start">
            <span className="text-violet-500 italic ">Discover</span> Our
            Equipment
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Product.slice(0, 3).map((item, i) => {
            return <ProductCard key={i} items={item} />;
          })}
        </div>

        <div className="text-center mt-12">
          <button className="px-12 z-30 py-2 bg-violet-400 rounded-md text-white relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-violet-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#8b5cf6;] hover:[text-shadow:2px_2px_2px_#8b5cf6] text-xl">
            View All Product 
          </button>
        </div>
      </div>
      <Process />
      <Testimonials />
      <Contact />
      <Faq />
    </div>
  );
}

export default Page