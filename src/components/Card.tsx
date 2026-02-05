'use client';

import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ title, description, children, className = '' }: CardProps) {
  return (
    <div className={`bg-black border-2 border-gold rounded-lg p-6 hover:shadow-lg hover:shadow-gold/20 transition ${className}`}>
      {title && <h3 className="text-xl font-bold text-gold mb-2">{title}</h3>}
      {description && <p className="text-gray-400 mb-4">{description}</p>}
      {children}
    </div>
  );
}
