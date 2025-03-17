"use client"

import { useEffect, useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { fetchProductById } from "@/utils/Api";

export default function ProductDetail({params}) {
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const getProduct = async () => {
        const data = await fetchProductById(params.id);
        setProduct(data);
        setLoading(false);
      };

      getProduct();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto p-8">
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Product not found
          </h2>
          <Link href="/">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <Link href="/">
        <button className="flex items-center text-blue-600 mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </button>
      </Link>

      <div className="bg-white rounded-lg  p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={product.image || `/api/placeholder/600/600`}
            alt={product.title}
            className="w-full h-full object-cover rounded-md"
          />
        
        </div>

        <div>
          <div className="mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {product.title}
          </h1>

          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <span className="text-sm text-gray-500 ml-2">(24 reviews)</span>
          </div>

          <h2 className="text-xl text-blue-600 font-medium mb-3">
            {product.short_description}
          </h2>

          <div className="border-t border-b border-gray-200 py-6 my-6">
            <h3 className="text-lg font-bold mb-4">Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}