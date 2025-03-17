"use client"

import ProductCard from "@/components/product-card";
import { fetchProduct } from "@/utils/Api";
import { useEffect, useState } from "react"

const Page = () => {
    const [products , setProducts] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const data = await fetchProduct();
            setProducts(data)
        };
        fetchData();
    },[])

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="flex items-center justify-between my-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center w-full">
          Health & Wellness Products
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Page