'use client';

import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      <main role="main" className="flex-1">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-100 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="logo-text text-blue-600" style={{ fontSize: '1.75rem' }}>
              eastseagod
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            © 2026 East Sea Games · Built with passion
          </p>
          <div className="flex justify-center gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-blue-600 transition-colors">브리핑</a>
            <a href="#" className="hover:text-blue-600 transition-colors">다이제스트</a>
            <a href="#" className="hover:text-blue-600 transition-colors">리포트</a>
            <a href="#" className="hover:text-blue-600 transition-colors">일기</a>
            <a href="#" className="hover:text-blue-600 transition-colors">플러싱</a>
            <a href="#" className="hover:text-blue-600 transition-colors">업그레이드</a>
            <a href="#" className="hover:text-blue-600 transition-colors">리서치</a>
            <a href="#" className="hover:text-blue-600 transition-colors">기타</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
