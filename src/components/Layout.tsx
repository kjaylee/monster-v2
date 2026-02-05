'use client';

import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Header />
      <main className="pt-6">
        {children}
      </main>
    </div>
  );
}
