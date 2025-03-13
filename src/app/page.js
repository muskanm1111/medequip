"use client"
import About from "@/components/about";
import Banner from "@/components/banner";
import Blog from "@/components/blog";
import Card from "@/components/card";
import Faq from "@/components/faq";
import Imgabout from "@/components/imgabout";
import Process from "@/components/process";
import Product from "@/components/product";
import Ratecard from "@/components/ratecard";
import Testimonials from "@/components/testinomials";
import Testinomials from "@/components/testinomials";
import Image from "next/image";
import Link from "next/link";

const health = [
  {
    img: "/img/service__item-1.png",
    title: "Harbor Health",
    desc: "Et purus duis sollicitudin sed dign issim habi Et purus",
  },
  {
    img: "/img/service__item-2.png",
    title: "Harbor Health",
    desc: "Et purus duis sollicitudin sed dign issim habi Et purus",
  },
  {
    img: "/img/service__item-3.png",
    title: "Harbor Health",
    desc: "Et purus duis sollicitudin sed dign issim habi Et purus",
  },
  {
    img: "/img/service__item-4.png",
    title: "Harbor Health",
    desc: "Et purus duis sollicitudin sed dign issim habi Et purus",
  },
];

const pricecard = [
  {
    title: "consult",
    price: "$19",
  },
  {
    title: "Intensive",
    price: "$40",
  },
  {
    title: "private",
    price: "$99",
  },
];

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">

       <Banner />
       <Card />
        <About />
      <Process />
      <Imgabout />
      <Testimonials />
      <Ratecard />
      <Faq />
      
      <Blog />
      <Product />
    </section>
  );
}
