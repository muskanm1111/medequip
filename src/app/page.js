import About from '@/components/about'
import Contact from '@/components/contact'
import Faq from '@/components/faq'
import Home from '@/components/home'
import Process from '@/components/process'
import Testimonials from '@/components/testinomials'
import React from 'react'

const Page = () => {
  return (
    <div className="">
      <Home />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <Faq />
    </div>
  );
}

export default Page