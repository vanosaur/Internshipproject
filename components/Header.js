'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

import {
  X,
  Search,
  ShoppingCart,
  Menu,
  ArrowRight,
  Sun,
  Moon,
} from 'lucide-react';

const Header = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed w-full z-50 shadow-md ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex items-center justify-between px-4 mx-auto sm:px-6">
        {/* Left - Logo */}
        <div className="my-4 md:my-6">
          <Link href="/">
            <Image src="/logo.jpeg" alt="Omnivus" width={150} height={40}/>
          </Link>
        </div>

        {/* Right - Navigation and icons */}
        <div className="flex items-center space-x-6">
          {/* Desktop nav */}
          <ul className="hidden lg:flex space-x-8 text-lg font-semibold">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
            <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          </ul>

          {/* Dark Mode Toggle */}
          <button onClick={() => dispatch(toggleTheme())}>
            {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Icons */}
          <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-white">
            <ShoppingCart size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-white">
            <Search size={20} />
          </a>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-blue-600">
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* CTA button (only on large screens) */}
          <a
            href="#"
            className="hidden lg:inline-flex items-center px-6 py-2 bg-blue-700 text-white text-sm font-semibold rounded-md hover:bg-white hover:text-blue-600 border-2 border-blue-700 transition"
          >
            Free Consulting <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-lg font-semibold">
            <li><Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Services</Link></li>
            <li><Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Blog</Link></li>
            <li>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-blue-700 text-white text-sm font-semibold rounded-md hover:bg-white hover:text-blue-600 border-2 border-blue-700 transition"
              >
                Free Consulting <ArrowRight size={16} className="ml-2" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
