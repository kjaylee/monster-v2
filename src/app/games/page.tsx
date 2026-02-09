'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GamesPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to games.eastsea.xyz
    window.location.href = 'https://games.eastsea.xyz';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">게임 페이지로 이동 중...</h2>
        <p className="text-gray-600">
          잠시만 기다려주세요. 
          <a href="https://games.eastsea.xyz" className="text-blue-600 hover:underline ml-1">
            수동으로 이동하기 →
          </a>
        </p>
      </div>
    </div>
  );
}
