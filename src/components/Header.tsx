'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Games', href: '/games' },
    { label: 'Novels', href: '/novels' },
    { label: 'Briefings', href: '/briefings' },
    { label: 'Profile', href: '/profile' },
  ];

  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-gold-900/20 sticky top-0 z-50 shadow-lg shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-gold-500 tracking-tighter hover:text-gold-400 transition-all">
              MONSTER<span className="text-white">V2</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-400 hover:text-gold-500 transition-colors duration-150 text-sm font-bold uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-gold-500 hover:text-gold-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black border-t border-gold-900/20 py-4 space-y-2 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-gray-400 hover:text-gold-500 font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
