import React from "react";
import { Star, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-56 object-contain z-0"
        />
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-2 py-1 m-2 rounded">
          {product.category}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
          </div>
          <span className="text-xs text-gray-500 ml-2">(24 reviews)</span>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {product.title}
        </h3>
        <p className="text-blue-600 font-medium mb-3">
          {product.short_description}
        </p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center">
            <Info size={16} className="mr-2" />
            Details
          </button>
         
        </div>
      </div>
    </Link>
  );
};


export default ProductCard
