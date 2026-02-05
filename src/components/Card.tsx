'use client';

import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'accent';
  onClick?: () => void;
}

export default function Card({
  title,
  description,
  children,
  className = '',
  variant = 'default',
  onClick,
}: CardProps) {
  const variantStyles = {
    default: 'bg-slate-800 border border-slate-700',
    hover: 'bg-slate-800 border border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer',
    accent: 'bg-slate-800 border border-cyan-500/30 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10',
  };

  return (
    <div
      className={`
        ${variantStyles[variant]}
        rounded-xl p-6
        transition-all duration-200 ease-out
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {title && (
        <h3 className="text-lg md:text-xl font-semibold text-slate-100 mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm md:text-base text-slate-400 mb-4">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
