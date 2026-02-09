'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const pathname = usePathname();

  const categories = [
    '전체', '브리핑', '다이제스트', '리포트', '일기', 
    '플러싱', '업그레이드', '리서치', '기타'
  ];

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo & Subtitle - Center Aligned */}
        <div className="text-center py-8">
          <Link href="/" className="inline-block group">
            <h1 className="logo-text logo-underline text-blue-600 mb-2 hover:text-blue-700">
              eastsea
            </h1>
          </Link>
          <p className="text-sm text-gray-500">
            일일 브리핑 · 기술 리포트 · 개발 인사이트
          </p>
        </div>

        {/* Category Filter - Horizontal Scroll on Mobile */}
        <nav 
          className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide"
          role="navigation" 
          aria-label="Category filter"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap
                transition-all duration-200
                ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
              `}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
}
