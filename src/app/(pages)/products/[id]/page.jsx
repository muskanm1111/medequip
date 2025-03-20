import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-7xl px-4 py-12 pt-40 mx-auto p-4  ">
      <nav className="text-sm text-gray-500 mb-4 flex gap-2">
        <Link href="/" className="hover:underline z-10">
          Home
        </Link>
        /
        <Link href="/products" className="hover:underline z-10">
          Products
        </Link>
        /<span className="text-gray-700"> Digital X-Ray System</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg overflow-hidden border">
          <Image
            src="/img/p1.jpg"
            alt="abd"
            width={600}
            height={400}
            className="w-full"
          />
        </div>

        <div className="z-50">
          <h1 className="text-3xl font-semibold">Digital X-Ray System</h1>
          <div className="mt-2 inline-block bg-gray-200 text-sm px-3 py-1 rounded-full">
            MEDICAL MACHINERY
          </div>
          <p className="mt-4 text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            deleniti
          </p>
          <Link
            href="/contact"
            className="  bg-violet-500 hover:bg-violet-600 text-white py-2 px-4 rounded-md"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Product Details</h2>
        <p className="mt-2 text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio maxime
          pariatur officia cumque architecto ratione vel, et quia debitis
          cupiditate perferendis soluta harum magni voluptate, neque eligendi
          quos voluptatem fugiat.
        </p>
      </div>
    </div>
  );
}
