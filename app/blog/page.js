"use client";
import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import { useState } from 'react'
import ScrollFadeIn from '@/components/ScrollFadeIn';
import SlideInPair from '@/components/SlideInPair';

import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  
  Calendar,
  Search,
 
  Eye,
  MessageSquare,
  ArrowRight,
  Play,
  X,
} from 'lucide-react';
import Footer from '@/components/Footer';


function Blog() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-white'>
      <Header/>

      <ScrollFadeIn>
      <div className="bg-white py-24 md:py-32 lg:py-48 flex items-center justify-center min-h-[50vh] dark:bg-gray-900 dark:text-white">
        {/* Adjusted padding and minimum height for responsiveness */}
        <div className="text-center px-4 pt-14">
          {/* Added text-center and horizontal padding */}
          <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 dark:text-white">
            News Standard
          </h1>
          {/* Responsive font sizes */}
          <h2 className="text-gray-500 text-lg sm:text-xl md:text-2xl mt-2 md:mt-3 font-bold">
            Home <span className="mx-2">|</span> News
          </h2>
          {/* Responsive font sizes and separator */}
        </div>
      </div>
      </ScrollFadeIn>
    
      
      <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 lg:p-36 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div className="w-full lg:w-2/3 space-y-8 md:space-y-10">
          {/* Blog Post 1 - Standard Image Post */}
          <div className="max-w-full mx-auto bg-white overflow-hidden border-2 border-gray-200 rounded-lg shadow-md">
            <div className="relative h-64 sm:h-80 md:h-96 w-full"> {/* Responsive image height */}
              <Image
                src="/members/b1.jpeg"
                alt="blog"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8"> {/* Responsive padding */}
              <a href="#" className="text-sm text-blue-600 font-semibold mb-2 inline-block">
                Business
              </a>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug"> {/* Responsive font sizes */}
                Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.
              </h2>
              <ul className="flex flex-wrap text-gray-500 text-xs sm:text-sm mt-3 gap-2 sm:gap-4"> {/* Responsive font size and gap */}
                <li className="flex items-center gap-1">
                  <Eye size={16} /> 232 Views
                </li>
                <li className="flex items-center gap-1">
                  <MessageSquare size={16} /> 35 Comments
                </li>
                <li className="flex items-center gap-1">
                  <Calendar size={16} /> 24th March 2019
                </li>
              </ul>
              <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed"> {/* Responsive font size and line height */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/members/h1.jpeg"
                    alt="author"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <a href="#" className="text-sm text-gray-700 hover:underline">
                    <span className="text-gray-500">by</span> Hetmayar
                  </a>
                </div>
                <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline text-sm"> {/* Responsive font size */}
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 2 - Video Post */}
          <div className="max-w-full mx-auto bg-white overflow-hidden border-2 border-gray-200 rounded-lg shadow-md">
            <div className="relative w-full h-auto aspect-video"> {/* Use aspect-video for responsive video container */}
              {/* Image with Play Button */}
              <img
                src="/members/b2.jpeg"
                alt="blog"
                className="w-full h-full object-cover rounded-t-lg" // Rounded top corners
              />
              <button
                onClick={() => setIsOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition rounded-t-lg" // Rounded top corners
              >
                <Play className="w-12 h-12 text-white bg-black/70 p-2 rounded-full" />
              </button>

              {/* Video Modal */}
              {isOpen && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
                  <div className="relative w-full max-w-3xl aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // IMPORTANT: Replace with actual YouTube embed URL
                      title="YouTube video"
                      allow="autoplay; encrypted-media; fullscreen" // Added fullscreen
                      className="w-full h-full rounded-lg shadow-xl"
                    ></iframe>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white text-black p-1.5 sm:p-2 rounded-full shadow-lg z-50" // Responsive positioning and padding
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6" /> {/* Responsive icon size */}
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 sm:p-6 md:p-8"> {/* Responsive padding */}
              <a href="#" className="text-sm text-blue-600 font-semibold mb-2 inline-block">
                Business
              </a>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </h2>
              <ul className="flex flex-wrap text-gray-500 text-xs sm:text-sm mt-3 gap-2 sm:gap-4">
                <li className="flex items-center gap-1">
                  <Eye size={16} /> 232 Views
                </li>
                <li className="flex items-center gap-1">
                  <MessageSquare size={16} /> 35 Comments
                </li>
                <li className="flex items-center gap-1">
                  <Calendar size={16} /> 24th March 2019
                </li>
              </ul>
              <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/members/h1.jpeg"
                    alt="author"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <a href="#" className="text-sm text-gray-700 hover:underline">
                    <span className="text-gray-500">by</span> Hetmayar
                  </a>
                </div>
                <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline text-sm">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 3 - Standard Image Post */}
          <div className="max-w-full mx-auto mb-10 bg-white overflow-hidden border-2 border-gray-200 rounded-lg shadow-md">
            <div className="relative h-64 sm:h-80 md:h-96 w-full"> {/* Responsive image height */}
              <Image
                src="/members/b3.jpeg"
                alt="blog"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8"> {/* Responsive padding */}
              <a href="#" className="text-sm text-blue-600 font-semibold mb-2 inline-block">
                Business
              </a>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                Magna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco
              </h2>
              <ul className="flex flex-wrap text-gray-500 text-xs sm:text-sm mt-3 gap-2 sm:gap-4">
                <li className="flex items-center gap-1">
                  <Eye size={16} /> 232 Views
                </li>
                <li className="flex items-center gap-1">
                  <MessageSquare size={16} /> 35 Comments
                </li>
                <li className="flex items-center gap-1">
                  <Calendar size={16} /> 24th March 2019
                </li>
              </ul>
              <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/members/h1.jpeg"
                    alt="author"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <a href="#" className="text-sm text-gray-700 hover:underline">
                    <span className="text-gray-500">by</span> Hetmayar
                  </a>
                </div>
                <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline text-sm">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          

          {/* Placeholder for the last three posts */}
          {/* I've re-used the same structure as the first post for simplicity and consistency */}

            {/* No image div for this example */}
            <div className="p-4 sm:p-6 md:p-8">
              <a href="#" className="text-sm text-blue-600 font-semibold mb-2 inline-block">
                Business
              </a>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </h2>
              <ul className="flex flex-wrap text-gray-500 text-xs sm:text-sm mt-3 gap-2 sm:gap-4">
                <li className="flex items-center gap-1">
                  <Eye size={16} /> 232 Views
                </li>
                <li className="flex items-center gap-1">
                  <MessageSquare size={16} /> 35 Comments
                </li>
                <li className="flex items-center gap-1">
                  <Calendar size={16} /> 24th March 2019
                </li>
              </ul>
              <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/members/h1.jpeg"
                    alt="author"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <a href="#" className="text-sm text-gray-700 hover:underline">
                    <span className="text-gray-500">by</span> Hetmayar
                  </a>
                </div>
                <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline text-sm">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 5 - Standard Image Post */}
          <div className="max-w-full mx-auto mb-10 bg-white overflow-hidden border-2 border-gray-200 rounded-lg shadow-md">
            <div className="relative h-64 sm:h-80 md:h-96 w-full">
              <Image
                src="/members/b2.jpeg"
                alt="blog"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <a href="#" className="text-sm text-blue-600 font-semibold mb-2 inline-block">
                Business
              </a>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                LMagna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco
              </h2>
              <ul className="flex flex-wrap text-gray-500 text-xs sm:text-sm mt-3 gap-2 sm:gap-4">
                <li className="flex items-center gap-1">
                  <Eye size={16} /> 232 Views
                </li>
                <li className="flex items-center gap-1">
                  <MessageSquare size={16} /> 35 Comments
                </li>
                <li className="flex items-center gap-1">
                  <Calendar size={16} /> 24th March 2019
                </li>
              </ul>
              <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/members/h1.jpeg"
                    alt="author"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <a href="#" className="text-sm text-gray-700 hover:underline">
                    <span className="text-gray-500">by</span> Hetmayar
                  </a>
                </div>
                <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline text-sm">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 6 - Standard Image Post */}
          <div className="max-w-full mx-auto mb-10 bg-white overflow-hidden border-2 border-gray-200 rounded-lg shadow-md">
            <div className="relative h-64 sm:h-80 md:h-96 w-full">
              <Image
                src="/members/b3.jpeg"
                alt="blog"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <a href="#" className="text-sm text-blue-600 font-semibold mb-2 inline-block">
                Business
              </a>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                Magna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco
              </h2>
              <ul className="flex flex-wrap text-gray-500 text-xs sm:text-sm mt-3 gap-2 sm:gap-4">
                <li className="flex items-center gap-1">
                  <Eye size={16} /> 232 Views
                </li>
                <li className="flex items-center gap-1">
                  <MessageSquare size={16} /> 35 Comments
                </li>
                <li className="flex items-center gap-1">
                  <Calendar size={16} /> 24th March 2019
                </li>
              </ul>
              <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/members/h1.jpeg"
                    alt="author"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <a href="#" className="text-sm text-gray-700 hover:underline">
                    <span className="text-gray-500">by</span> Hetmayar
                  </a>
                </div>
                <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline text-sm">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
          </div>
          
        <aside className="w-full lg:w-1/3 space-y-8 md:space-y-10 mt-8 lg:mt-0"> {/* Adjusted top margin for mobile, removed on desktop */}
          {/* About Me */}
          <div className="bg-white p-6 border-2 border-gray-200 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4 text-center text-black">About Me</h4>
            <div className="space-y-4 text-center">
              <Image src="/members/b4.jpeg" alt="About" width={160} height={160} className="mx-auto rounded-full" /> {/* Adjusted width/height, added rounded-full */}
              <h6 className="font-semibold text-lg text-black">Rosalina D. Willaimson</h6>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="flex justify-center gap-3 sm:gap-4 text-gray-500 text-xl">
                <Facebook className="hover:text-blue-600 cursor-pointer" />
                <Twitter className="hover:text-sky-500 cursor-pointer" />
                <Youtube className="hover:text-indigo-500 cursor-pointer" />
                <Linkedin className="hover:text-blue-700 cursor-pointer" />
                <Youtube className="hover:text-red-600 cursor-pointer" /> {/* Duplicate YouTube, consider if intentional */}
              </div>
            </div>
          </div>

          {/* Search Widget */}
          <div className="bg-white p-6 border-2 border-gray-200 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-black">Search Objects</h4>
            <form className="flex">
              <input
                type="text"
                placeholder="Search your keyword..."
                className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-blue-50 rounded-l-md" // Added focus styles and rounded corners
              />
              <button className="px-4 py-2 bg-blue-700 text-white flex items-center justify-center rounded-r-md hover:bg-blue-800 transition"> {/* Added padding, centering, and rounded corners */}
                <Search size={18} />
              </button>
            </form>
          </div>

          {/* Popular Feeds */}
          <div className="bg-white p-6 border-2 border-gray-200 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-black">Popular Feeds</h4>
            <div className="space-y-6">
              {[5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0"> {/* Added bottom border */}
                  <Image
                    src={`/members/b${i}.jpeg`}
                    alt="Feed"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover flex-shrink-0" // Added flex-shrink-0
                  />
                  <div>
                    <a href="#" className="text-md sm:text-lg font-bold text-black hover:underline leading-tight"> {/* Responsive font size and line height */}
                      Lorem ipsum dolor sit cing elit, sed do.
                    </a>
                    <p className="text-xs text-blue-400 flex items-center mt-1">
                      <Calendar className="mr-1 w-4 h-4" /> 24th March 2019
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-6 border-2 border-gray-200 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-black">Categories</h4>
            <ul className="space-y-2">
              {[
                ['Business', 26],
                ['Consultant', 30],
                ['Creative', 71],
                ['UI/UX', 56],
                ['Technology', 60],
              ].map(([name, count]) => (
                <li key={name} className="flex justify-between items-center text-md sm:text-lg bg-blue-900 text-white p-4 rounded-md"> {/* Responsive font size, added items-center, rounded-md */}
                  <a href="#" className="hover:underline">{name}</a>
                  <span className="bg-black text-white px-2 py-0.5 rounded-md text-sm">{count}</span> {/* Responsive padding and font size */}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="bg-white p-6 border-2 border-gray-200 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-black">Never Miss News</h4>
            <div className="flex gap-4 sm:gap-5 justify-center "> {/* Responsive gap */}
              <Facebook size={36} className="text-white cursor-pointer bg-blue-900 p-2 rounded-full hover:bg-blue-700 transition" /> {/* Increased size, padding, rounded-full, hover */}
              <Twitter size={36} className="text-white cursor-pointer bg-blue-900 p-2 rounded-full hover:bg-blue-700 transition" />
              <Facebook size={36} className="text-white cursor-pointer bg-blue-900 p-2 rounded-full hover:bg-blue-700 transition" /> {/* Duplicate, consider if intentional */}
              <Linkedin size={36} className="text-white cursor-pointer bg-blue-900 p-2 rounded-full hover:bg-blue-700 transition" />
              <Twitter size={36} className="text-white cursor-pointer bg-blue-900 p-2 rounded-full hover:bg-blue-700 transition" />
            </div>
          </div>

          {/* Twitter Feeds */}
          <div className="bg-white p-6 border-2 border-gray-200 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-black">Twitter Feeds</h4>
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="mb-6 flex gap-4 sm:gap-6 border-b border-gray-200 pb-4 last:border-b-0 last:mb-0"> {/* Responsive gap, added bottom border */}
                <Twitter className='text-blue-600 flex-shrink-0 mt-1' size={20}/> {/* Added flex-shrink-0, adjusted size and margin */}
                <div>
                  <ul className="text-sm text-blue-600 space-y-1 ">
                    <li><a href="#" className="hover:underline">Rescue - #Gutenberg ready @ wordpress</a></li>
                    <li><a href="#" className="hover:underline">Theme for Creative Bloggers available on</a></li>
                    <li><a href="#" className="hover:underline">@ ThemeForest https://t.co/2r1POjOjgV</a></li>
                    <li><a href="#" className="hover:underline">C… https://t.co/rDAnPyClu1</a></li>
                  </ul>
                  <div className="text-xs text-gray-600 mt-2 ">November 25, 2018</div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Feeds */}
          <div className="bg-white p-6 border-2 border-gray-200 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-black">Instagram Feeds</h4>
            <div className="grid grid-cols-3 gap-3 sm:gap-4"> {/* Responsive gap */}
              {[...Array(9)].map((_, i) => (
                <a key={i} href="#">
                  <Image
                    src={`/members/i${i + 1}.png`}
                    alt={`instagram-${i + 1}`}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full aspect-square rounded-md" // Added aspect-square and rounded-md
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Tags Widget */}
          <div className="bg-white p-6 border-2 border-gray-200 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-black">Popular Tags</h4>
            <div className="flex flex-wrap gap-2 text-center justify-center items-center"> {/* Responsive gap */}
              {[
                'Popular', 'design', 'ux', 'usability', 'develop',
                'icon', 'business', 'consult', 'kit', 'keyboard',
                'mouse', 'tech',
              ].map((tag) => (
                <a key={tag} href="#" className="bg-blue-50 px-3 py-1 text-sm text-gray-800 hover:bg-blue-600 hover:text-white rounded-md transition-colors"> {/* Added rounded-md and transition */}
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Ad Widget */}
          <div className="relative bg-white p-0 border-2 border-gray-200 overflow-hidden rounded-lg shadow-md">
            <Image src="/members/image.png" alt="Ad Banner" width={350} height={600} className="w-full h-auto object-cover" /> {/* Adjusted height to auto for responsiveness */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4"> {/* Responsive padding */}
              <div className='bg-blue-600 p-3 sm:p-4 text-center rounded-md'> {/* Responsive padding and rounded-md */}
                <span className="text-base sm:text-lg font-semibold">350x600</span> {/* Responsive font size */}
                <h5 className="text-2xl sm:text-3xl font-bold mt-1 sm:mt-2">Ad Banner</h5> {/* Responsive font size and margin */}
              </div>
            </div>
          </div>
        </aside>
                
      </div>
      </div>
          
      <Footer/>
    </div>
  )
}

export default Blog
