import About from '@/components/about';
import Bar from '@/components/bar';
import Breadcrumb from '@/components/breadcrumb';
import Faq from '@/components/faq';
import React from 'react'

const Page = () => {
  return (
    <div className="">
      <Breadcrumb  Head={"ABOUT US"} pera={"ABOUT"}/>
      <Bar />
      <About className="bg-white py-20" />
      <Faq className="py-20" />
    </div>
  );
}

export default Page