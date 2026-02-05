'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: 'bg-cyan-500 text-white hover:bg-cyan-600 shadow-md hover:shadow-lg active:bg-cyan-700',
    secondary: 'bg-slate-700 text-slate-100 hover:bg-slate-600 shadow-md hover:shadow-lg active:bg-slate-800',
    outline: 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white active:bg-cyan-600',
    danger: 'bg-rose-500 text-white hover:bg-rose-600 shadow-md hover:shadow-lg active:bg-rose-700',
    success: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-md hover:shadow-lg active:bg-emerald-700',
    ghost: 'text-slate-200 hover:bg-slate-700 hover:text-white active:bg-slate-800',
  };

  const sizeStyles = {
    xs: 'px-2 py-1 text-xs font-medium',
    sm: 'px-3 py-1.5 text-sm font-medium',
    md: 'px-4 py-2 text-base font-medium',
    lg: 'px-6 py-3 text-lg font-semibold',
    xl: 'px-8 py-4 text-xl font-semibold',
  };

  const disabledStyles = disabled || isLoading ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg font-medium
        transition-all duration-150 ease-out
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabledStyles}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="inline-flex animate-spin">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </span>
      )}
      {children}
    </button>
  );
}
