'use client';

import React, { useState } from 'react';
import Link from 'next/link';

/**
 * MinimalLayout Template
 * 
 * eastsea.monster 스타일의 미니멀 레이아웃 템플릿
 * 
 * Features:
 * - 하얀 배경
 * - 중앙 정렬 로고 (Space Grotesk 폰트)
 * - 카테고리 필터
 * - 미니멀 푸터
 * 
 * Usage:
 * ```tsx
 * <MinimalLayout
 *   logo="eastsea"
 *   subtitle="일일 브리핑 · 기술 리포트 · 개발 인사이트"
 *   categories={['전체', '브리핑', '다이제스트', ...]}
 *   onCategoryChange={(cat) => console.log(cat)}
 * >
 *   <YourContent />
 * </MinimalLayout>
 * ```
 */

interface MinimalLayoutProps {
  children: React.ReactNode;
  logo?: string;
  subtitle?: string;
  categories?: string[];
  onCategoryChange?: (category: string) => void;
  footerText?: string;
  footerLinks?: { label: string; href: string }[];
  logoStyle?: 'default' | 'alt'; // 'default' = Space Grotesk, 'alt' = Poppins
}

export default function MinimalLayout({
  children,
  logo = 'eastsea',
  subtitle = '일일 브리핑 · 기술 리포트 · 개발 인사이트',
  categories = ['전체', '브리핑', '다이제스트', '리포트', '일기', '플러싱', '업그레이드', '리서치', '기타'],
  onCategoryChange,
  footerText = '© 2026 East Sea Games · Built with passion',
  footerLinks = [
    { label: '브리핑', href: '#' },
    { label: '다이제스트', href: '#' },
    { label: '리포트', href: '#' },
    { label: '일기', href: '#' },
    { label: '플러싱', href: '#' },
    { label: '업그레이드', href: '#' },
    { label: '리서치', href: '#' },
    { label: '기타', href: '#' },
  ],
  logoStyle = 'default',
}: MinimalLayoutProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  const logoClass = logoStyle === 'alt' ? 'logo-text-alt' : 'logo-text';

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo & Subtitle */}
          <div className="text-center py-8">
            <Link href="/" className="inline-block group">
              <h1 className={`${logoClass} logo-underline text-blue-600 mb-2 hover:text-blue-700`}>
                {logo}
              </h1>
            </Link>
            <p className="text-sm text-gray-500">{subtitle}</p>
          </div>

          {/* Category Filter */}
          <nav 
            className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide"
            role="navigation" 
            aria-label="Category filter"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
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
      </header>

      {/* Main Content */}
      <main role="main" className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-4">
            <span className={`${logoClass} text-blue-600`} style={{ fontSize: '1.75rem' }}>
              {logo}god
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">{footerText}</p>
          <div className="flex justify-center gap-6 text-xs text-gray-400">
            {footerLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
