import React from 'react'

const Product = () => {
  return (
    <div className='py-10 md:py-20'>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 mx-auto max-w-6xl">
        <div className="bg-blue-600 text-white  rounded-3xl p-6 space-y-6">
          <h1 className="font-semibold text-2xl items-center">
            Eye health provider
          </h1>
          <p className="">
            Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
            venenatis cras sed eu massa eu faucibus
          </p>
        </div>
        <div className="bg-teal-700 text-white p-6 rounded-3xl space-y-6">
          <h1 className="font-semibold text-2xl">Eye health provider</h1>
          <p className="  items-start">
            Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
            venenatis cras sed eu massa eu faucibus
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product