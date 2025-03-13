import Card from '@/components/card';
import Process from '@/components/process';
import Testimonials from '@/components/testinomials';
import React from 'react'

const page = () => {
  return (
    <div>
      <Process />
      <Card />
      <Testimonials />
    </div>
  );
}

export default page