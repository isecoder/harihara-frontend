'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="fixed w-full z-10 bg-gradient-to-r from-white to-orange-100 shadow-lg">
        {/* Banner Image */}
        <div className="relative w-full h-56">
          <Image
            src="/banner.png"
            alt="Banner"
            layout="fill"
            objectFit="center"
            quality={100}
          />
        </div>

        {/* Navbar Container */}
        <div className="flex justify-end items-center mx-auto py-6 px-4 md:px-8">
          {/* Navbar Links - Visible on Large Screens */}
          <nav className="hidden md:flex justify-center flex-1 space-x-20 ">
            <Link href="/" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
              Home
            </Link>
            <Link href="/about" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
              About
            </Link>
            <Link href="/services" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
              Services
            </Link>
            <Link href="/contact" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
              Contact
            </Link>
            <Link href="/sevas" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
              Sevas
            </Link>
            <Link href="/donations" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
              Donations
            </Link>
            <Link href="/festivals" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
              Festivals
            </Link>
            <Link href="/gallery" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
              Gallery
            </Link>
          </nav>

          {/* Hamburger Icon - Visible on Small and Medium Screens */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="text-orange-500 text-2xl" />
            ) : (
              <FaBars className="text-orange-500 text-2xl" />
            )}
          </div>
        </div>

        {/* Dropdown Menu for Small and Medium Screens */}
        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:hidden flex-col items-center space-y-4 bg-gradient-to-r from-white to-orange-200 text-center py-6 shadow-md`}
        >
          <Link href="/" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
            Home
          </Link>
          <Link href="/about" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
            About
          </Link>
          <Link href="/services" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
            Services
          </Link>
          <Link href="/contact" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
            Contact
          </Link>
          <Link href="/sevas" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
            Sevas
          </Link>
          <Link href="/donations" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
            Donations
          </Link>
          <Link href="/festivals" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
            Festivals
          </Link>
          <Link href="/gallery" className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200">
            Gallery
          </Link>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="pt-[14rem]"></div>
    </>
  );
};

export default Navbar;
