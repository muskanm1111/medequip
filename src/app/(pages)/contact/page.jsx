import Breadcrumb from '@/components/breadcrumb';
import Contact from '@/components/contact'
import Faq from '@/components/faq';
import React from 'react'

const Page = () => {
  return (
    <div className="">
      <Breadcrumb Head={"CONTACT US"} pera={"Contact"} />
      <Contact />
      <Faq />
    </div>
  );
}

export default Page
