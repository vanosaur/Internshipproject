import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Optimized image component for Next.js
import { ChevronRight } from 'lucide-react'; // For the arrow icons

const footerNavLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#" },
  { name: "About", href: "#" },
  { name: "Career", href: "#" },
  { name: "Refund", href: "#" },
  { name: "Terms", href: "#" },
  { name: "Details", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Business", href: "#" },
  { name: "Affiliate", href: "#" },
];

const Footer = () => {
  // Split the links into two columns for the 'Pages' section
  const firstColumnLinks = footerNavLinks.slice(0, Math.ceil(footerNavLinks.length / 2));
  const secondColumnLinks = footerNavLinks.slice(Math.ceil(footerNavLinks.length / 2));

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 sm:py-16 md:py-20"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 pb-8 sm:pb-10 border-b border-gray-700"> 

          {/* About Widget */}
          {/* On small/medium screens, it takes full width; on large, 1 column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left"> 
            <div className="widget about-widget mb-6">
              <div className="logo mb-4">
                <h1 className='text-white text-3xl sm:text-4xl font-bold'>OmniVus</h1> 
              </div>
              <p className="text-sm sm:text-base leading-relaxed mb-3"> 
                The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has changed too, as have the things that we bring to our community conferences, books, and our membership added to the online magazine.
              </p>
              <p className="text-sm sm:text-base leading-relaxed"> 
                One thing that hasn’t changed is that we’re a small team — with most of us not working
              </p>
            </div>
          </div>

          {/* Pages Widget */}
          {/* On small/medium screens, it takes full width; on large, 1 column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left"> 
            <div className="widget nav-widget">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Pages</h4> 
              <div className="footer-list flex flex-wrap justify-center md:justify-start gap-x-8 sm:gap-x-12 gap-y-4"> 
                <ul className="space-y-2">
                  {firstColumnLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="flex items-center justify-center md:justify-start text-sm sm:text-base hover:text-blue-400 transition-colors"> 
                        <ChevronRight size={16} className="mr-2" /> {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {secondColumnLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="flex items-center justify-center md:justify-start text-sm sm:text-base hover:text-blue-400 transition-colors"> 
                        <ChevronRight size={16} className="mr-2" /> {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Working Hours Widget */}
          {/* On small/medium screens, it takes full width; on large, 2 columns */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 text-center md:text-left"> 
            <div className="widget contact-widget">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Working Hours</h4> 
              <ul className="text-sm sm:text-base space-y-2 mb-4"> 
                <li>Monday - Friday: 7:00 - 17:00</li>
                <li>Saturday: 7:00 - 12:00</li>
                <li>Sunday and holidays: 8:00 - 10:00</li>
              </ul>
              <p className="text-sm sm:text-base leading-relaxed mb-4"> 
                <span className="font-semibold text-white">For more than 30 years,<br/>
                  </span> IT Service has been a reliable partner in the field of logistics and cargo forwarding.
              </p>
              <Link href="#" className="inline-flex items-center text-blue-400 hover:text-blue-500 font-semibold transition-colors text-sm sm:text-base"> 
                <ChevronRight size={16} className="mr-2" /> Discover More
              </Link>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-copyright text-center pt-6 sm:pt-8 text-gray-400 text-xs sm:text-sm"> 
          <p>
            Copyright By@ <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">WebTend</a> - 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;