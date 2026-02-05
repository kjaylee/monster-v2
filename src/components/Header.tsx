'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Games', href: '/games' },
    { label: 'Novels', href: '/novels' },
    { label: 'Briefings', href: '/briefings' },
    { label: 'Profile', href: '/profile' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-cyan-500 group-hover:text-cyan-400 transition-colors">EAST</span>
              <span className="text-slate-100 group-hover:text-white transition-colors">SEA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-150 ease-out
                  ${
                    isActive(link.href)
                      ? 'bg-cyan-500/10 text-cyan-500 border-b-2 border-cyan-500'
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800'
                  }
                `}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-cyan-500 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav 
          className="md:hidden bg-slate-800 border-t border-slate-700 py-4 space-y-1 px-4"
          role="navigation" 
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                block py-3 px-4 rounded-lg text-base font-medium
                transition-all duration-150
                ${
                  isActive(link.href)
                    ? 'bg-cyan-500/10 text-cyan-500 border-l-4 border-cyan-500'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-700'
                }
              `}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
