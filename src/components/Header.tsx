'use client';

import React from 'react';

export default function Header() {
  return (
    <header className="bg-black border-b border-gold px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-gold">EASTSEA</h1>
          <p className="text-sm text-gray-400">Game Platform</p>
        </div>
        <nav className="flex items-center gap-6">
          <a href="/games" className="text-white hover:text-gold transition">Games</a>
          <a href="/novels" className="text-white hover:text-gold transition">Novels</a>
          <a href="/briefings" className="text-white hover:text-gold transition">Briefings</a>
          <a href="/profile" className="text-white hover:text-gold transition">Profile</a>
        </nav>
      </div>
    </header>
  );
}
