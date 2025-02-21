"use client"
import Image from "next/image";

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

const imgcard = [
  {
    img: "/img/team__item-1.jpg",
    title: "kathryan",
  },

  {
    img: "/img/team__item-2.jpg",
    title: "savanah",
  },
  {
    img: "/img/team__item-3.jpg",
    title: "courtney",
  },
];

const blogcard = [
  {
    img: "/img/blog-item-1.jpg",
    date: "October 19, 2022",
    desc: "Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic",
    href: "!#",
    title: "Optimal Oasis Nurturing Health in Every Aspect",
  },
  {
    img: "/img/blog-item-2.jpg",
    date: "October 20, 2022",
    desc: "Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic",
    href: "!#",
    title: "Embark on Health Wellness Begins",
  },
  {
    img: "/img/blog-item-3.jpg",
    date: "October 19, 2022",
    desc: "Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic",
    href: "!#",
    title: "Flourishing Healthier Revive Radiance",
  },
];


export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
      <header>
        <div className="bg-white p-5">
          <div className="max-w-6xl  mx-auto flex justify-between space-x-6 ">
            {/* logo */}
            <div className="flex ">
              <Image src="/img/logo.svg" width={150} height={150} alt="logo" />
            </div>
            {/* middle nav item  */}
            <div className="flex">
              <nav className="flex items-center ">
                <ul className="flex space-x-6 font-semibold">
                  <li>Home </li>
                  <li>Page</li>
                  <li>Services</li>
                  <li>Doctor</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>

            {/* right nav item */}
            <div>
              <div>
                <button className="rounded-full bg-black p-4 text-white border-x w-48">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/*  body*/}
      <div>
        <div className=" flex flex-col container mx-auto items-center">
          {/* body heading */}
          <div className="flex">
            <h1 className="sm:text-6xl lg:text-8xl text-blue-950 font-bold text-center pt-20 px-20 text-wrap ">
              Meet Your Compassion In Eye Care With Us
            </h1>
          </div>

          {/* body buttn */}
          <div className="pt-8">
            <button className="rounded-full bg-blue-700 p-4 text-white border-x w-48 ">
              Read More +
            </button>
          </div>

          {/* body img */}
          <div className="pt-10">
            <Image
              src="/img/banner.jpg"
              width={1000}
              height={1000}
              alt="banner"
              className="rounded-[2.5rem]"
            />
          </div>
        </div>
      </div>

      {/* cards */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 p-6 max-w-6xl mx-auto pt-20">
          <div className="bg-white rounded-[1.3rem] shadow-md p-5 space-y-8 h-96 ">
            <Image
              src="/img/service__item-1.png"
              width={70}
              height={70}
              alt="logo"
            />
            <h2 className="font-semibold  text-2xl">Harbor Health</h2>

            <p className="text-gray-600">
              Et purus duis sollicitudin sed dign issim habi tant. Egestas nulla
              quis venenatis Et purus
            </p>
            <button>Read more +</button>
          </div>

          <div className="bg-white rounded-[1.3rem] shadow-md p-5 space-y-8 h-96">
            <Image
              src="/img/service__item-2.png"
              width={70}
              height={70}
              alt="logo"
            />
            <h2 className="font-semibold text-2xl">Harbor Health</h2>

            <p className="text-gray-600">
              Et purus duis sollicitudin sed dign issim habi tant. Egestas nulla
              quis venenatis Et purus
            </p>
            <button>Read more +</button>
          </div>

          <div className="bg-white rounded-[1.3rem] shadow-md p-5 space-y-8 h-96">
            <Image
              src="/img/service__item-3.png"
              width={70}
              height={70}
              alt="logo"
            />
            <h2 className="font-semibold text-2xl">Harbor Health</h2>

            <p className="text-gray-600">
              Et purus duis sollicitudin sed dign issim habi tant. Egestas nulla
              quis venenatis Et purus
            </p>
            <button>Read more +</button>
          </div>

          <div className="bg-white rounded-[1.3rem] shadow-md p-5 space-y-8 h-96">
            <Image
              src="/img/service__item-4.png"
              width={70}
              height={70}
              alt="logo"
            />
            <h2 className="font-semibold text-2xl">Harbor Health</h2>

            <p className="text-gray-600">
              Et purus duis sollicitudin sed dign issim habi tant. Egestas nulla
              quis venenatis Et purus
            </p>
            <button>Read more +</button>
          </div>
        </div>
      </div>

      {/* about section */}
      <section className="">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-1 grid-cols-2 gap-4 p-4 text-blue-950">
            <div className=" text-dark p-4 rounded-lg flex flex-col space-y-10  ">
              <h1 className="text-5xl pt-28 px-2 font-semibold text-blue-950">
                Nurture Nature Blossoming in Health and Happiness
              </h1>
              <p className="">
                Et purus duis sollicitudin dignissim habitant. Egestas nulla
                quis venenatis cras sed eu massa eu faucibus Urna fusce Et purus
                duis sollicitudin dignissim habitant.
              </p>

              <h2 className="text-xl">Last mile delivery</h2>

              <h2 className="text-xl">Last mile delivery</h2>
              <h2 className="text-xl">Last mile delivery</h2>
            </div>

            <div className=" text-dark p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-4 p-4 ">
                <div className=" text-white p-6 rounded-lg flex flex-col justify-evenly bg-[url('/img/shape-big.png')]">
                  <Image
                    src="/img/about-us.jpg"
                    width={200}
                    height={200}
                    alt="about"
                    className="rounded-3xl mt-20"
                  />

                  <button className="bg-white p-5 text-black rounded-2xl text-2xl w-48 border ">
                    25 Years
                  </button>
                </div>
                <div className=" text-white  rounded-lg ">
                  <Image
                    src="/img/about-us2.jpg"
                    width={800}
                    height={800}
                    alt="about"
                    className="rounded-3xl h-[500px] mt-16"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ------------------------------------ */}
      <div>
        <div className=" flex flex-col container mx-auto  items-center ">
          {/* body heading */}
          <div className="flex">
            <h4 className="sm:text-6xl lg:text-5xl text-blue-950 text-center pt-20 px-20 text-wrap">
              Our Treatment Process
            </h4>
          </div>

          {/* body img */}
          <div className="">
            <div className="pt-10">
              <Image
                src="/img/banner.jpg"
                width={1000}
                height={1000}
                alt="banner"
                className="rounded-[2.5rem] w-[800%]"
              />
              {/* <p className="">
              Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
              venenatis cras sed eu massa eu faucibus Urna fusce Et purus duis
              sollicitudin dignissim habitant.
            </p> */}
              {/* <Image
              src="/img/banner.jpg"
              width={1000}
              height={1000}
              alt="banner"
              className="rounded-[2.5rem] mx-auto pt-10"
            /> */}
            </div>
          </div>
        </div>

        {/*  ------------------------------------ */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto pt-10 text-center">
            {health.map((health, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[1.3rem] shadow-md p-8 space-y-8 "
              >
                <Image
                  src={health.img}
                  width={70}
                  height={70}
                  alt="logo"
                  className="mx-auto"
                />
                <h2 className="font-semibold  text-2xl">{health.title}</h2>

                <p className="text-gray-600">{health.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------- */}

      <h1 className="text-5xl text-center mx-auto w-full pt-28 ">
        Cost Breakdown Summary
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto pt-14 ">
        {pricecard.map((pricecard, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[1.3rem] shadow-md p-8 space-y-8 "
          >
            <h2 className="font-semibold  text-3xl capitalize">
              {pricecard.title}
            </h2>
            <span className="text-gray-800 flex items-end gap-1 text-5xl">
              {pricecard.price}
              <p className="text-sm">/month</p>
            </span>
            <hr />

            <p> Mistakes To Avoid</p>
            <p> Your Startup</p>
            <p>Knew About Fonts</p>
            <p>Knew About Fonts</p>

            <button className="rounded-full border-blue-700  p-4 text-dark border w-60 hover:bg-blue-600">
              Read More +
            </button>
          </div>
        ))}
      </div>

      {/* ------------------------------------------------------ */}

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 p-4 max-w-6xl mx-auto mt-36">
        <div className="bg-white text-white p-6 max-auto  rounded-[2.5rem] ">
          <Image
            src="/img/testimonial.png"
            width={950}
            height={950}
            alt="banner"
            className="rounded-[2.5rem] "
          />
        </div>
        <div className="bg-[#C9F3FF] border-2 border-black text-blue-950  p-6 rounded-[2.5rem] ">
          <Image
            src="/img/qoute.png"
            width={60}
            height={60}
            alt="banner"
            className="ml-6"
          />
          <p className="text-2xl p-8">
            Medical science encompasses a vast array of fields dedicated to
            understanding and treating ailments, promoting health, and enhanci
            quality of life. Here a brief exploration into this multifaceted
          </p>
        </div>
      </div>
      {/* ------------------------------------------------ */}

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 p-4 mx-auto max-w-6xl mt-40 ">
        <div className=" p-6 rounded-lg space-y-4">
          <h1 className="text-5xl  text-blue-950">
            Healing Harmony Uniting Care and Compassion
          </h1>
          <h2 className="text-lg font-semibold  bg-white rounded-2xl p-5">
            How your path to ultimate wellness
          </h2>
          <h2 className="text-lg font-semibold bg-white rounded-2xl p-5">
            How your path to ultimate wellness
          </h2>
          <div className=" bg-white rounded-2xl p-5">
            <h2 className="text-lg font-semibold">Last mile delivery</h2>
            <p className="">
              Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
              venenatis cras sed eu massa eu faucibus Urna fusce Et purus duis
              sollicitudin dignissim habitant.
            </p>
          </div>
        </div>
        <div className=" text-white p-6 rounded-lg">
          <Image
            src="/img/ask-question.png"
            width={500}
            height={500}
            alt="FAQ"
          />
        </div>
      </div>

      {/* ------------------------------------------------------------- */}

      <h1 className="text-5xl text-center mx-auto w-full pt-28 ">
        Physician Directory
      </h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto pt-16">
          {imgcard.map((imgcard, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[1.3rem] shadow-md  w-[320px] h-[450px] "
            >
              <Image
                src={imgcard.img}
                width={400}
                height={400}
                alt="logo"
                className="mx-auto rounded-t-3xl"
              />

              <h2 className="font-semibold p-8 text-3xl capitalize">
                {imgcard.title}
              </h2>
              <p className="ml-8 text-gray-500">Medical assistant</p>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------------------ */}
      {/* <div className="relative  w-full border-4">

          <div className="grid grid-cols-2 max-w-6xl mx-auto gap-3 bg-sky-800">
            <div className="bg-purple-500 p-5">
              vddv

            </div>
            <div className="bg-pink-500 p-5">
              <form className="absolute left-2 top-[20%]"></form>
            </div>
            
          </div>
</div> */}
      {/* ------------------------------------------------ */}

      <h1 className="text-5xl text-center mx-auto w-full pt-32 ">
        Latest Blog Hub
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto pt-14 ">
        {blogcard.map((blogcard, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[1.3rem]  space-y-8 overflow-hidden "
          >
            <Image src={blogcard.img} width={500} height={500} alt="FAQ" />
            <div className="w-full flex flex-col p-6 items-start gap-3">
              <span>
                icon <p>{blogcard.date}</p>
              </span>
              <h1 className="font-semibold text-2xl">{blogcard.title}</h1>
              <p className="text-gray-500">{blogcard.desc}</p>
              <a
                href={blogcard.href}
                className="text-lg font-semibold flex gap-2 items-center justify-start text-blue-950 hover:text-blue-400"
              >
                <p>View More</p>+
              </a>
            </div>
          </div>
        ))}
      </div>
      {/*  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 mx-auto max-w-6xl mt-20">
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
    </section>
  );
}
