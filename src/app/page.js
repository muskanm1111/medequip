"use client"
import About from "@/components/about";
import Banner from "@/components/banner";
import Blog from "@/components/blog";
import Card from "@/components/card";
import Faq from "@/components/faq";
import Imgabout from "@/components/imgabout";
import Process from "@/components/process";
import Product from "@/components/product";
import ProductCard from "@/components/product-card";
import Ratecard from "@/components/ratecard";
import Testimonials from "@/components/testinomials";
import { fetchProduct } from "@/utils/Api";
import { useEffect, useState } from "react";


export default function Home() {

      const [products , setProducts] = useState([]);
  
      useEffect(()=>{
          const fetchData = async () => {
              const data = await fetchProduct();
              setProducts(data)
          };
          fetchData();
      },[])


  return (
    <section className="bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
      <Banner />
      <Card />
      <About />
      <Process />
      <div className="bg-white py-16">
        <h1 className=" md:text-5xl mb-8 text-gray-800 text-5xl text-center mx-auto w-full ">
          Fetaure Products
        </h1>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8  max-w-7xl mx-auto">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Imgabout />
      <Testimonials />
      <Ratecard />
      <Faq />

      <Blog />
      <Product />
    </section>
  );
}
