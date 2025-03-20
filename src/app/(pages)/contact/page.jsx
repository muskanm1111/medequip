import Breadcrumb from '@/components/breadcrumb';
import Contact from '@/components/contact'
import Faq from '@/components/faq';
import React from 'react'

const Page = () => {
  return (
    <div className="">
      <Breadcrumb Head={"CONTACT US"} pera={"Contact"} />

      <div className="w-full bg-[#202a38]">
        <Contact
          className={"py-0"}
          className2={"rounded-none shadow-none border-none max-w-full  mx-auto"}
        />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2343527997614!2d77.04081927641111!3d28.592745512995574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bd8f405bcf1%3A0x9e601372145832d0!2sDesire%20Div%20-%20Website%20Designing%20Company%20in%20Dwarka!5e0!3m2!1sen!2sin!4v1742452736652!5m2!1sen!2sin"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-md"
      ></iframe>
      <Faq />
    </div>
  );
}

export default Page
