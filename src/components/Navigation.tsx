'use client';

import React from 'react';

export default function Navigation() {
  return (
    <aside className="w-64 bg-black border-r border-gold hidden md:block">
      <nav className="p-6 space-y-4">
        <h2 className="text-gold font-bold text-lg mb-6">Navigation</h2>
        <NavLink href="/games" label="🎮 Games" />
        <NavLink href="/novels" label="📚 Novels" />
        <NavLink href="/briefings" label="📋 Briefings" />
        <NavLink href="/profile" label="👤 Profile" />
      </nav>
    </aside>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="block px-4 py-2 text-white hover:bg-red rounded transition border border-transparent hover:border-gold"
    >
      {label}
    </a>
  );
}
