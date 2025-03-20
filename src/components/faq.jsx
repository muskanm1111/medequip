"use client";

import {  useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function Faq({className} ) {

  const [activeItem, setActiveItem] = useState("item-1"); 
  
  const faqItems = [
    {
      id: "item-1",
      question: "What types of machinery and equipment do you rent?",
      answer:
        "We offer a wide range of machinery and equipment including construction equipment, industrial tools, and heavy machinery. Our inventory includes excavators, loaders, forklifts, generators, and more.",
    },
    {
      id: "item-2",
      question: "How do I make a rental reservation?",
      answer:
        "You can make a rental reservation by calling our customer service line, visiting one of our locations, or using our online reservation system. We recommend booking in advance to ensure availability, especially for specialized equipment.",
    },
    {
      id: "item-3",
      question: "What is the rental period for your equipment?",
      answer:
        "Our rental periods are flexible and can be customized to your needs. We offer daily, weekly, and monthly rental options. For long-term projects, we also provide extended rental agreements with special rates.",
    },
    {
      id: "item-4",
      question: "Do you offer delivery and pickup services?",
      answer:
        "Yes, we offer delivery and pickup services for all our equipment. Delivery fees are based on distance and equipment size. We can arrange for convenient delivery times to match your project schedule.",
    },
    {
      id: "item-5",
      question:
        "What should I do if the equipment malfunctions during the rental period?",
      answer:
        "If you experience any issues with the equipment, contact our 24/7 support line immediately. We'll either guide you through troubleshooting or arrange for a replacement. All our equipment is regularly maintained, but in case of unexpected issues, we ensure minimal downtime for your project.",
    },
  ];

  const handleAccordionChange = (value) => {
    setActiveItem(value);
  };

  return (
    <div className={`bg-violet-50 py-20  ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-muted-foreground">
                FAQS
              </h3>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Common Inquiries{" "}
                <span className="block lg:inline">
                  and <span className="text-violet-500">Solutions</span>
                </span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec
            </p>
            <div>
              <button className="px-4 text-lg z-30 py-2 bg-violet-400 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-violet-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#8b5cf6;] hover:[text-shadow:2px_2px_2px_#8b5cf6] ">
                See More FAQ&apos;s
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <Accordion
              type="single"
              defaultValue="item-1"
              className="w-full"
              onValueChange={handleAccordionChange}
            >
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border rounded-lg overflow-hidden"
                >
                  <AccordionTrigger
                    className={`px-6 py-4 hover:no-underline ${
                      activeItem === item.id
                        ? "bg-violet-500 text-white hover:bg-violet-500 data-[state=open]:bg-violet-500"
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-left font-medium text-lg">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
