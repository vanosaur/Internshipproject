"use client";
import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import ScrollFadeIn from '@/components/ScrollFadeIn';
import SlideInPair from '@/components/SlideInPair';


import { Eye, Gavel, MapPin, Globe, Laptop2, Umbrella } from "lucide-react";

const pricingData = {
  monthly: [
    { name: "Early Birds", price: 9, duration: "Per Month" },
    { name: "Team", price: 32, duration: "Per Month" },
    { name: "Personal", price: 69, duration: "Per Month" },
    { name: "Plutinum", price: 99, duration: "Per Month" },
  ],
  yearly: [
    { name: "Early Birds", price: 56, duration: "Per Year" },
    { name: "Team", price: 99, duration: "Per Year" },
    { name: "Personal", price: 133, duration: "Per Year" },
    { name: "Plutinum", price: 599, duration: "Per Year" },
  ],
};

function Services() {
  const [activeTab, setActiveTab] = useState("monthly");

  const services = [
    {
      title: "UI/UX Design",
      icon: <Eye className="w-8 h-8" />,
      image: "/members/s1.jpeg",
      description:
        "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
    },
    {
      title: "IT Consultancy",
      icon: <Gavel className="w-8 h-8" />,
      image: "/members/s2.jpeg",
      description:
        "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
    },
    {
      title: "Technology Prof.",
      icon: <MapPin className="w-8 h-8" />,
      image: "/members/s3.jpeg",
      description:
        "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
    },
    {
      title: "Web Development",
      icon: <Globe className="w-8 h-8" />,
      image: "/members/s4.jpeg",
      description:
        "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
    },
    {
      title: "Web Development",
      icon: <Laptop2 className="w-8 h-8" />,
      image: "/members/s5.jpeg",
      description:
        "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
    },
    {
      title: "Game Design",
      icon: <Umbrella className="w-8 h-8" />,
      image: "/members/s6.jpeg",
      description:
        "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <Header />
      
      <ScrollFadeIn>
      <div className="bg-white py-24 md:py-32 lg:py-48 flex items-center justify-center min-h-[50vh] dark:bg-gray-900 dark:text-white">
        {/* Adjusted padding and minimum height for responsiveness */}
        <div className="text-center px-4 pt-14">
          {/* Added text-center and horizontal padding */}
          <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 dark:text-white">
            Services
          </h1>
          {/* Responsive font sizes */}
          <h2 className="text-gray-500 text-lg sm:text-xl md:text-2xl mt-2 md:mt-3 font-bold">
            Home <span className="mx-2">|</span> Services
          </h2>
          {/* Responsive font sizes and separator */}
        </div>
      </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
      <section className="pb-16 sm:pb-20 md:pb-24 bg-white lg:pl-40 lg:pr-40 dark:bg-gray-900 dark:text-white" > {/* Responsive vertical padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Responsive horizontal padding */}
        <div className="flex flex-wrap justify-center -m-4"> {/* Negative margin to counteract p-4 on columns */}
          {services.map((service, index) => (
            <div
              key={index}
              // Responsive width for columns:
              // w-full on mobile
              // sm:w-1/2 on small screens (2 per row)
              // lg:w-1/3 on large screens (3 per row)
              // xl:w-1/4 on extra large screens (4 per row - if you have more items)
              className="w-full sm:w-1/2 lg:w-1/3 p-4"
            >
              <div className="relative overflow-hidden shadow-lg group">
                <div className="h-64 relative"> {/* Fixed height for consistency */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                  <div className="mb-3">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2 text-center">
                    <a href="#" className="hover:underline">
                      {service.title}
                    </a>
                  </h4>
                  <p className="text-sm text-center">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ScrollFadeIn>
    

    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-blue-50 dark:bg-gray-900 dark:text-white">
      {/* Container to limit width and add responsive horizontal padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header and Toggle Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 sm:mb-10 md:mb-12 text-center md:text-left">
          <div className="max-w-xl">
            {/* Responsive font size for 'PLANS' text */}
            <span className="text-blue-600 font-semibold text-sm sm:text-base">
              PLANS ______
            </span>
            {/* Responsive font sizes for main heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2 text-black dark:text-white">
              Here are our plans
            </h2>
          </div>
          <div className="mt-6 md:mt-0"> {/* Adjust top margin for mobile, remove on desktop */}
            {/* Flexbox for buttons: stack on small, side-by-side on medium */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 bg-white p-2 sm:p-3 rounded-md shadow-sm">
              <button
                className={`px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-md font-semibold rounded-md transition-all ${
                  activeTab === "monthly"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-blue-600"
                }`}
                onClick={() => setActiveTab("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-md font-semibold rounded-md transition-all ${
                  activeTab === "yearly"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-blue-600"
                }`}
                onClick={() => setActiveTab("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        {/* Responsive grid columns: 1 on mobile, 2 on small, 3 on large, 4 on extra-large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {pricingData[activeTab].map((plan, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-60 p-6 sm:p-8 md:p-10 lg:p-12 h-full flex flex-col justify-between items-center text-center text-black hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-lg shadow-md hover:shadow-lg"
            >
              {/* Responsive font sizes for plan name */}
              <p className="text-xs sm:text-sm font-semibold text-blue-600 group-hover:text-white">
                {plan.name}
              </p>
              {/* Responsive font sizes for price */}
              <h4 className="text-xl sm:text-2xl font-bold mt-4 group-hover:text-white">
                ${" "}
                <span className="text-5xl sm:text-6xl group-hover:text-white">
                  {plan.price}
                </span>
              </h4>
              {/* Responsive font size for duration */}
              <span className="text-xs sm:text-sm text-gray-400 mt-2 group-hover:text-white">
                {plan.duration}
              </span>
              <span className="text-gray-400 my-4 group-hover:text-white dark:text-white">
                _____
              </span>
              {/* Responsive font size for description, flex-grow for consistent height */}
              <p className="text-xs sm:text-sm mb-6 text-gray-400 group-hover:text-white flex-grow dark:text-white">
                The functional goal of technical content is to help people use
                a product successfully.
              </p>
              {/* Responsive padding for button, added rounded corners and shadow */}
              <a
                href="#"
                className="inline-block mt-auto bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-md group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                Purchase Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

      
    <section className="latest-news bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24"> {/* Adjusted vertical padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Responsive horizontal padding */}
        <div className="flex justify-center">
          <div className="text-center max-w-xl mb-8 sm:mb-10 md:mb-12"> {/* Adjusted bottom margin */}
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">News Feeds</h2> {/* Responsive font sizes */}
            <p className="text-gray-400 text-sm sm:text-base"> {/* Responsive font size */}
              Does any industry face a more complex audience journey and marketing sales process than B2B technology.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"> {/* Responsive grid and gaps */}
          {[1, 2, 3].map((imgNum, index) => ( // Using static numbers for example images
            <div key={index} className="bg-white bg-opacity-5 transition p-4 sm:p-6 group rounded-lg"> {/* Responsive padding */}
              {/* Image with fixed aspect ratio, consider responsive sizing for Image if needed */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 mb-4 rounded-md overflow-hidden">
                <Image
                  src={`/members/h${imgNum}.jpeg`} // Ensure these paths are correct
                  alt="News"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="post-content">
                <span className="text-blue-400 group-hover:text-white text-xs sm:text-sm font-medium">Design/SEO</span> {/* Responsive font size */}
                <h5 className="text-lg sm:text-xl font-semibold text-white mt-2 group-hover:underline"> {/* Responsive font size */}
                  <a href="blog-details.html">A series of iOS 7 inspired vector icons.</a>
                </h5>
              </div>
              <a
                href="blog-details.html"
                className="inline-block text-blue-400 group-hover:text-white mt-3 text-lg sm:text-xl transition" /* Responsive font size */
              >
                {/* Ensure you have FontAwesome or similar setup for 'fa-long-arrow-right' if not using Lucide */}
                <i className="fal fa-long-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>


    <Footer/>

    </div>
  );
}

export default Services;
