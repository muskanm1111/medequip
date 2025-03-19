import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({Head, pera}) => {
  return (
    <div className="container mx-auto px-4 py-12 pt-36 bg-violet-50 ">
      <h1 className="text-4xl font-semibold text-center mt-10 mb-6">{Head}</h1>

      {/* Breadcrumb */}
      <div className="flex items-center justify-center gap-2 mb-12">
        <Link href="/" passHref>
          <span className="text-violet-500 hover:text-violet-500 font-semibold">HOME</span>
        </Link>
        <ChevronRight className="h-4 w-4 text-violet-500" />
        <span className="text-violet-500 font-medium">{pera}</span>
      </div>

      <hr className='w-11/12 mx-auto'/>
    </div>
  );
}

export default Breadcrumb;