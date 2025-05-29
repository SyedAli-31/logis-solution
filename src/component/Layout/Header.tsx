'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#000000DE] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/">
            <Image src="/logix logo.png" alt="Logix Solutions Logo" width={130} height={40} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 text-gray-700 text-sm font-medium">
            <Link href="/" className="hover:text-[#7A3EE1] transition">Home</Link>
            <Link href="/about" className="hover:text-[#7A3EE1] transition">About Us</Link>
            <Link href="/services" className="hover:text-[#7A3EE1] transition">Services</Link>
            <Link href="/clients" className="hover:text-[#7A3EE1] transition">Clients</Link>
            <Link href="/careers" className="hover:text-[#7A3EE1] transition">Careers</Link>
            <Link href="/contact" className="hover:text-[#7A3EE1] transition">Contact Us</Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex space-x-3">
            <Link href="/hire">
              <button className="bg-[#7A3EE1] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#5e2db8] transition">
                Hire Now
              </button>
            </Link>
            <Link href="/proposal">
              <button className="border border-[#7A3EE1] text-[#7A3EE1] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#7A3EE1] hover:text-white transition">
                Request Proposal
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 space-y-2 pb-4 text-sm text-gray-700">
            <Link href="/" className="block hover:text-[#7A3EE1]">Home</Link>
            <Link href="/about" className="block hover:text-[#7A3EE1]">About Us</Link>
            <Link href="/services" className="block hover:text-[#7A3EE1]">Services</Link>
            <Link href="/clients" className="block hover:text-[#7A3EE1]">Clients</Link>
            <Link href="/careers" className="block hover:text-[#7A3EE1]">Careers</Link>
            <Link href="/contact" className="block hover:text-[#7A3EE1]">Contact Us</Link>
            <Link href="/hire">
              <button className="w-full bg-[#7A3EE1] text-white py-2 rounded-full font-semibold">
                Hire Now
              </button>
            </Link>
            <Link href="/proposal">
              <button className="w-full border border-[#7A3EE1] text-[#7A3EE1] py-2 rounded-full font-semibold">
                Request Proposal
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
