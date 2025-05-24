'use client'; 

import Image from 'next/image';
import Link from 'next/link';

// Import Lucide icons
import {
  X,
  Search,
  ShoppingCart,
  Plus,
  Menu,
  ArrowRight
} from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed bg-white shadow-md z-50 w-full">
      <div>
        <div className="flex items-center justify-between px-4 container-1470 mx-auto">
          {/* Header Left - Logo */}
          <div className="header-left m-8">
            <div className="site-logo">
              <Link href="/">
                <Image src="/logo.jpeg" alt="Omnivus" width={150} height={40} />
              </Link>
            </div>
          </div>

          {/* Header Right */}
          <div className="header-right flex items-center justify-end space-x-5 w-full lg:w-auto pr-4">
            {/* Site Nav Menu (Always visible on large screens, hidden on small screens) */}
            <div className="site-nav-menu hidden lg:block relative w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-40">
              <ul className="primary-menu flex flex-col lg:flex-row lg:space-x-8 p-4 text-lg">
                {/* Home */}
                <li className="relative group lg:current"> {/* 'current' class for active state */}
                  <Link href="/" className="block py-2 lg:py-0 text-gray-800 hover:text-blue-600 font-semibold">
                    Home
                  </Link>
                  
                  {/* Plus icon for main submenu (mobile only, static) */}
                  <span className="dd-trigger absolute right-2 top-1/2 -translate-y-1/2 lg:hidden">
                    <Plus size={16} color="currentColor" />
                  </span>
                </li>


                {/* Services */}
                <li className="relative group">
                  <Link href="/services" className="block py-2 lg:py-0 text-gray-800 hover:text-blue-600 font-semibold">
                    Services
                  </Link>
                  
                  <span className="dd-trigger absolute right-2 top-1/2 -translate-y-1/2 lg:hidden">
                    <Plus size={16} color="currentColor" />
                  </span>
                </li>


                {/* Blog */}
                <li className="relative group">
                  <Link href="/blog" className="block py-2 lg:py-0 text-gray-800 hover:text-blue-600 font-semibold">
                    Blog
                  </Link>
                  <span className="dd-trigger absolute right-2 top-1/2 -translate-y-1/2 lg:hidden">
                    <Plus size={16} color="currentColor" />
                  </span>
                </li>

              </ul>
              {/* Mobile Close Button - always hidden as there's no JS to show the menu */}
              <a href="#" className="nav-close absolute top-4 right-4 hidden text-gray-600 hover:text-gray-900">
                <X size={24} color="currentColor" />
              </a>
            </div>

            {/* Header icons */}
            <div className="header-extra flex items-center space-x-8">
              <div className="shoping-mini-cart">
                <a href="#" className="cart-icon text-gray-600 hover:text-blue-600">
                  <ShoppingCart size={20} color="currentColor" />
                </a>
              </div>
              <div className="search-widget relative">
                <a href="#" className="search-icon text-gray-600 hover:text-blue-600">
                  <Search size={20} color="currentColor" />
                </a>
                {/* Search */}
                <div className="search-form absolute top-full right-0 bg-white shadow-lg p-4 rounded-md w-64 hidden">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input type="search" placeholder="Type keywords & hit enter" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </form>
                  <a href="#" className="search-close absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                    <X size={20} color="currentColor" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center h-8 w-8">
                <Menu size={30} color="blue" />
              </div>
              <div className="navbar-btn">
                <a href="#" className="inline-flex items-center px-6 py-5 bg-blue-700 text-white text-sm font-semibold rounded-md hover:bg-white transition-colors duration-300 border-2 border-blue-700 hover:text-blue-600">
                  Free Consulting <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;