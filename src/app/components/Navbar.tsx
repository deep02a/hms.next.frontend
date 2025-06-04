'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can use heroicons or other icons too

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Home', 'Services', 'About Us', 'Contact'];

  return (
    <nav className="w-full shadow-md bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">HealthAI</div>

        {/* Hamburger Icon (mobile only) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-x-6 text-sm font-medium">
          {navLinks.map((label) => (
            <Link
              key={label}
              href={`/${label === 'Home' ? '' : label.toLowerCase().replace(/\s/g, '')}`}
              className="text-gray-700 px-3 py-2 hover:text-blue-500 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}

          <Link href="/login">
            <span className="px-3 py-2 text-sm font-medium text-gray-700 rounded hover:bg-blue-500 hover:text-white transition-all">
              Login
            </span>
          </Link>

          <Link href="/signup">
            <span className="px-3 py-2 text-sm font-medium text-gray-700 rounded hover:bg-blue-500 hover:text-white transition-all">
              Sign Up
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Nav Links (toggle) */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium">
          {navLinks.map((label) => (
            <Link
              key={label}
              href={`/${label === 'Home' ? '' : label.toLowerCase().replace(/\s/g, '')}`}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link href="/login" onClick={() => setMenuOpen(false)}>
            <span className="text-gray-700 hover:text-blue-500">Login</span>
          </Link>

          <Link href="/signup" onClick={() => setMenuOpen(false)}>
            <span className="text-gray-700 hover:text-blue-500">Sign Up</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
