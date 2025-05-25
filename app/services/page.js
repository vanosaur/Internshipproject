"use client";
import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";

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
    <div>
      <Header />
      <div className="bg-blue-50 py-24 md:py-32 lg:py-48 flex items-center justify-center min-h-[50vh]">
        {" "}
        {/* Adjusted padding and minimum height for responsiveness */}
        <div className="text-center px-4">
          {" "}
          {/* Added text-center and horizontal padding */}
          <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2">
            Services
          </h1>{" "}
          {/* Responsive font sizes */}
          <h2 className="text-gray-500 text-lg sm:text-xl md:text-2xl mt-2 md:mt-3 font-bold">
            Home <span className="mx-2">|</span> Services
          </h2>{" "}
          {/* Responsive font sizes and separator */}
        </div>
      </div>

      <section className="pt-20 pb-24 bg-white p-40">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap justify-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 p-4"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                  <div className="h-64 relative">
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
                    <h4 className="text-xl font-semibold mb-2">
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

      <section className="py-16 bg-blue-50 p-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="max-w-xl">
              <span className="text-blue-600 font-semibold text-md">
                PLANS ______
              </span>
              <h2 className="text-5xl font-extrabold mt-2 text-black">
                Here is plans
              </h2>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="flex space-x-4 bg-white p-3">
                <button
                  className={`px-6 py-4 text-md font-semibold transition-all ${
                    activeTab === "monthly"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600"
                  }`}
                  onClick={() => setActiveTab("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={`px-6 py-4 text-md font-semibold transition-all ${
                    activeTab === "yearly"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600"
                  }`}
                  onClick={() => setActiveTab("yearly")}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingData[activeTab].map((plan, index) => (
              <div
                key={index}
                className="group bg-white bg-opacity-60 p-16 h-full flex flex-col justify-between text-center text-black hover:bg-blue-600 hover:text-white transition-colors"
              >
                <p className="text-sm font-semibold text-blue-600 group-hover:text-white">
                  {plan.name}
                </p>
                <h4 className="text-2xl font-bold mt-4 group-hover:text-white">
                  ${" "}
                  <span className="text-6xl group-hover:text-white">
                    {plan.price}
                  </span>
                </h4>
                <span className="text-sm text-gray-400 mt-2 group-hover:text-white">
                  {plan.duration}
                </span>
                <span className="text-gray-400 mb-4 group-hover:text-white">
                  _____
                </span>
                <p className="text-sm mb-4 text-gray-400 group-hover:text-white">
                  The functional goal of technical content is to help people use
                  a product successfully.
                </p>
                <a
                  href="#"
                  className="inline-block mt-auto bg-white text-blue-600 font-semibold px-4 py-2 group-hover:bg-white group-hover:text-blue-600 transition"
                >
                  Purchase Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="latest-news section-gap bg-gray-900 py-16 p-40">
        <div className="container mx-auto px-4">
            <div className="flex justify-center">
            <div className="text-center max-w-xl mb-10">
                <h2 className="text-white text-3xl font-bold mb-4">News Feeds</h2>
                <p className="text-gray-400">
                Does any industry face a more complex audience journey and marketing sales process than B2B technology.
                </p>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((imgNum, index) => (
                <div key={index} className="bg-white bg-opacity-5  transition p-4 group rounded-lg">
                <img
                    src={`/members/h${imgNum}.jpeg`}
                    alt="News"
                    className="w-full rounded-md mb-4"
                />
                <div className="post-content">
                    <span className="text-blue-400 group-hover:text-white text-sm font-medium">Design/SEO</span>
                    <h5 className="text-lg font-semibold text-white mt-2 group-hover:underline">
                    <a href="blog-details.html">A series of iOS 7 inspired vector icons.</a>
                    </h5>
                </div>
                <a
                    href="blog-details.html"
                    className="inline-block text-blue-400 group-hover:text-white mt-3 text-xl transition"
                >
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
