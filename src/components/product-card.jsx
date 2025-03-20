
import Image from "next/image";
import Link from "next/link";


const ProductCard = ({items}) => {
  const { title, image, description } = items;
  return (
    <Link href={`/products/${items.id}`} className="z-40" >
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden ">
      
        <div className="p-6 ">
          <div className="relative w-full h-72 mb-4 ">
            <Image
              src={image}
              alt="Yellow excavator on a construction site"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-start mt-8">
            <button className="bg-gray-100 hover:bg-violet-400 text-base  from-neutral-950 hover:text-white  py-2 px-4 rounded-lg transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
