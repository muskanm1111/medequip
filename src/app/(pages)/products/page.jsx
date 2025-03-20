"use client"

import Breadcrumb from "@/components/breadcrumb";
import Contact from "@/components/contact";
import Process from "@/components/process";
import ProductCard from "@/components/product-card";
import Testimonials from "@/components/testinomials";
import Product from "@/utils/data";


const Page = () => {
   

  return (
    <div>
      <Breadcrumb Head={"Our Products"} pera={"Products"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-20 max-w-7xl mx-auto">
        {Product.map((item, i) => {
          return <ProductCard key={i} items={item} />;
        })}
      </div>
      <Process />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Page