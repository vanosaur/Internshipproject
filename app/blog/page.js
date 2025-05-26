"use client";
import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import { useState } from 'react'
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
    <div>
      <Header/>
        <div className="bg-white py-24 md:py-32 lg:py-48 flex items-center justify-center min-h-[50vh]">
          {/* Adjusted padding and minimum height for responsiveness */}
          <div className="text-center px-4 pt-14">
            {/* Added text-center and horizontal padding */}
            <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2">
              News Standard
            </h1>
            {/* Responsive font sizes */}
            <h2 className="text-gray-500 text-lg sm:text-xl md:text-2xl mt-2 md:mt-3 font-bold">
              Home <span className="mx-2">|</span> News
            </h2>
            {/* Responsive font sizes and separator */}
          </div>
        </div>
    
        <div className='bg-white py-10 flex pl-40'>
        <div>
        <div className="max-w-3xl mx-auto mb-10 bg-white overflow-hidden border-2 border-gray-200">
        <div className="relative h-[460px] w-full">
        <Image
          src="/members/b1.jpeg"
          alt="blog"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <a href="#" className="text-sm text-blue-600 font-semibold mb-2 inline-block">
          Business
        </a>
        <h2 className="text-2xl font-bold text-gray-900 leading-snug">
          Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.
        </h2>
        <ul className="flex flex-wrap text-gray-500 text-sm mt-3 gap-4">
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
        <p className="text-gray-600 mt-4">
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
          <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline">
            Read More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    
        </div>

        <div className="max-w-3xl mx-auto mb-10 bg-white overflow-hidden border-2 border-gray-200">
        <div className="relative max-w-6xl max-w-xl mx-auto">
      {/* Image with Play Button */}
      <img
        src="/members/b2.jpeg"
        alt="blog"
        className="w-full h-auto object-cover rounded-lg"
      />
      <button
        onClick={() => setIsOpen(true)}
        className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition rounded-lg"
      >
        <Play className="w-12 h-12 text-white bg-black/70 p-2 rounded-full" />
      </button>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/t8mvutAh4AE?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-xl"
            ></iframe>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 bg-white text-black p-1 rounded-full shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
      <div className="p-6">
        <a href="#" className="text-sm text-blue-600 font-semibold mb-2 inline-block">
          Business
        </a>
        <h2 className="text-2xl font-bold text-gray-900 leading-snug">
            Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </h2>
        <ul className="flex flex-wrap text-gray-500 text-sm mt-3 gap-4">
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
        <p className="text-gray-600 mt-4">
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
          <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline">
            Read More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    
        </div>

        <div className="max-w-3xl mx-auto mb-10 bg-white overflow-hidden border-2 border-gray-200">
        <div className="relative h-[460px] w-full">
        <Image
          src="/members/b3.jpeg"
          alt="blog"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <a href="#" className="text-sm text-blue-600 font-semibold mb-2 inline-block">
          Business
        </a>
        <h2 className="text-2xl font-bold text-gray-900 leading-snug">
        Magna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco
        </h2>
        <ul className="flex flex-wrap text-gray-500 text-sm mt-3 gap-4">
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
        <p className="text-gray-600 mt-4">
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
          <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline">
            Read More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    
        </div>

        <div className="max-w-3xl mx-auto mb-10 bg-white overflow-hidden border-2 border-gray-200">
        
      <div className="p-6">
        <a href="#" className="text-sm text-blue-600 font-semibold mb-2 inline-block">
          Business
        </a>
        <h2 className="text-2xl font-bold text-gray-900 leading-snug">
        In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </h2>
        <ul className="flex flex-wrap text-gray-500 text-sm mt-3 gap-4">
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
        <p className="text-gray-600 mt-4">
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
          <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline">
            Read More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    
        </div>

        <div className="max-w-3xl mx-auto mb-10 bg-white overflow-hidden border-2 border-gray-200">
        <div className="relative h-[460px] w-full">
        <Image
          src="/members/b2.jpeg"
          alt="blog"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <a href="#" className="text-sm text-blue-600 font-semibold mb-2 inline-block">
          Business
        </a>
        <h2 className="text-2xl font-bold text-gray-900 leading-snug">
          LMagna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco
        </h2>
        <ul className="flex flex-wrap text-gray-500 text-sm mt-3 gap-4">
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
        <p className="text-gray-600 mt-4">
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
          <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline">
            Read More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    
        </div>

        <div className="max-w-3xl mx-auto mb-10 bg-white overflow-hidden border-2 border-gray-200">
        <div className="relative h-[460px] w-full">
        <Image
          src="/members/b3.jpeg"
          alt="blog"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <a href="#" className="text-sm text-blue-600 font-semibold mb-2 inline-block">
          Business
        </a>
        <h2 className="text-2xl font-bold text-gray-900 leading-snug">
        Magna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco
        </h2>
        <ul className="flex flex-wrap text-gray-500 text-sm mt-3 gap-4">
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
        <p className="text-gray-600 mt-4">
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
          <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline">
            Read More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    
        </div>
        </div>


       
          <aside className="w-full lg:w-1/3 px-4 space-y-10">
            {/* About Me */}
            <div className="bg-white p-6 border-2 border-gray-200">
              <h4 className="text-xl font-bold mb-4 text-center text-black">About Me</h4>
              <div className="space-y-4 text-center">
                <Image src="/members/b4.jpeg" alt="About" width={200} height={200} className="mx-auto" />
                <h6 className="font-semibold text-lg text-black">Rosalina D. Willaimson</h6>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex justify-center gap-4 text-gray-500 text-xl">
                  <Facebook className="hover:text-blue-600 cursor-pointer" />
                  <Twitter className="hover:text-sky-500 cursor-pointer" />
                  <Youtube className="hover:text-indigo-500 cursor-pointer" />
                  <Linkedin className="hover:text-blue-700 cursor-pointer" />
                  <Youtube className="hover:text-red-600 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Search Widget */}
            <div className="bg-white p-6 border-2 border-gray-200">
              <h4 className="text-xl font-semibold mb-4 text-black">Search Objects</h4>
              <form className="flex">
                <input
                  type="text"
                  placeholder="Search your keyword..."
                  className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none bg-blue-50"
                />
                <button className="px-4 bg-blue-700 text-white flex items-center">
                  <Search size={18} />
                </button>
              </form>
            </div>

            {/* Popular Feeds */}
            <div className="bg-white p-6 border-2 border-gray-200">
              <h4 className="text-xl font-semibold mb-4 text-black p-2">Popular Feeds</h4>
              <div className="space-y-6">
                {[5, 6, 7, 8].map((i) => (
                  <div key={i} className="flex items-start gap-4 p-2">
                    <Image
                      src={`/members/b${i}.jpeg`}
                      alt="Feed"
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <a href="#" className="text-md font-bold text-black hover:underline">
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
            <div className="bg-white p-6 border-2 border-gray-200">
              <h4 className="text-xl font-semibold mb-4 text-black">Categories</h4>
              <ul className="space-y-2">
                {[
                  ['Business', 26],
                  ['Consultant', 30],
                  ['Creative', 71],
                  ['UI/UX', 56],
                  ['Technology', 60],
                ].map(([name, count]) => (
                  <li key={name} className="flex justify-between text-md bg-blue-900 p-6">
                    <a href="#">{name}</a>
                    <span className="bg-black text-white px-2">{count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="bg-white p-6 border-2 border-gray-200">
              <h4 className="text-xl font-semibold mb-4 text-black">Never Miss News</h4>
              <div className="flex gap-5 justify-center ">
                <Facebook size={30} className="text-white cursor-pointer bg-blue-900 p-1" />
                <Twitter size={30} className="text-white cursor-pointer bg-blue-900 p-1" />
                <Facebook size={30} className="text-white cursor-pointer bg-blue-900 p-1" />
                <Linkedin size={30} className="text-white cursor-pointer bg-blue-900 p-1" />
                <Twitter size={30} className="text-white cursor-pointer bg-blue-900 p-1" />
              </div>
            </div>

            {/* Twitter Feeds */}
            <div className="bg-white p-6 border-2 border-gray-200 ">
              <h4 className="text-xl font-semibold mb-4 text-black">Twitter Feeds</h4>
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="mb-6 ml-8 flex gap-8">
                  <Twitter className='text-blue-600'/>
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
            <div className="bg-white p-6 border-2 border-gray-200">
              <h4 className="text-xl font-semibold mb-4 text-black">Instagram Feeds</h4>
              <div className="grid grid-cols-3 gap-4 p-6">
                {[...Array(9)].map((_, i) => (
                  <a key={i} href="#">
                    <Image
                      src={`/members/i${i + 1}.png`}
                      alt={`instagram-${i + 1}`}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Tags Widget */}
            <div className="bg-white p-6 border-2 border-gray-200">
              <h4 className="text-xl font-semibold mb-4 text-black">Popular Tags</h4>
              <div className="flex flex-wrap gap-2 p-2 text-center justify-center items-center">
                {[
                  'Popular',
                  'design',
                  'ux',
                  'usability',
                  'develop',
                  'icon',
                  'business',
                  'consult',
                  'kit',
                  'keyboard',
                  'mouse',
                  'tech',
                ].map((tag) => (
                  <a key={tag} href="#" className="bg-blue-50 px-3 py-1 text-sm text-gray-800 hover:bg-blue-600 hover:text-white">
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Ad Widget */}
            <div className="relative bg-white p-0 border-2 border-gray-200 overflow-hidden">
              <Image src="/members/image.png" alt="Ad Banner" width={350} height={600} className="w-full" />
              <div className="absolute inset-0 bg-black-30 bg-opacity-50 flex flex-col justify-center items-center text-white">
                <div className='bg-blue-600 p-4 text-center'>
                <span className="text-lg font-semibold">350x600</span>
                <h5 className="text-3xl font-bold mt-2">Ad Banner</h5>
                </div>
              </div>
            </div>
          </aside>
        </div>
          

      <Footer/>
  
  

</div>
  )
}

export default Blog
